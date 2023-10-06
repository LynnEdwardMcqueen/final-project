from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property


from config import db,bcrypt

# Models go here!

# models.py

class UserHorse(db.Model, SerializerMixin):
    __tablename__ = 'users_horses'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    horse_id = db.Column(db.Integer, db.ForeignKey('horses.id'))
    
    def __repr__(self):
        return f'<User {self.user_id} {self.horse_id} >'

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable = False, unique = True)
    first_name = db.Column(db.String, nullable = False)
    last_name = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False)
    phone = db.Column(db.String, nullable = False)
    address1 = db.Column(db.String, nullable = False)
    address2 = db.Column(db.String)
    city = db.Column(db.String, nullable = False)
    state = db.Column(db.String, nullable = False)
    zip = db.Column(db.String, nullable = False)
    photo_url = db.Column(db.String)
    _password_hash = db.Column(db.String)
    horses = db.relationship('UserHorse', backref='user')

    def __repr__(self):
        return f'<User {self.username} {self.id} >'

    @hybrid_property
    def password_hash(self):
        raise AttributeError("password hash access restricted")
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
class Horse(db.Model, SerializerMixin):
    __tablename__ = 'horses'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable = False)
    vet_name = db.Column(db.String, nullable = False)
    vet_number = db.Column(db.String, nullable = False)
    care_notes = db.Column(db.String)
    morning_feed_id = db.Column(db.Integer, db.ForeignKey('morning_feeds.id'))
    evening_feed_id = db.Column(db.Integer, db.ForeignKey('evening_feeds.id'))
    owners = db.relationship('UserHorse', backref='horse')


class MorningFeed(db.Model, SerializerMixin):
    __tablename__ = "morning_feeds"
    id = db.Column(db.Integer, primary_key=True)
    alfalfa_flakes = db.Column(db.Integer)
    grass_hay_flakes = db.Column(db.Integer)
    grain_pounds = db.Column(db.Integer)
    grain_type = db.Column(db.String)
    feed_notes = db.Column(db.String)
    horse = db.relationship('Horse', backref='morning_feed')

class EveningFeed(db.Model, SerializerMixin):
    __tablename__ = "evening_feeds"
    id = db.Column(db.Integer, primary_key=True)
    alfalfa_flakes = db.Column(db.Integer)
    grass_hay_flakes = db.Column(db.Integer)
    grain_pounds = db.Column(db.Integer)
    grain_type = db.Column(db.String)
    feed_notes = db.Column(db.String)
    horse = db.relationship('Horse', backref='evening_feed')

    