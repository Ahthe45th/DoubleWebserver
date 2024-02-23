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

def add_data_application(connection, argsdict):
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
        statement = "INSERT INTO digitalstart (email, phonenumber, businessname) VALUES (%s, %s, %s)"
        data = (argsdict['email'], argsdict['phonenumber'], argsdict['businessname'])
        cursor.execute(statement, data)
        connection.commit()
        print("Successfully added entry to database")
        return {'response':200}
    except database.Error as e:
        print(f"Error adding entry to database: {e}")
        return {'response':500}
  