helloController = require("../controllers/helloController");
homeController = require("../controllers/homeController");
byeController = require("../controllers/byeController");

exports.appRoute = router => {
    router.get("/hello", helloController.getHelloController);

    router.get("/", homeController.getHomeController);

    router.get("/bye", byeController.getByeController);
};