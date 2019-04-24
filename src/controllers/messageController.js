const messageModel = require('../models/messageModel');

exports.getMessageController = (req, res, next) => {

    messageModel.findOne({ 
        where: { path: req.route.path },
        attributes: ['mensaje']
    }).then(mensaje => { res.send(mensaje.get('mensaje'))
    });
};