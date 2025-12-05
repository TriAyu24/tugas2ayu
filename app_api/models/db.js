const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            // ambil drivers di mongodb.com
           "mongodb+srv://triayu:ayu2499@cluster0.js3oflu.mongodb.net/tugas2?appName=Cluster0"
        );
        console.log("MongoDB connected.");
    } catch (error) {
        console.error("Error : ", error);
        process.exit(1);
    }
}

module.exports = connectDB;
