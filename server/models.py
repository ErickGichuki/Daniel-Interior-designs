from config import *
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)

    projects = association_proxy('bookings', 'project')
    bookings = db.relationship('Booking', cascade='all, delete-orphan', back_populates='user')

    @validates('email')
    def validate_email(self, key, address):
        if '@' not in address:
            raise ValueError('Failed to validate the email')
        return address
    
    def __repr__(self):
        return f'<User {self.name} with {self.username}>'

class Project(db.Model, SerializerMixin):
    __tablename__ = 'projects'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    bookings = db.relationship('Booking', cascade='all, delete-orphan', back_populates='project')

    def __repr__(self):
        return f'<Project {self.name} {self.description}>'

class Booking(db.Model, SerializerMixin):
    __tablename__ = 'bookings'
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'))

    service = db.relationship('Service', back_populates='bookings')
    project = db.relationship('Project', back_populates='bookings')
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship('User', back_populates='bookings')

    def __repr__(self):
        return f'<Booking {self.id}>'

class Service(db.Model, SerializerMixin):
    __tablename__ = 'services'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)

    bookings = db.relationship('Booking', cascade='all, delete-orphan', back_populates='service')

    def __repr__(self):
        return f'Service {self.name} will cost you {self.price}'
    
class Contact(db.Model, SerializerMixin):
    __tablename__ = 'contacts'
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    phone = db.Column(db.String, nullable=False)
    project = db.Column(db.String, nullable=False)

    @validates('email')
    def validate_email(self, key, address):
        if '@' not in address:
            raise ValueError('Failed to validate the email')
        return address

    
    def __repr__(self):
        return f'Contact {self.message} {self.project}'
    