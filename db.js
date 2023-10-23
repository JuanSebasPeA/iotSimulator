//Conectando con mongodb
const mongoose = require('mongoose');
require('colors')

const connectDB = async () => {
    console.log("Connecting with mongodb".bgBlue);
    try {
        await mongoose.connect("mongodb://mongo:z4q0xkhAOHKW92GHQi2r@containers-us-west-31.railway.app:7378", {
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