const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
    console.log("Datos recibidos: ", req.body);
    res.status(200).send({message: "Formulario enviado existosamente!"});
});

app.listen(port, () => {
    console.log(`API local corriendo en http://localhost:${port}`);
});