const mongoose = require('mongoose');
const jugadores = require('../models/jugadores.models');

const allJugadores= [
    {
        "nombre": "Cristiano Ronaldo",
        "edad": "37 años",
        "posicion": "Delantero",
        "pierna": "Diestro",
    },{
        "nombre": "Lionel Messi",
        "edad": "35 años",
        "posicion": "Delantero",
        "pierna": "Zurdo",
    },{
        "nombre": "Neymar JR",
        "edad": "30 años",
        "posicion": "Delantero",
        "pierna": "Diestro",
    },{
        "nombre": "Sergio Ramos",
        "edad": "36 años",
        "posicion": "Defensa Central",
        "pierna": "Diestro",
    },{
        "nombre": "Zlatan Ibrahimovic",
        "edad": "40 años",
        "posicion": "Delantero",
        "pierna": "Diestro",
    },{
        "nombre": "Diego Costa",
        "edad": "33 años",
        "posicion": "Delantero",
        "pierna": "Diestro",
    },{
        "nombre": "Gareth Bale",
        "edad": "32 años",
        "posicion": "Delantero/Extremo",
        "pierna": "Diestro",
    },{
        "nombre": "Antoine Griezmann",
        "edad": "30 años",
        "posicion": "Delantero/Segundo delantero",
        "pierna": "Diestro",
    },{
        "nombre": "Eden Hazard",
        "edad": "31 años",
        "posicion": "Delantero Extremo",
        "pierna": "Diestro",
    },{
        "nombre": "Luis Suarez",
        "edad": "35 años",
        "posicion": "Delantero",
        "pierna": "Diestro",
    },{
        "nombre": "Thiago Alcantara",
        "edad": "30 años",
        "posicion": "Centrocampista",
        "pierna": "Diestro",
    },{
        "nombre": "Kevin De Bruyne",
        "edad": "30 años",
        "posicion": "Centrocampista",
        "pierna": "Diestro",
    },{
        "nombre": "Mesut Özil",
        "edad": "33 años",
        "posicion": "Centrocampista",
        "pierna": "Zurdo",
    },{
        "nombre": "Robin Van Persie",
        "edad": "38 años",
        "posicion":"Delantero",
        "pierna": "Diestro",
    },{
        "nombre": "Paul Pogba",
        "edad": "28 años",
        "posicion": "Centrocampista",
        "pierna": "Diestro",
    },{
        "nombre": "Samuel Eto'o",
        "edad": "40 años",
        "posicion": "Delantero",
        "pierna": "Diestro",
    },{
        "nombre": "Frank Lampard",
        "edad": "43 años",
        "posicion": "Centrocampista",
        "pierna": "Diestro",
    },{
        "nombre": "James Rodriguez",
        "edad": "30 años",
        "posicion": "Centrocampista",
        "pierna": "Zurdo",
    },{
        "nombre": "Arjen Robben",
        "edad": "38 años",
        "posicion": "Extremo",
        "pierna": "Zurdo",
    },{
        "nombre": "Thomas Müller",
        "edad": "32 años",
        "posicion": "Delantero",
        "pierna": "Diestro",
    },{
        "nombre": "Phillip Lahm",
        "edad": "38 años",
        "posicion": "Lateral",
        "pierna": "Diestro",
    },{
        "nombre": "Alessandro del Piero",
        "edad": "47 años",
        "posicion": "Delantero",
        "pierna": "Diestro",
    },{
        "nombre": "Andre Pirlo",
        "edad": "42 años",
        "posicion": "Centrocampista",
        "pierna": "Diestro",
    },{
        "nombre": "Gianluigi Buffon",
        "edad": "44 años",
        "posicion": "Portero",
        "pierna": "Diestro",
    },{
        "nombre": "Clarence Seedorf",
        "edad": "46 años",
        "posicion": "Centrocampista",
        "pierna": "Diestro",
    },{
        "nombre": "Kaká",
        "edad": "39 años",
        "posicion": "Centrocampista",
        "pierna": "Diestro",
    },{
        "nombre": "David Beckham",
        "edad": "46 años",
        "posicion": "Centrocampista",
        "pierna": "Diestro",
    },{
        "nombre": "Michael Ballack",
        "edad": "45 años",
        "posicion": "Centrocampista",
        "pierna": "Diestro",
    },{
        "nombre": "Angel Di Maria",
        "edad":"35 años" ,
        "posicion": "Extremo",
        "pierna": "Zurdo",
    },{
        "nombre": "Ronaldinho",
        "edad": "42 años",
        "posicion": "Centrocampista /delantero",
        "pierna": "Diestro",
    }];


mongoose
  .connect('mongodb+srv://root:root@cluster0.afgjeaf.mongodb.net/jugadores?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const Players = await jugadores.find();
    if (Players.length>0) {
      await jugadores.collection.drop(); 
      console.log('Database');
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`)).then(async () => {
    const playersMap = allJugadores.map((juga) => new jugadores(juga));
		await jugadores.insertMany(playersMap);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());