const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dishRouter = require("./routes/dishRouter");

const host = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/dishes', dishRouter);

//Supporting all URLs with router

// app.all("/dishes", (req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     next();
// });

// app.get('/dishes', (req, res, next) => {
//     res.end("We will send all the dishes information");
// });

// app.post('/dishes', (req, res, next) =>{
//     res.end("Will add the dish " + req.body.name + " , " + req.body.description);
// });

// app.put('/dishes', (req, res, next) =>{
//     res.statusCode = 403;
//     res.end("Put not supported on /dishes");
// });

// app.delete('/dishes', (req, res, next) =>{
//     res.end("Deleting all the dishes");
// });

//API for one dish

app.get('/dishes/:dishId', (req, res, next) => {
    res.end("We will send this dish's details "  +req.params.dishId);
});

app.post('/dishes/:dishId', (req, res, next) =>{
    res.statusCode = 403;
    res.end("Post not supported on /dishes/" + req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) =>{
    res.end("Will update dish params " + req.params.dishId  + " with details " + req.body.name + "  " + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) =>{
    res.end("Deleting the dish " + req.params.dishId);
});


app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><head><title>Hello!</title></head><body><h1>Hello World from Express!</h1></body></html");
});

const server = http.createServer(app);
server.listen(port, host, () => {
    console.log(`The server is running at http://${host}:${port}`);
});