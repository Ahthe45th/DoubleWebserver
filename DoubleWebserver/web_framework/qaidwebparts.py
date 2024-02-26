#!/usr/bin/python3
import logging
import base64
import datetime
import os 

import RAHIB.UTILS.storage.Location as Location

from flask import Blueprint, send_file

log_pth = Location.general_storage() + '/socialmediarecord.log'
template_folder=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

storage = Location.general_storage()
data_locale = Location.general_storage() + '/nikahmubasit/'
chats_data_locale = Location.general_storage() + '/nikahmubasit_chats/'

webparts_blueprint = Blueprint('webparts_blueprint', __name__)

@webparts_blueprint.route('/static/<type>/<file>', methods=['GET', 'POST'])
def serve_static_react_files(type, file):
    return send_file(f"{template_folder}/templates/socialmedia/build/static/{type}/{file}")

@webparts_blueprint.route('/plans/<file>', methods=['GET', 'POST'])
def serve_static_plans(file):
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/signup', methods=['GET', 'POST'])
def signup():
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/advertising', methods=['GET', 'POST'])
def advertising():
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/', methods=['GET', 'POST'])
def mainindexui():
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/viewarticle/<id>', methods=['GET', 'POST'])
def viewarticle(id):
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/viewarticlen/<id>', methods=['GET', 'POST'])
def viewarticlen(id):
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/editarticle/<id>', methods=['GET', 'POST'])
def editarticle(id):
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/segment/<type>/<other>', methods=['GET', 'POST'])
def segment(type, other):
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/journalist/perfiles/<id>', methods=['GET', 'POST'])
def perfil(id):
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/stories', methods=['GET', 'POST'])
def stories():
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/allstories', methods=['GET', 'POST'])
def allstories():
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")

@webparts_blueprint.route('/comingsoon', methods=['GET', 'POST'])
def comingsoon():
    return send_file(f"{template_folder}/templates/socialmedia/build/index.html")


