const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const equiposSchema = new Schema (
    {
        "nombre": {type: String, require: true}, 
        "ciudad": {type: String, require: true},
        "liga": {type: String, require: true},
        "foto": {type: String, require: true, default: "https://img.youtube.com/vi/3sBd4vBNnoI/hqdefault.jpg"},
        "jugadores": [{type: Schema.Types.ObjectId, ref: 'jugadores'}]
    }
);
const equipos = mongoose.model('equipos', equiposSchema);


module.exports = equipos;