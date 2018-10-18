const express = require('express')

const app = express();
const PORT = 4000;



app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})

app.get('/', (req,res) => {
    console.log(`Connected to express`)
})