const express = require('express')

const app = express()

// localhost:3333

/*
    GET - Buscar uma informação dentro do servidor
    POST - Inserir uma informação no servidor
    PUT - Alterar uma informação no servidor
    PATCH - Alterar uma informação específica
    DELETE - Apagar uma informação do servidor
*/

app.get("/courses", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ])
})

app.post("/courses", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ])
})

app.put("/courses", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ])
})

app.patch("/courses", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 7",
        "Curso 3",
        "Curso 4"
    ])
})

app.delete("/courses", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 2",
        "Curso 4"
    ])
})

app.listen(3333)