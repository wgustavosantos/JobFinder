const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./db/connection");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use("/jobs", require("./routes/jobs"));

db.authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso.");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar no banco de dados.");
  });

app.listen(PORT, () => {
  console.log(`O Express está rodando na porta ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Está funcionando");
});

