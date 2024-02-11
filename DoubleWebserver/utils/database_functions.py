#!/usr/bin/python3
import logging
import base64
import datetime
import traceback

import RAHIB.UTILS.storage.Location as Location
import mysql.connector as database

storage = Location.general_storage()
data_locale = Location.general_storage() + '/nikahmubasit/'
chats_data_locale = Location.general_storage() + '/nikahmubasit_chats/'

username = "jahangir"
password = "j.a.h.a.n.g.i.r.e.m.i.r.u.l.h.i.n.d"

dbconfig = {
    "host":"127.0.0.1",
    "user":username,
    "password":password,
    "database":"UKD",
}

# def sanitize_val(item, key):
#    try:
      
#    except:   

# connection = database.connect(pool_name = "mypool", pool_size = 3, **dbconfig)
# cursor = connection.cursor()

def add_data_journo(connection, argsdict):
    '''
    journalist_id int auto_increment,
    LastName varchar(255),
    FirstName varchar(255),
    MiddleName varchar(255),
    Location varchar(255),
    Email varchar(255),
    Password varchar(255),
    Segments TEXT,
    fb_profile TEXT
    PRIMARY KEY (journalist_id)
    '''
    cursor = connection.cursor()
    try:
        statement = "INSERT INTO journalists (LastName, FirstName, MiddleName, Segments, Location, Email, Password, fb_profile) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        data = (argsdict['LastName'], argsdict['FirstName'], argsdict['MiddleName'], argsdict['Segments'], argsdict['Location'], argsdict['Email'], argsdict['Password'], argsdict['fb_profile'])
        cursor.execute(statement, data)
        connection.commit()
        print("Successfully added entry to database")
        return {'response':200}
    except database.Error as e:
        print(f"Error adding entry to database: {e}")
        return {'response':500}
    
def check_credentials(connection, argsdict):
    '''
    journalist_id int auto_increment,
    LastName varchar(255),
    FirstName varchar(255),
    MiddleName varchar(255),
    Location varchar(255),
    Email varchar(255),
    Password varchar(255),
    Segments TEXT,
    PRIMARY KEY (journalist_id)
    '''
    cursor = connection.cursor()
    statement = f"SELECT Password, journalist_id FROM journalists WHERE Email='{argsdict['email']}'"
    cursor.execute(statement)
    
    values_list = []
    for (Password, journalist_id) in cursor:
      values_list.append({'Password':Password, 'journalist_id':journalist_id})

    if values_list:
        if values_list[0]['Password'] == argsdict['password']:
            return {'response':200,'id':values_list[0]['journalist_id']}
        else:
            return {'response':500}
    else:
        print('User exists not.')
        return {'response':500}
    
def add_data_comments(connection, argsdict):
    '''
    comment_id int auto_increment,
    Name varchar(255),
    Email varchar(255),
    commenttext TEXT,
    article_id int,
    publishtimestamp int,
    PRIMARY KEY (comment_id)
    '''
    try:
        cursor = connection.cursor()
        statement = "INSERT INTO comments (Name, Email, commenttext, article_id, publishtimestamp) VALUES (%s, %s, %s, %s, %s)"
        data = (argsdict['Name'], argsdict['Email'], argsdict['commenttext'], argsdict['article_id'], datetime.datetime.now().timestamp())
        cursor.execute(statement, data)
        connection.commit()
        print("Successfully added entry to database")
        return {'response':200}
    except database.Error as e:
        print(f"Error adding entry to database: {e}")
        return {'response':500}
    
def add_data_articles(connection, cursor, text):
    '''
    article_id int auto_increment,
    articletext TEXT,
    journalist_id int,
    wget -O- --post-data='{"article":"UMM"}' \
    --header='Content-Type:application/json' \
    'http://18.224.85.241:31300/addarticles'
    '''
    try:
        statement = "INSERT INTO articles (articletext) VALUES (%s)"
        data = (text)
        cursor.execute(statement, (data,))
        connection.commit()
        return cursor.lastrowid
    except database.Error as e:
        print(f"Error adding entry to database: {e}")
        return {'response':500}
    
def updatearticle(connection, argsdict):
    '''
    CREATE TABLE UKD.articles (
    article_id int auto_increment,
    articletext TEXT,
    journalist_id int,
    segment_id int,
    cover varchar(255),
    status varchar(255),
    publishtime varchar(255),
    lastedittime varchar(255),
    lastedittimestamp int,
    publishtimestamp int,
    PRIMARY KEY (article_id)
    );
    '''
    cursor = connection.cursor()
    if argsdict['new'] == "true":
       idtoedit = add_data_articles(connection, cursor, argsdict['articletext'])
    else:
       idtoedit = argsdict['article_id']

    text = argsdict['articletext'].replace("'", "''")
    if argsdict['publish'] == "true":
       
       statement = f'''UPDATE articles SET articletext='{text}', publishtimestamp={datetime.datetime.now().timestamp()}, lastedittimestamp={datetime.datetime.now().timestamp()}, status='{argsdict['status']}', title='{argsdict['title'].replace("'", "''")}', AdCreativeLink='{argsdict['AdCreativeLink']}', cover='{argsdict['cover']}', Segments='{argsdict['Segments']}', journalist_id={argsdict['journalist_id']}, scheduledate={argsdict['scheduledate']} WHERE article_id={idtoedit};'''
    else:
       statement = f'''UPDATE articles SET articletext='{text}', lastedittimestamp={datetime.datetime.now().timestamp()}, status='{argsdict['status']}', title='{argsdict['title'].replace("'", "''")}', journalist_id={argsdict['journalist_id']}, AdCreativeLink='{argsdict['AdCreativeLink']}', cover='{argsdict['cover']}', Segments='{argsdict['Segments']}', scheduledate={argsdict['scheduledate']} WHERE article_id={idtoedit};'''
    try:
        cursor.execute(statement)
        connection.commit()
        print("Successfully added entry to database")
        return {'response':argsdict}
    except database.Error as e:
        print(f"Error adding entry to database: {e}")
        return {'response':500}
    
def updatejourno(connection, argsdict):
    '''
    CREATE TABLE UKD.journalists (
    journalist_id int auto_increment,
    LastName varchar(255),
    FirstName varchar(255),
    MiddleName varchar(255),
    Location varchar(255),
    Email varchar(255),
    Password varchar(255),
    Profilepic TEXT,
    Segments TEXT,
    fb_profile TEXT,
    PRIMARY KEY (journalist_id)
    );
    '''
    cursor = connection.cursor()
    statement = f'''UPDATE journalists SET Profilepic='{argsdict['Profilepic']}', fb_profile='{argsdict['fb_profile']}', Segments='{argsdict['Segments']}', Password='{argsdict['Password']}', Email='{argsdict['Email']}', Location='{argsdict['Location']}', MiddleName='{argsdict['MiddleName']}', FirstName='{argsdict['FirstName']}', LastName='{argsdict['LastName']}' WHERE journalist_id={argsdict['journalist_id']};'''
    try:
        cursor.execute(statement)
        connection.commit()
        print("Successfully added entry to database")
        return {'response':argsdict}
    except database.Error as e:
        with open(storage+'sqlerrors.log', 'a') as file:
           file.write(traceback.format_exc() + '\n')

        print(f"Error adding entry to database: {e}")
        return {'response':500}

def get_data_journo(connection, argsdict=''):
    '''
    journalist_id int auto_increment,
    LastName varchar(255),
    FirstName varchar(255),
    MiddleName varchar(255),
    Location varchar(255),
    Email varchar(255),
    Password varchar(255),
    Segments TEXT,
    PRIMARY KEY (journalist_id)
    wget -O- --post-data='{"FirstName":"UMM", "MiddleName":"POPO", "LastName":"UIOP", "Location":"NMO", "Email":"1@m.com", "Password":"MOP", "Segments":"Mop"}' \
    --header='Content-Type:application/json' \
    'http://18.224.85.241:31300/addjourno'
    '''
    try:
      values_list = []
      cursor = connection.cursor()
      if argsdict == '':
        statement = "SELECT FirstName, MiddleName, LastName, Segments, Location, journalist_id, Email, fb_profile FROM journalists"
        cursor.execute(statement)
      else:
        statement = f"SELECT FirstName, MiddleName, LastName, Segments, Location, journalist_id, Email, fb_profile FROM journalists WHERE journalist_id={argsdict['__id']}"
        cursor.execute(statement)
      
      values = cursor.fetchall()
      
      for liltuple in values:
         values_list.append({'FirstName':liltuple[0],'MiddleName':liltuple[1], 'LastName':liltuple[2], 'Segments':liltuple[3], 'Location': liltuple[4], 'journalist_id':liltuple[5], 'Email':liltuple[6], 'fb_profile':liltuple[7]})
      
      return {'response':{'data':values_list}}
    except database.Error as e:
      print(f"Error retrieving entry from database: {e}")
      return {"response":500}
    
def get_data_comments(connection, argsdict):
    '''
    comment_id int auto_increment,
    Name varchar(255),
    Email varchar(255),
    commenttext TEXT,
    article_id int,
    PRIMARY KEY (comment_id)
    '''
    try:
      values_list = []
      cursor = connection.cursor()
      statement = f"SELECT Name, Email, commenttext, article_id, publishtimestamp FROM comments WHERE article_id={argsdict['article_id']}"
      cursor.execute(statement)

      for (Name, Email, commenttext, article_id, publishtimestamp) in cursor:
         values_list.append({'Name':Name,'Email':Email, 'commenttext':commenttext, 'article_id':article_id, 'publishtimestamp':publishtimestamp})
      return {'response':{'data':values_list}}
    except database.Error as e:
      print(f"Error retrieving entry from database: {e}")
      return {"response":500}
    
def get_data_articles(connection, argsdict=''):
    '''
    article_id int auto_increment,
    articletext TEXT,
    journalist_id int,
    '''
    try:
      values_list = []
      cursor = connection.cursor()
      if argsdict == '':
        statement = "SELECT article_id, articletext, journalist_id, cover, title, status, AdCreativeLink, publishtimestamp, lastedittimestamp, Segments, scheduledate FROM articles"
        cursor.execute(statement)
      elif 'article_id' in argsdict:
        statement = f"SELECT article_id, articletext, journalist_id, cover, title, status, AdCreativeLink, publishtimestamp, lastedittimestamp, Segments, scheduledate FROM articles WHERE article_id={argsdict['article_id']}"
        cursor.execute(statement)
      else:
        if 'status' in argsdict and 'journalist_id' in argsdict:
            statement = f"SELECT article_id, articletext, journalist_id, cover, title, status, AdCreativeLink, publishtimestamp, lastedittimestamp, Segments, scheduledate FROM articles WHERE journalist_id={argsdict['journalist_id']} AND status='{argsdict['status']}'"
        elif 'status' in argsdict and 'journalist_id' not in argsdict:
            statement = f"SELECT article_id, articletext, journalist_id, cover, title, status, AdCreativeLink, publishtimestamp, lastedittimestamp, Segments, scheduledate FROM articles WHERE status='{argsdict['status']}'"
        elif 'title' in argsdict:
            statement = f"SELECT article_id, articletext, journalist_id, cover, title, status, AdCreativeLink, publishtimestamp, lastedittimestamp, Segments, scheduledate FROM articles WHERE title LIKE '%{argsdict['title'].upper()}%'"
        else:
            statement = f"SELECT article_id, articletext, journalist_id, cover, title, status, AdCreativeLink, publishtimestamp, lastedittimestamp, Segments, scheduledate FROM articles WHERE journalist_id={argsdict['journalist_id']}"
        cursor.execute(statement)
      
      values = cursor.fetchall()
      
      for liltuple in values:
         values_list.append({'article_id':liltuple[0],'articletext':liltuple[1], 'journalist_id':liltuple[2], 'cover':liltuple[3], 'title':liltuple[4], 'status':liltuple[5], 'AdCreativeLink':liltuple[6], 'publishtimestamp':liltuple[7], 'lastedittimestamp':liltuple[8], 'Segments':liltuple[9], 'scheduledate':liltuple[10]})

      return {'response':{'data':values_list}}
    except database.Error as e:
      print(f"Error retrieving entry from database: {e}")
      return {"response":500}
    
def get_data_articles_after(connection, argsdict=''):
    '''
    article_id int auto_increment,
    articletext TEXT,
    journalist_id int,
    '''
    try:
      values_list = []
      cursor = connection.cursor()
      
      if 'Segments' not in argsdict:
        statement = f"SELECT article_id, articletext, journalist_id, cover, title, status, AdCreativeLink, publishtimestamp, lastedittimestamp, Segments, scheduledate FROM articles WHERE publishtimestamp>{argsdict['timestamp']} AND status='{argsdict['status']}'"
      else:
         statement = f"SELECT article_id, articletext, journalist_id, cover, title, status, AdCreativeLink, publishtimestamp, lastedittimestamp, Segments, scheduledate FROM articles WHERE publishtimestamp>{argsdict['timestamp']} AND status='{argsdict['status']}' AND Segments='{argsdict['Segments']}'"

      cursor.execute(statement)
      values = cursor.fetchall()
      
      for liltuple in values:
         values_list.append({'article_id':liltuple[0],'articletext':liltuple[1], 'journalist_id':liltuple[2], 'cover':liltuple[3], 'title':liltuple[4], 'status':liltuple[5], 'AdCreativeLink':liltuple[6], 'publishtimestamp':liltuple[7], 'lastedittimestamp':liltuple[8], 'Segments':liltuple[9], 'scheduledate':liltuple[10]})

      return {'response':{'data':values_list}}
    except database.Error as e:
      print(f"Error retrieving entry from database: {e}")
      return {"response":500}

#
