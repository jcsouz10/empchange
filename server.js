const express = require ('express');
const bodyparser = require ('body-parser');
const port = 3001;
const rotas = require ('./rotas');

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello')
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use('/api', rotas);

app.use(express.static(__dirname + './src'))

app.listen(port,()=>{
    console.log('Server rodando na porta 3001')
});
  