const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    await mongoose.connect("mongodb+srv://test:test@test.kbupzaw.mongodb.net/test?retryWrites=true&w=majority&appName=test");
    console.log(" MongoDB connected");
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    
    process.exit(1);
  }
};

module.exports = connectDB;
