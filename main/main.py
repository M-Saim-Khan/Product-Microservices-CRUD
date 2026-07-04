from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy import UniqueConstraint
from dataclasses import dataclass
from flask import abort
import requests
from producer import publish

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://root:root@db/main' #username:password@host/table
CORS(app)

db = SQLAlchemy(app)

@dataclass
class Product(db.Model):
    id: int
    title:str
    image: str
    id = db.Column(db.Integer, primary_key = True, autoincrement = False) #product made thru django, flask only fetches it and so we want same id, however if we put autoincrement on then we dont get same id so we put it to off
    title = db.Column(db.String(200))
    image = db.Column(db.String(200))

@dataclass
class ProductUser(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer)
    product_id = db.Column(db.Integer)

    UniqueConstraint('user_id', 'product_id', name='user_product_unique')


@app.route('/api/products')
def index():
    return jsonify(Product.query.all())

@app.route('api/products/<int:id>/like', methods= ["POST"])
def like(id):
    req = requests.get('http://host.docker.internal:8000/api/user') #do this to connect to another container's localhost aka admin
    json=req.json()

    try:
        productUser = ProductUser(user_id = json['id'], product_id= id)
        db.session.add(productUser)
        db.session.commit()

        publish('prodyct_liked', id)  
    except:
        abort(400, 'You already liked this product')



    return jsonify({
        'message': 'success'
    })






if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')