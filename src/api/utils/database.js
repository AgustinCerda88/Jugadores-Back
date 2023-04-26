const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const connect = async () =>{
    try {

        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = db.connection;
        console.log(`Connected to ${name} DB in host : ${host}`)

    } catch (error) {
        console.log(`Failed to connect`, error);
    }
};


module.exports = {connect};
