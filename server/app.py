#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource


# Local imports
from config import app, db, api
from models import User
# Add your model imports

def get_property_val_from_user_dict(value, user_dict ):
    if value in user_dict:
        return user_dict[value]
    return None

# Views go here!
class Login(Resource):
    def post(self):
        login_params = request.get_json()
        print("Here in Login")
        user_check = User.query.filter(User.username == login_params["username"]).first()
        print(f"user_check = ${user_check}")
        # have to check the truthiness of user_check in case the username is not found in the database
        if (user_check and user_check.authenticate(login_params["password"])) :
            response = make_response (
                user_check.to_dict(), 200
            )
        else :
            response = {"error" :"401 - Login Failed"}, 401

        return response
    
class Signup(Resource):
    def post(self):
        new_user_params = request.get_json()

        new_user = get_property_val_from_user_dict("username", new_user_params)

        new_user = User(
            username = get_property_val_from_user_dict("username", new_user_params ),
            first_name = get_property_val_from_user_dict("first_name", new_user_params ),
            last_name = get_property_val_from_user_dict("last_name", new_user_params ),
            email = get_property_val_from_user_dict("email", new_user_params ),
            phone = get_property_val_from_user_dict("phone", new_user_params ),
            address1 = get_property_val_from_user_dict("address1", new_user_params ),
            address2 = get_property_val_from_user_dict("address2", new_user_params ),
            city = get_property_val_from_user_dict("city", new_user_params ),
            state = get_property_val_from_user_dict("state", new_user_params ),
            zip = get_property_val_from_user_dict("zip", new_user_params )    
        )
        new_user.password_hash = get_property_val_from_user_dict("password", new_user_params )

        try:
            db.session.add(new_user)
            db.session.commit()
            new_user_added = True
        except:
            new_user_added = False
        
        # Set up the session cookie.  We're in luck!
        if new_user_added:
            session["user_id"] = new_user.id
            response = make_response(
                new_user.to_dict(),
                201
            )
        else:
             response = {}, 422
        
        return response
    

class UserById(Resource):

    def patch(self, id) :

        user = User.query.filter(User.id == id).first()

        for attr in request.form:
            setattr(user, attr, request.form[attr])

        db.session.add(user)
        db.session.commit()

        response_dict = user.to_dict()

        response = make_response(
            response_dict,
            200
        )

        return response

api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(UserById, '/user/<int:id>')
                 
@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

