const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const cors = require("cors");
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.zqzzby1.mongodb.net/?retryWrites=true&w=majority');
    //await mongoose.connect('mongodb+srv://admin:admin@cluster0.rpvx1ef.mongodb.net/?retryWrites=true&w=majority');
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}


const RecipieSchema = new mongoose.Schema({
    title: String,
    time: String,
    difficulty: String,
    ingredients: String,
    temp: String,
    steps: String
});

const RecipieModel = mongoose.model('recipie', RecipieSchema);

app.post('/api/recipie', (req, res) => {
    console.log(req.body);

    RecipieModel.create({
        title: req.body.title,
        time: req.body.time,
        difficulty: req.body.difficulty,
        ingredients: req.body.ingredients,
        temp: req.body.temp,
        steps: req.body.steps
    })

    res.send('Data Recieved');
})

RecipieModel.create({
    title: "Mashed Potato Soup",
    time: "4 hours",
    difficulty: "very difficult",
    ingredients: "potatoes",
    temp: "100 degrees",
    steps: "potatoes"
})

app.get("/api/Recipie", (req, res) => {
    RecipieModel.find((error, data) => {
        res.json(data);
    })

})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})