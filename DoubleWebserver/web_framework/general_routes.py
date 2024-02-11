#!/usr/bin/python3
import logging

import RAHIB.UTILS.storage.Location as Location

from flask import Blueprint, request, send_file

import DoubleWebserver.utils.general as general_utils

log_pth = Location.general_storage() + '/UKDrecord.log'
logging.basicConfig(filename=log_pth, level=logging.DEBUG)

storage = Location.general_storage()
data_locale = Location.general_storage() + '/nikahmubasit/'
chats_data_locale = Location.general_storage() + '/nikahmubasit_chats/'

general_blueprint = Blueprint('general_blueprint', __name__)

@general_blueprint.route('/uploadeseimagenmihermano', methods=['GET', 'POST'])
def uploadeseimagenmihermano():
    argsdict = dict(request.get_json())
    return general_utils.uploadimage(argsdict)

@general_blueprint.route('/uploadeseimagenjournomihermano', methods=['GET', 'POST'])
def uploadeseimagejournonmihermano():
    argsdict = dict(request.get_json())
    return general_utils.uploadjournoimage(argsdict)

@general_blueprint.route('/uploadeseimagenanunciomihermano', methods=['GET', 'POST'])
def uploadeseimageanuncionmihermano():
    argsdict = dict(request.get_json())
    return general_utils.uploadanuncioimage(argsdict)

@general_blueprint.route('/cargarseimagenmihermano', methods=['GET', 'POST'])
def cargarseimagenmihermano():
    return {'response':general_utils.getimageorimages({}, 'img')}

@general_blueprint.route('/cargarseimagenjournomihermano', methods=['GET', 'POST'])
def cargarseimagenjournomihermano():
    return {'response':general_utils.getimageorimages({}, 'journo')}

@general_blueprint.route('/cargarseimagenanunciomihermano', methods=['GET', 'POST'])
def cargarseimagenanunciomihermano():
    return {'response':general_utils.getimageorimages({}, 'anuncio')}

@general_blueprint.route('/cargarseimagen2journomihermano', methods=['GET', 'POST'])
def cargarseimagen2journomihermano():
    argsdict = dict(request.get_json())
    return {'response':general_utils.getimageorimages(argsdict, 'journo')}

@general_blueprint.route('/cargarseimagen2anunciomihermano', methods=['GET', 'POST'])
def cargarseimagen2anunciomihermano():
    argsdict = dict(request.get_json())
    if not argsdict:
        argsdict = {}
    return {'response':general_utils.getimageorimages(argsdict, 'anuncio')}

@general_blueprint.route('/cargarseimagen2mihermano', methods=['GET', 'POST'])
def cargarseimagen2mihermano():
    argsdict = dict(request.get_json())
    return {'response':general_utils.getimageorimages(argsdict, 'img')}

@general_blueprint.route('/cargarseunimagen/<pth>', methods=['GET'])
def cargarseunasolaimagenmihermano(pth):
    return send_file(Location.general_storage() + '/imguploads/' + pth)

@general_blueprint.route('/cargarseunjournoimagen/<pth>', methods=['GET'])
def cargarseunasolaimagenjournomihermano(pth):
    return send_file(Location.general_storage() + '/journoimguploads/' + pth)

@general_blueprint.route('/cargarseunanuncioimagen/<pth>', methods=['GET'])
def cargarseunasolaimagenanunciomihermano(pth):
    return send_file(Location.general_storage() + '/anunciouploads/' + pth)