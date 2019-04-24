messageController = require("../controllers/messageController");

exports.appRoute = router => {
    
    router.get("/", messageController.getMessageController);
    router.get("/hello", messageController.getMessageController);
    router.get("/bye", messageController.getMessageController);

};