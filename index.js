import express from "express";
import http from "http";

const app = express()

app.set("views", "./views");
app.set("view engine", "pug");

app.get('/', (req, res)=>{
    res.redirect("create_my_cv");
})

app.get('/create_my_cv', (req, res)=>{
    res.render("create");
})

app.get('/submit', (req, res)=>{
    let fname = req.query.fname
    let lname = req.query.lname
    let email = req.query.email
    let profile = req.query.profile
    let objective = req.query.objective
    let types = req.query.type
    let degrees = req.query.degree
    let grades = req.query.grade
    let edu = []
    for (let i = 0; i < types.length; i++) {
        edu[i] = {
            type: types[i],
            degree: degrees[i],
            grade: grades[i]
        }
    }
    res.render("cv", {
        fname: fname,
        lname: lname,
        email: email,
        profile: profile,
        objective: objective,
        education: edu
    })
    res.send()
})

app.listen(8080, ()=>{
    console.log("Server Running...");
})