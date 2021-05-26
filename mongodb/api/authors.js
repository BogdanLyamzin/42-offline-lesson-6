const express = require("express");

const { authorsCtrl } = require("../controllers");

const router = express.Router();

router.post("/", express.json(), authorsCtrl.add);

module.exports = router;
