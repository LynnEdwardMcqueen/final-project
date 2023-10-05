from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property


from config import db,bcrypt

# Models go here!

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable = False, unique = True)
    firstName = db.Column(db.String, nullable = False)
    lastName = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False)
    phone = db.Column(db.String, nullable = False)
    address1 = db.Column(db.String, nullable = False)
    address2 = db.Column(db.String)
    city = db.Column(db.String, nullable = False)
    state = db.Column(db.String, nullable = False)
    zip = db.Column(db.String, nullable = False)
    _password_hash = db.Column(db.String)

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
    
    # this was created sinse the to_dict() method is not working. 
#    def get_user_dictionary(self):
#        return {
#            "username": self.username,
#            "image_url": self.image_url,
#            "bio": self.bio,
#            "id": self.id
#        }


