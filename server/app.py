#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource


# Local imports
from config import app, db, api
from models import Horse, User, UserHorse, MorningFeed, EveningFeed
# Add your model imports

def get_property_val_from_user_dict(value, user_dict ):
    if value in user_dict:
        return user_dict[value]
    return None

# The id parameter is the id of the horse associated with this morning feed data
class EveningFeeding(Resource):

    def get(self, id):
        eveningFeed = EveningFeed.query.filter(EveningFeed.id == id).first()

        response = make_response(
            eveningFeed.get_evening_feed_dictionary(),
            200
        )
        return response
   
    def post(self, id):
        feed_params = request.get_json()

        new_evening_feed = EveningFeed(
            alfalfa_flakes = feed_params["alfalfa_flakes"],
            grass_hay_flakes = feed_params["grass_hay_flakes"],
            grain_pounds = feed_params["grain_pounds"],
            grain_type = feed_params["grain_type"],
            feed_notes = feed_params["feed_notes"]
        )


        db.session.add(new_evening_feed)
        db.session.commit()

        horse = Horse.query.filter(Horse.id == id).first()
        horse.evening_feed_id = new_evening_feed.id

        db.session.add(horse)
        db.session.commit()
        
        response = make_response(
            new_evening_feed.get_evening_feed_dictionary(),
            201
        )

        return response
    


# Views go here!

class HorseByOtherId(Resource):
    def get(self,id):
        print("HorseByOtherId")

        non_owned_horses = UserHorse.query.filter(UserHorse.user_id != id).all()

        non_owned_horse_array = []
        if non_owned_horses:
            for horse in non_owned_horses:
                horse = Horse.query.filter(Horse.id == horse.horse_id).first()
                non_owned_horse_array.append(horse.get_horse_dictionary())

            response = make_response(non_owned_horse_array, 200)
        else:
            response = make_response([], 200)

        return response



class HorseByUserId(Resource):
    def get(self, id):
        
        # Get the join table horse entries corresponding to the user
        user_horses = UserHorse.query.filter(UserHorse.user_id == id).all()

        if (user_horses):
            horse_array = []
            for user_horse in user_horses:
                horse = Horse.query.filter(Horse.id == user_horse.horse_id).first()
                horse_array.append(horse.get_horse_dictionary())

            response = make_response(horse_array, 200)
            
        else:
            print("No horses")
            response = make_response( [], 200)

        return response

    def post(self, id):
        horse_params = request.get_json()
        print("here in put horse by user id")
        print(horse_params)
        for key in horse_params.keys():
            print(f"horse_params {key} and {horse_params[key]}")
       

        new_horse = Horse (
                name = get_property_val_from_user_dict("name", horse_params),    
                vet_name = get_property_val_from_user_dict("vet_name", horse_params),
                vet_number = get_property_val_from_user_dict("vet_number", horse_params),
                care_notes = get_property_val_from_user_dict("care_notes", horse_params),
                photo_url = get_property_val_from_user_dict("photo_url", horse_params)
        )
        
        print(f"new_horse = {new_horse}")
        new_horse_added = True
        try:
            db.session.add(new_horse)
            db.session.commit()
        except:
            new_horse_added = False
        
        if (new_horse_added):
            print("Making entry in the join table")
            new_join_entry = UserHorse(horse_id = new_horse.id,
                user_id = id
            )
            
            print(f"new join entry {new_join_entry}")
            join_table_added = True
            try:
                db.session.add(new_join_entry)
                db.session.commit()
            except:
                join_table_added = False

        if new_horse_added and join_table_added:
            print("Sending the response data")
            response_data = new_horse.get_horse_dictionary()

            response = make_response( response_data, 201)


        else:
            response = make_response({}, 500 )

        return response


class Login(Resource):
    def post(self):
        login_params = request.get_json()
        print("Here in Login*********************************")
        user_check = User.query.filter(User.username == login_params["username"]).first()
        print(f"user_check = ${user_check}")
        # have to check the truthiness of user_check in case the username is not found in the database
        if (user_check and user_check.authenticate(login_params["password"])) :
            response = make_response (
                user_check.get_user_dictionary(), 200
            )
        else :
            response = {"error" :"401 - Login Failed"}, 401

        return response
    
# The id parameter is the id of the horse associated with this morning feed data
class MorningFeeding(Resource):
    def get(self, id):
        morningFeed = MorningFeed.query.filter(MorningFeed.id == id).first()

        response = make_response(
            morningFeed.get_morning_feed_dictionary(),
            200
        )

        return response
    
    def post(self, id):
        print("The horse id in MorningFeed post = {id}")
        feed_params = request.get_json()
        print("Morning feed feed params = {feed_params}")

        new_morning_feed = MorningFeed(
            alfalfa_flakes = feed_params["alfalfa_flakes"],
            grass_hay_flakes = feed_params["grass_hay_flakes"],
            grain_pounds = feed_params["grain_pounds"],
            grain_type = feed_params["grain_type"],
            feed_notes = feed_params["feed_notes"]
        )

        db.session.add(new_morning_feed)
        db.session.commit()

        print("The new morning feed id = {new_morning_feed.id}")
        horse = Horse.query.filter(Horse.id == id).first()
        horse.morning_feed_id = new_morning_feed.id

        db.session.add(horse)
        db.session.commit()
        
        response = make_response(
            new_morning_feed.get_morning_feed_dictionary(),
            201
        )

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
                new_user.get_user_dictionary(),
                201
            )
        else:
             response = {"error" : "Sign In Failed"   }, 422
        
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


api.add_resource(EveningFeeding, '/evening/<int:id>')
api.add_resource(HorseByUserId, '/horse/<int:id>')
api.add_resource(HorseByOtherId, '/otherhorse/<int:id>' )
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(MorningFeeding, '/morning/<int:id>')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(UserById, '/user/<int:id>')
                 
@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

