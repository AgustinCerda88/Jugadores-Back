const jugadores = require("../models/jugadores.models");


const getJugadores = async (req, res) => {
  try {
    let {page, limit} = req.query;
    const numJugadores = await jugadores.countDocuments();
    limit = limit ? parseInt(limit) : 10;
    if(page && !isNaN(parseInt(page))){
      page = parseInt(page);

      let numPages = numJugadores % limit > 0 ? numJugadores / limit + 1 : numJugadores / limit;
      if(page> numPages) page = numPages;
      if(page < 1) page = 1;      
      const skip = (page - 1) * limit; 

      const juga = await jugadores.find().skip(skip).limit(limit);
      return res.status(200).json(
        {
          info: {
            numTotal: numJugadores,
            page: page,
            totalPages: (numJugadores / limit),
            limit: limit,
            nextPage: numPages >= page + 1 ? `/jugadores?page=${page + 1}&limit=${limit}` : null,
            prevPage: page != 1 ? `/jugadores?page=${page - 1}&limit=${limit}` : null
          },
          results:juga
        }
      )

    }else{
      const juga = await jugadores.find().limit(limit);
      return res.status(200).json({
        info: {
          numTotal: numJugadores,
          page: 1,
          limit: limit,
          nextPage: numJugadores > limit ? `/jugadores?page=2&limit=${limit}` : null,
          prevPage: null
        },
        results: juga
      });
    }

  } catch (error) {
    return res.status(500).json(error);
  }
};

const putJugadoresById = async (req, res) => {
  try {
      const {id} = req.params;
      const modifyJugadores = new jugadores(req.body)
      modifyJugadores._id = id;
      const putJugador = await jugadores.findByIdAndUpdate(id, modifyJugadores, {new: true});
      if(!putJugador){
          return res.status(404).json({"message": "Jugador no encontrado"})
      }
      return res. status(200).json(putJugador);
  } catch (error) {
      return res.status(500).json(error)
  }
}



const getJugadoresById = async (req, res) => {
  try {
    const {id} = req.params;
    const Jugadores = await jugadores.findById(id);
    return res.status(200).json(Jugadores);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getJugadoresByNombre = async (req, res) => {
  try {
    const {nombre} = req.params;
    const Jugadores = await jugadores.find({nombre:nombre});
    return res.status(200).json(Jugadores); 
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getJugadoresByEdad = async (req, res) => {
  try {
    const {edad} = req.params;
    const Jugadores = await jugadores.find({edad:edad});
    return res.status(200).json(Jugadores); 
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getJugadoresByPosicion = async (req, res) => {
  try {
    const {posicion} = req.params;
    const Jugadores = await jugadores.find({posicion:posicion});
    return res.status(200).json(Jugadores); 
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getJugadoresByPierna = async (req, res) => {
  try {
    const {pierna} = req.params;
    const Jugadores = await jugadores.find({pierna:pierna});
    return res.status(200).json(Jugadores); 
  } catch (error) {
    return res.status(500).json(error);
  }
};


const postJugadores = async (req, res) => {
  try {

    const {nombre, edad, posicion, pierna, foto} = req.body;
    console.log(req.body);
    const nuevoJugador = new jugadores({nombre, edad, posicion, pierna, foto});
    const todosJugadores = await nuevoJugador.save();
    return res.status(201).json(todosJugadores);
  } catch (error) {
    return res.status(500).json(error);
  }

};

const putJugadores = async (req, res) => {
  try {
    const {id} = req.params;
    const putJugadores = new jugadores (req.body);
    putJugadores._id = id;
    putJugadores.foto = req.file.path;
    const actualizarJugadores = await jugadores.findByIdAndUpdate(id, putJugadores);
    if(!actualizarJugadores){
      return res.status(404).json({message: "Jugador no encontrado"});
  } 
  return res.status(200).json(actualizarJugadores);
 } catch (error) {
    return res.status(500).json(error);
  }
};


const deleteJugadores = async (req, res) => {
  try {
    const {id} = req.params;
    const todosJugadores = await jugadores.findByIdAndDelete(id);
    if(!deleteJugadores){
      return res.status(404).json({message: "Jugador no encontrado"});
    }
    return res.status(200).json(todosJugadores);
  } catch (error) {
    return res.status(500).json(error);
  }
};


module.exports = {getJugadores, getJugadoresById ,putJugadoresById, getJugadoresByNombre,getJugadoresByEdad,getJugadoresByPosicion,getJugadoresByPierna, postJugadores, putJugadores, deleteJugadores};
