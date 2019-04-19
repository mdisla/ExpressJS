const homeModel = require("../models/homeModel");

exports.getHomeController = (req, res, next) => {
    const home = homeModel.getHome();

    res.send(home);
};