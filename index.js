const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const cloudinary = require('cloudinary').v2;

const {connect} = require("./src/api/utils/database");

const routerJugadores = require ('./src/api/routes/jugadores.routes');
const routerEquipos = require ('./src/api/routes/equipos.routes');
const userRoutes = require ('./src/api/routes/user.routes');

const PORT = process.env.PORT || 9000;


cloudinary.config({
    cloud_name: "process.env.CLOUDINARY_NAME",
    api_key: "process.env.CLOUDINARY_KEY",
    api_secret: "process.env.CLOUDINARY_SECRET"
})
const app = express();
// const server = express();
connect();

app.use((req, res , next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, DELETE, PUT, PATCH');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); 
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user',userRoutes)
app.use('/jugadores', routerJugadores);
app.use('/equipos', routerEquipos);


app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));