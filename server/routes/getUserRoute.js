const { Router } = require("express");
const { getUsers } = require("../controllers/getUser");

const router = Router();

router.get("/ikh", getUsers);


module.exports = router;