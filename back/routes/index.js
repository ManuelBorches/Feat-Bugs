const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const ordersRouter = require("./orders");
const toolsRouter = require("./tools");

router.use("/users", usersRouter);
router.use("/orders", ordersRouter);
router.use("/tools", toolsRouter);


module.exports = router;
