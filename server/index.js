const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegistrarModel = require("./models/Registrar");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/MERN_Authentication");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegistrarModel.findOne({ email: email }).then((user) => {
    // First check if the user exists
    if (user) {
      // then check if passwords match
      if (user.password === password) {
        res.json("Success!");
      } else {
        res.json("The password is Incorrect mn!");
      }
    } else{
      res.json("No user Identified!")
    }
  });
});

app.post("/register", (req, res) => {
  RegistrarModel.create(req.body)
    .then((Registrars) => res.json(Registrars))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("MERN Server running!");
});
