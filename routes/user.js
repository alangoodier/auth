const { Router } = require('express');
const userController = require('../controllers/users');
const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

const protectedRouter = withJWTAuthMiddleware(router, "yourSecretKey");

router.post('/', userController.create);
protectedRouter.get("/", userController.getAll);
router.post('/login', userController.login)
protectedRouter.get("/:id", userController.get);


module.exports = router;