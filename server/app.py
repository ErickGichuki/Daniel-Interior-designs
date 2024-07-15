from config import *

@app.route('/')
def index():
    return 'Welcome to Daniel interiors'

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    

if __name__ == '__main__':
    app.run(debug=True)