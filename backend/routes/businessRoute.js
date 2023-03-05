const express = require("express");
const router = express.Router({ mergeParams: true });

const catchAsync = require("../utils/catchAsync");
const businessAuth = require("../middleware/businessAuthMiddleware");

const control = require("../controllers/businessController");

/* -------------------------------------------------------------------------- */

router.get("/", catchAsync(control.addBusiness));

router.post("/login", catchAsync(control.authBusiness));

router.get("/profile", businessAuth, catchAsync(control.getProfile));

/* -------------------------------------------------------------------------- */

module.exports = router;
