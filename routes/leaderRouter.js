const express = require("express");
const bodyParser = require("body-parser")
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("We will send all the leader information");
})
.post((req, res, next) =>{
    res.end("Will add the leader " + req.body.name + " , " + req.body.age);
})
.put((req, res, next) =>{
    res.statusCode = 403;
    res.end("Put not supported on /leaders");
})
.delete((req, res, next) =>{
    res.end("Deleting all the leaders");
});

leaderRouter.route("/:leaderId")
.get((req, res, next) => {
    res.end("We will send this leader's details "  +req.params.leaderId);
})
.post((req, res, next) =>{
    res.statusCode = 403;
    res.end("Post not supported on /leaders/" + req.params.leaderId);
})
.put((req, res, next) =>{
    res.end("Will update leader details " + req.params.leaderId  + " with " + req.body.name + "  " + req.body.age);
})
.delete((req, res, next) =>{
    res.end("Deleting the leader " + req.params.leaderId);
});

module.exports = leaderRouter;