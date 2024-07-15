from flask import Flask, make_response, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, ForeignKey
from sqlalchemy_serializer import SerializerMixin
from flask_migrate import Migrate


metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///tony.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db=SQLAlchemy(metadata=metadata)
db.init_app(app)
migrate=Migrate(app, db)

