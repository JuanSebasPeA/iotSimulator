//Conectando con mongodb
const mongoose = require('mongoose');
require('colors')

const connectDB = async () => {
    console.log("Connecting with mongodb".bgBlue);
    try {
        await mongoose.connect('mongodb://mongo:QSm2onYL73InmTQdGDEO@containers-us-west-131.railway.app:5742', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected'.bgGreen);
    }
    catch (err) {
        console.log(err.message.red);
        process.exit(1);
    }
}

module.exports = connectDB;