const express = require("express");

const { createUser, getUser, } = require("../controllers/user");
const router = express.Router();

//to create new user
router.post("/User", createUser);
//to get user
router.get("/User", getUser);

//exporting the router
module.exports = router;
