// routes.js
const express = require("express");
const Consumo = require("./models/consumo");
const db = require("./db");
const ejs = require("ejs");
require("colors");
const cors = require("cors");
//función para generar los consumos en "tiempo real"
const { generarConsumo } = require("./helpers");

const app = express();

//Conectando con mongodb
db();

//Estableciendo un puerto por defecto
const PORT = process.env.PORT || 4000;

//Middlewares de cors
app.use(cors());

//Middlewares de express
app.use(express.json());
//Middlewares para que sirva la carpeta dist

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/consejos", (req, res) => {
  res.render("index.html");
}
);

app.get("/metricas-consumo", (req, res) => {
  res.render("index.html");
}
);

app.get("/data", async (req, res) => {
  try {
    const consumos = await Consumo.find();
    //console.log(consumos);
    return res.json(consumos);
  } catch (err) {
    console.log(err.message.red);
    res.status(500).send("Server Error");
  }
});

app.get("/data/diario", async (req, res) => {
  //se genera un consumo entre 60 y 80
  const consumo = generarConsumo();
  const hora = new Date().toLocaleTimeString()
  const newConsumo = {consumo, hora}
  
  return res.json(newConsumo);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`.bgYellow);
});
