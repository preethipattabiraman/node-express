const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dishRouter = require("./routes/dishRouter");
const leaderRouter = require("./routes/leaderRouter");
const promoRouter = require("./routes/promoRouter");

const host = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);

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