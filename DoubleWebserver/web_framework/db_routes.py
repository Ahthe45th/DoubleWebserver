#!/usr/bin/python3
import logging
import base64
import datetime

import RAHIB.UTILS.storage.Location as Location

from flask import Blueprint, request, redirect, abort, g
import mysql.connector as database

# import DoubleWebserver.utils.general as general_utils
import DoubleWebserver.utils.database_functions as database_utils 

log_pth = Location.general_storage() + '/maintingrecord.log'
logging.basicConfig(filename=log_pth, level=logging.DEBUG)

storage = Location.general_storage()
data_locale = Location.general_storage() + '/nikahmubasit/'
chats_data_locale = Location.general_storage() + '/nikahmubasit_chats/'

db_blueprint = Blueprint('db_blueprint', __name__)

username = "jahangir"
password = "j.a.h.a.n.g.i.r.e.m.i.r.u.l.h.i.n.d"

dbconfig = {
    "host":"127.0.0.1",
    "user":username,
    "password":password,
    "database":"businesses",
}

@db_blueprint.before_request
def db_connect():
    g.db_conn = database.connect(**dbconfig)

@db_blueprint.teardown_request
def db_disconnect(exception=None):
    g.db_conn.close()

@db_blueprint.route('/addapplication', methods=['GET', 'POST'])
def __add_data_journo():
    values = dict(request.values)
    resp = database_utils.add_data_application(g.db_conn,values)
    if resp['response'] == 200:
        return redirect('/')
    else:
        abort(500)

