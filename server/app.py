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
class Signup(Resource):
    def post(self):
        new_user_params = request.get_json()

        new_user = get_property_val_from_user_dict("username", new_user_params)

        new_user = User(
            username = get_property_val_from_user_dict("username", new_user_params ),
            firstName = get_property_val_from_user_dict("firstName", new_user_params ),
            lastName = get_property_val_from_user_dict("lastName", new_user_params ),
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

api.add_resource(Signup, '/signup', endpoint='signup')
@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

