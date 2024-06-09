const mongoose = require("mongoose");

const RegistrarSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const RegistrarModel = mongoose.model("Registrars", RegistrarSchema);

module.exports = RegistrarModel;
