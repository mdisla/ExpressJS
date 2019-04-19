const helloModel = require("../models/helloModel");

exports.getHelloController = (req, res, next) => {
    const hello = helloModel.getHello();

    res.send(hello);
};