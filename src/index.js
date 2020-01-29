const express = require('express');
const axios = require('axios');



const app = express();


app.use(express.json());

app.get('/busca', async (req, res) => {

    const resposta = await axios('https://www.googleapis.com/books/v1/volumes?q=5W-ChoTedM4C');


    const {} = resposta.data['items'];


    res.json({ volumeInfo });

})



app.listen(3333);


