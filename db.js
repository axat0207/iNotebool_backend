const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://axxatagrawal:Sahilagr%4002@cluster0.9lsgxhw.mongodb.net/"

const connectToMongo = async()=>{
    await mongoose.connect(
        mongoURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
      );
      console.log("Mongoose Connected sucessfully")
}

module.exports = connectToMongo;