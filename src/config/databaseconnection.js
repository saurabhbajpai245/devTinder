const { mongoose } = require("mongoose");


async function connectDB(){
    await mongoose.connect("mongodb+srv://namastedev:22XaQ0UeK9HH5Can@namastenode.a4vzz.mongodb.net/");

} 

module.exports = connectDB;
    