from flask import render_template
from config import *
from models import User, Service, Contact


@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")

# @app.route('/')
#def index():
#    return 'Welcome to Daniel interiors'

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    
    new_user = User(
        username = data['username'],
        email = data['email'],
        password = hashed_password
    )
    db.session.add(new_user)
    db.session.commit()

    return make_response(jsonify({'message': 'user created successfully'}), 201)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or 'email' not in data or 'password' not in data:
        return make_response(jsonify({'message': 'You are needed to enter the email and password'}))
    
    user = User.query.filter_by(email=data['email']).first()
    if not user or not bcrypt.check_password_hash(user.password, data['password']):
        return make_response(jsonify({'message': 'Invalid email or password'}), 401)
    
    access_token = create_access_token(identity={'id':user.id})
    return make_response(jsonify(access_token=access_token, user=user.to_dict()), 200)

@app.route('/service', methods=['POST'])
def service():
    data = request.get_json()

    service = Service(
        name = data['name'],
        description = data['description']
    )
    db.session.add(service)
    db.session.commit()

    return make_response(jsonify({'message': 'service created successfully'}), 201)

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()

    contact = Contact(
        message = data['message'],
        name = data['name'],
        email = data['email'],
        phone = data['phone'],
        project = data['project']
    )
    db.session.add(contact)
    db.session.commit()
    return make_response(jsonify({'message': "Thank you for contacting Daniel Interiors your message is being looked upon."}))

@app.route('/service/<int:id>', methods=['DELETE'])
def delete_service(id):
    service = Service.query.filter(Service.id==id).first()
    db.session.delete(service)
    db.session.commit()
    return make_response(jsonify({'message': 'service deleted successfully'}), 200)

@app.route('/contact/<int:id>', methods=['DELETE'])
def contact_deletion(id):
    contact = Contact.query.filter(Contact.id==id).first()
    db.session.delete(contact)
    db.session.commit()
    return make_response(jsonify({'message': 'contact information deleted'}))

@app.route('/service', methods=['GET'])
def get_service():
    services = Service.query.all()
    service_list = [service.to_dict() for service in services]
    return make_response(jsonify(service_list), 200)

@app.route('/reset_password', methods=['POST'])
def reset_password():
    my_data = request.get_json()
    email = my_data.get('email')
    new_password = my_data.get('new_password')

    if not email:
        return make_response(jsonify({'message': 'Email is required'}), 400)

    user = User.query.filter_by(email=email).first()
    if not user:
        return make_response(jsonify({'message': 'Email not found'}), 404)

    if new_password:
        hashed_password = bcrypt.generate_password_hash(new_password).decode('utf-8')
        user.password = hashed_password
        db.session.commit()
        return make_response(jsonify({'message': 'Password has been reset successfully'}), 200)
    else:
        return make_response(jsonify({'message': 'New password is required'}), 400)
    
if __name__ == '__main__':
    app.run(debug=True)