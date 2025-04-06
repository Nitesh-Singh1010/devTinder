const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nitsin2002:fc04vPaOPJT2wVyz@cluster0.8o0ujui.mongodb.net/devTinder"
  );
};

module.exports = { connectDB };
