const router = require('express').Router();
const {MembershipController} = require("../controllers")

router.get("/me", MembershipController.getMembership);

module.exports = router;