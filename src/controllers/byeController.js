const byeModel = require("../models/byeModel");

exports.getByeController = (req, res, next) => {
    const bye = byeModel.getBye();

    res.send(bye);
};