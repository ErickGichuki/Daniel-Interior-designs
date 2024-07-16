from flask import Flask, make_response, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, ForeignKey
from sqlalchemy_serializer import SerializerMixin
from flask_migrate import Migrate
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity


metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///tony.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = '27f4dca617b04e3ab8b02625279e0f5c'
app.config['JWT_SECRET_KEY'] = 'Great2024'

db=SQLAlchemy(metadata=metadata)
db.init_app(app)
CORS(app)
migrate=Migrate(app, db)
bcrypt=Bcrypt(app)
jwt=JWTManager(app)

