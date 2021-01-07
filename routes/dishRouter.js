const express = require("express");
const bodyParser = require("body-parser")
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("We will send all the dishes information");
})
.post((req, res, next) =>{
    res.end("Will add the dish " + req.body.name + " , " + req.body.description);
})
.put((req, res, next) =>{
    res.statusCode = 403;
    res.end("Put not supported on /dishes");
})
.delete((req, res, next) =>{
    res.end("Deleting all the dishes");
});

dishRouter.route("/:dishId")
.get((req, res, next) => {
    res.end("We will send this dish's details "  +req.params.dishId);
})
.post((req, res, next) =>{
    res.statusCode = 403;
    res.end("Post not supported on /dishes/" + req.params.dishId);
})
.put((req, res, next) =>{
    res.end("Will update dish params " + req.params.dishId  + " with details " + req.body.name + "  " + req.body.description);
})
.delete((req, res, next) =>{
    res.end("Deleting the dish " + req.params.dishId);
});

module.exports = dishRouter;