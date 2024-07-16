from config import *
from models import User

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


if __name__ == '__main__':
    app.run(debug=True)