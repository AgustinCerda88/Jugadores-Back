const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const jugadoresSchema = new Schema (
    {
        "nombre": {type: String, require: true},
        "edad": {type: String, require: true},
        "posicion": {type: String, require: true},
        "pierna": {type: String, require: true},
        "foto": {type: String, require: true, default: "https://img.youtube.com/vi/3sBd4vBNnoI/hqdefault.jpg"}
    }
);

const jugadores = mongoose.model('jugadores', jugadoresSchema);

module.exports = jugadores;