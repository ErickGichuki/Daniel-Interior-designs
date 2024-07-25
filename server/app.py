from config import *
from models import User, Service, Contact

@app.route('/')
def index():
    return 'Welcome to Daniel interiors'

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

@app.route('/service', methods=['GET'])
def get_service():
    services = Service.query.all()
    service_list = [service.to_dict() for service in services]
    return make_response(jsonify(service_list), 200)


if __name__ == '__main__':
    app.run(debug=True)