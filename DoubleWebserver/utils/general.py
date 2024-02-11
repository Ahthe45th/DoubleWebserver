import os
import json
import traceback
import datetime
import shutil
import time
import random
import flask
#!/usr/bin/python3
import os
import json
import datetime 
import bcrypt
import pickle

import RAHIB.UTILS.storage.Location as Location

import base64 

from PIL import Image

import RAHIB.UTILS.storage.Location as Location

from werkzeug.utils import secure_filename
from RAHIB.UTILS.misc.other import generate_fake_id

storage = Location.general_storage()
data_locale = Location.general_storage() + '/nikahmubasit/'
halaallove = "/var/www/lovehalaal/"
chats_data_locale = Location.general_storage() + '/nikahmubasit_chats/'

data_entries_all = [data_locale + '/' + entry for entry in os.listdir(data_locale) if entry.endswith('.json') if '@' not in entry]
data_entries_all_muslim = [entry for entry in data_entries_all]

data_entries_email = [data_locale + '/' + entry for entry in os.listdir(data_locale) if entry.endswith('.json') if '@' in entry]

if not os.path.exists(Location.general_storage() + '/imguploads/'):
    os.mkdir(Location.general_storage() + '/imguploads/')
if not os.path.exists(Location.general_storage() + '/journouploads/'):
    os.mkdir(Location.general_storage() + '/journouploads/')
if not os.path.exists(Location.general_storage() + '/anunciouploads/'):
    os.mkdir(Location.general_storage() + '/anunciouploads/')

def uploadimage(data):
    storage = Location.general_storage() + '/imguploads/'

    imagedata = data.pop('image')
    date = data.pop('date','').replace('/','.')
    journo = data.pop('journo','').replace(' ', '_')
    segment = data.pop('segment','').replace(' ', '_')

    file_pth = storage + date + journo + segment + '.png'    
    
    with open(file_pth, 'wb') as file:
        file.write(base64.b64decode(imagedata.split(',')[1]))

    return {'resp':200}

def uploadjournoimage(data):
    storage = Location.general_storage() + '/journouploads/'

    imagedata = data.pop('image')
    journo = data.pop('name','').replace(' ', '_')

    file_pth = f"{storage}{datetime.datetime.now().timestamp()}{journo}.png"
    
    with open(file_pth, 'wb') as file:
        file.write(base64.b64decode(imagedata.split(',')[1]))

    return {'resp':200}

def uploadanuncioimage(data):
    storage = Location.general_storage() + '/anunciouploads/'

    if 'image' in data: 
        imagedata = data.pop('image')
        extension = '.png'
    else:
        imagedata = data.pop('video')
        extension = '.mp4'
        
    journo = data.pop('name','').replace(' ', '_')

    file_pth = f"{storage}{datetime.datetime.now().timestamp()}{journo}{extension}"
    
    with open(file_pth, 'wb') as file:
        file.write(base64.b64decode(imagedata.split(',')[1]))

    return {'resp':200}

def getimageorimages(data, type):
    datas = {
        'img':'/cargarseunimagen/',
        'journo':'/cargarseunjournoimagen/',
        'anuncio':'/cargarseunanuncioimagen/'
    }
    storage = Location.general_storage() + f'/{type}uploads/'
    if data:
        if 'date' in data:
            date = data.pop('date','').replace('/','.')
        if 'journo' in data:
            journo = data.pop('journo','').replace(' ', '_')
        if 'segment' in data:
            segment = data.pop('segment','').replace(' ', '_')
        
        if date:
            file_pth = [datas[type] +x for x in os.listdir(storage) if date in x]
        else:  
            file_pth = [datas[type] +x for x in os.listdir(storage)]
        
        if journo:
            file_pth = [x for x in file_pth if journo in x]
        if segment:
            file_pth = [x for x in file_pth if segment in x]
    else:
        file_pth = [datas[type] +x for x in os.listdir(storage)]

    return file_pth