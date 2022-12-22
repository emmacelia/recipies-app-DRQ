const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

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

app.get("/api/Recipie", (req, res) => {
    RecipieModel.find((error, data) => {
        res.json(data);
    })

})

app.get('/api/Recipie/:id', (req, res, next) => {
    console.log(req.params.id);
    RecipieModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });
})
app.put('/api/Recipie/:id', function (req, res) {
    console.log("Update Recipie " + req.params.id);
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.time);
    console.log(req.body.difficulty);
    console.log(req.body.ingredients);
    console.log(req.body.temp);
    console.log(req.body.steps);

    RecipieModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        function (err, data) {
            res.send(data);
        })
})

app.delete('/api/Recipie/:id', (req, res) => {
    console.log('Deleting: ' + req.params.id);
    RecipieModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
        res.send(data);
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})