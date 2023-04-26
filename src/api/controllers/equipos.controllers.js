const equipos = require("../models/equipos.models");



const getEquipos = async (req, res) => {
  try {
    const Equipo = await equipos.find().populate('jugadores');
    return res.status(200).json(Equipo);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getEquiposByNombre = async (req, res) => {
  try {
    const {nombre} = req.params;
    const Equipo = await equipos.find({nombre:nombre}).populate("jugadores");
    return res.status(200).json(Equipo); 
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getEquiposByCiudad = async (req, res) => {
  try {
    const {ciudad} = req.params;
    const Equipo = await equipos.find({ciudad:ciudad}).populate("jugadores");
    return res.status(200).json(Equipo); 
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getEquiposByLiga = async (req, res) => {
  try {
    const {liga} = req.params;
    const Equipo = await equipos.find({liga:liga}).populate("jugadores");
    return res.status(200).json(Equipo); 
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getEquiposByJugadores = async (req, res) => {
  try {
    const {jugadores} = req.params;
    const Equipo = await equipos.find({jugadores:jugadores}).populate("jugadores");
    return res.status(200).json(Equipo); 
  } catch (error) {
    return res.status(500).json(error);
  }
};


const postEquipos = async (req, res) => {
  try {
    console.log(req.body);
    const nuevoEquipo = new equipos(req.body);
    const crearEquipo = await nuevoEquipo.save();
    return res.status(201).json(crearEquipo);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const putEquiposById = async (req, res) => {
    try {
    const {id} = req.params;
    const putEquipos = new equipos(req.body);
    putEquipos._id = id;
    const actualizarEquipos = await equipos.findByIdAndUpdate(id, putEquipos, {new: true});
    if(!actualizarEquipos){
        return res.status(404).json({message: "Equipo no encontrado"});
  } 
  return res.status(200).json(actualizarEquipos);
 } catch (error) {
    return res.status(500).json(error);
}
};

const deleteEquipos = async (req, res) => {
    try {
        const {id} = req.params;
        const allEquipos = await equipos.findByIdAndDelete(id);
        if(!deleteEquipos){
            return res.status(404).json({message: "Equipo no encontrado"});
      const allEquipos = await equipos.find();
    }
  } catch (error) {
      return res.status(500).json(error);
    }
};

module.exports = {getEquipos, getEquiposByNombre, putEquiposById, getEquiposByCiudad, getEquiposByLiga, getEquiposByJugadores, postEquipos, deleteEquipos};
