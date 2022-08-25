from flask import Flask ,jsonify,request
from flask_cors import CORS
 
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
 
app=Flask(__name__)
CORS(app)
 
# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:niLu0205@localhost/playasql'
#                                               user:clave@localhost/nombreBaseDatos
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)
 
# defino la tabla
class Lugar(db.Model):   # la clase Producto hereda de db.Model     
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    imagen=db.Column(db.String(100))
    subtitulo=db.Column(db.String(100))
    descripcion=db.Column(db.String(300))
    
 
    def __init__(self,nombre,imagen, subtitulo, descripcion):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.imagen=imagen
        self.subtitulo=subtitulo
        self.descripcion=descripcion
db.create_all()  # crea las tablas
#  ************************************************************
class LugarSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','imagen','subtitulo','descripcion')
 
lugar_schema=LugarSchema()            # para crear un producto
lugares_schema=LugarSchema(many=True)  # multiples registros
 
@app.route('/lugares',methods=['GET'])
def get_Lugares():
    all_lugares=Lugar.query.all()     # query.all() lo hereda de db.Model
    result=lugares_schema.dump(all_lugares)  # .dump() lo hereda de ma.schema
    return jsonify(result)
 
@app.route('/lugares/<id>',methods=['GET'])
def get_lugar(id):
    lugar=Lugar.query.get(id)
    return lugar_schema.jsonify(lugar)

@app.route('/lugares/<id>',methods=['DELETE'])
def delete_lugar(id):
    lugar=Lugar.query.get(id)
    db.session.delete(lugar)
    db.session.commit()
    return lugar_schema.jsonify(lugar)

@app.route('/lugares', methods=['POST']) # crea ruta o endpoint
def create_lugar():
    print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    imagen=request.json['imagen']
    subtitulo=request.json['subtitulo']
    descripcion=request.json['descripcion']
    new_lugar=Lugar(nombre,imagen,subtitulo,descripcion)
    db.session.add(new_lugar)
    db.session.commit()
    return lugar_schema.jsonify(new_lugar)

@app.route('/lugares/<id>' ,methods=['PUT'])
def update_lugar(id):
    lugar=Lugar.query.get(id)
    nombre=request.json['nombre']
    imagen=request.json['imagen']
    subtitulo=request.json['subtitulo']
    descripcion=request.json['descripcion']
    lugar.nombre=nombre
    lugar.imagen=imagen
    lugar.subtitulo=subtitulo
    lugar.descripcion=descripcion
    db.session.commit()
    return lugar_schema.jsonify(lugar)


 
# programa principal
if __name__=='__main__':  
    app.run(debug=True, port=5000)  
