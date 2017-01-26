"use strict"

const express = require('express');
const os = require('os');

let app = express();
let hostname = os.hostname();

let state = {
    generateFailure: false
};

app.get("/health", (req, res) => {
    if(state.generateFailure) {
        return res.status(500).end();
    }
    res.json({ "container": hostname, "status": "UP" });
});

app.post("/down", (req, res) => {
    state.generateFailure = !state.generateFailure;  
    res.status(200).end();
});

app.listen(3000, () => {  
    console.log("listening on port 3000");
});