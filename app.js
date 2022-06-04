const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./db/connection");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const path = require("path");

app.use(bodyParser.urlencoded({extended: false}));
app.use("/jobs", require("./routes/jobs"));

// hadler bars
app.set('views', path.join(__dirname, 'views')); //criar pasta views manualmente
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

db.authenticate() // conexao db
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
  res.render('index');
});

