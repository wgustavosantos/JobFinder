const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/api", (req, res) => {
    res.send("Rotas funcionando");
})

router.get("/add", (req, res) => {
    res.render('add');
})

router.post("/add", (req, res) => {

    let {title, salary, company, email, newJob, description} = req.body;

    Job.create({title, salary, company, email, newJob, description})
    .then(()=> res.redirect("/"))

    .catch(err => console.log(err));

} );

module.exports = router;