#!/usr/bin/python3
import logging
import os

import RAHIB.UTILS.storage.Location as Location

from flask import Flask
from flask_cors import CORS

from DoubleWebserver.web_framework.qaidwebparts import webparts_blueprint
from DoubleWebserver.web_framework.db_routes import db_blueprint

logging.basicConfig(filename=Location.general_storage() + '/socialmediaqaid.log', level=logging.DEBUG)

app = Flask('SOCIALMEDIA_SERVER', template_folder=os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
app.secret_key = "V1"

app.config['MAX_CONTENT_LENGTH'] = 200 * 1024 * 1024

app.register_blueprint(webparts_blueprint)
app.register_blueprint(db_blueprint)

CORS(app, resources={r"/*": {"origins": "*"}})