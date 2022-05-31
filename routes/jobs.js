const express = require("express");
const Job = require("../models/Job");
const router = express.Router();

router.get("/api", (req, res) => {
    res.send("Rotas funcionando");
})

router.post("/add", (req, res) => {

    let {title, salary, company, email, newJob, description} = req.body;

    job.create({title, salary, company, email, newJob, description})
    .then(()=> res.redirect("/"))

    .catch(err => console.log(err));

} );

module.exports = router;