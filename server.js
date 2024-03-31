const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin : 'https://localhost:8081'
}

//Middle wares !!!1

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended : true}))

//TESTING API 

const router = require('./routes/productRouter.js');
const reviewRouter = require('./routes/reviewRouter.js');

app.use('/api/products', router);
app.use('/api/reviews', reviewRouter);

///

app.get('/', (req, res) => {
    res.json({message : "HELLOW FROM API"})
})

// port configurations  

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("LISTENING ON PORT" + PORT);
})