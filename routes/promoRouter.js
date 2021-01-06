const express = require("express");
const bodyParser = require("body-parser")
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("We will send all the promotions.");
})
.post((req, res, next) =>{
    res.end("Will add the promotion " + req.body.name + " , " + req.body.description);
})
.put((req, res, next) =>{
    res.statusCode = 403;
    res.end("Put not supported on /promotions");
})
.delete((req, res, next) =>{
    res.end("Deleting all the promotions");
});

promoRouter.route("/:promoId")
.get((req, res, next) => {
    res.end("We will send this promotion's details "  +req.params.promoId);
})
.post((req, res, next) =>{
    res.statusCode = 403;
    res.end("Post not supported on /promotions/" + req.params.promoId);
})
.put((req, res, next) =>{
    res.end("Will update promotion details " + req.params.promoId  + " with " + req.body.name + "  " + req.body.description);
})
.delete((req, res, next) =>{
    res.end("Deleting the promotion " + req.params.promoId);
});

module.exports = promoRouter;