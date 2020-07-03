const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Introdução a API");
});

app.listen(3000, () => {
    console.log("SERVIDOR INICIADO COM SUCESSO");
});