const express = require("express");
const router = express.Router();
const equipos = require("../models/equipos.models");

const {getEquipos, getEquiposByNombre, putEquiposById, getEquiposByCiudad, getEquiposByLiga, getEquiposByJugadores, postEquipos, deleteEquipos} = require("../controllers/equipos.controllers");

router.get ("/", getEquipos);
router.get ("/nombre/:nombre", getEquiposByNombre);
router.get ("/ciudad/:ciudad", getEquiposByCiudad);
router.get ("/liga/:liga", getEquiposByLiga);
router.get ("/jugadores/:jugadores", getEquiposByJugadores);
router.post ("/", postEquipos);
router.put ("/:id", putEquiposById);
router.delete ("/", deleteEquipos);


module.exports = router;
