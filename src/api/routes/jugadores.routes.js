const express = require ('express');
const upload = require('../middlewares/upload.file')
const router = express.Router();

const {getJugadores, getJugadoresById,putJugadoresById, getJugadoresByNombre,getJugadoresByEdad,getJugadoresByPosicion,getJugadoresByPierna, postJugadores, putJugadores, deleteJugadores} = require ('../controllers/jugadores.controllers');

router.get ('/:id', getJugadoresById);
router.get ("/nombre/:nombre", getJugadoresByNombre);
router.put ("/:id", putJugadoresById);
router.get ("/edad/:edad", getJugadoresByEdad);
router.get ("/posicion/:posicion", getJugadoresByPosicion);
router.get ("/pierna/:pierna", getJugadoresByPierna);
router.get ('/', getJugadores);
router.post ('/', postJugadores);
router.put ('/', putJugadores);
router.delete ('/', deleteJugadores);

module.exports = router;

// ,upload.single('foto')