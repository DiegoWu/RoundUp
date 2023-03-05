const express = require("express");
const router = express.Router({ mergeParams: true });

const catchAsync = require("../utils/catchAsync");
const businessAuth = require("../middleware/businessAuthMiddleware");
const couponHost = require("../middleware/couponHostMiddleware");

const control = require("../controllers/couponController");

/* -------------------------------------------------------------------------- */

router.get("/", catchAsync(control.feedCoupon));

router.post("/", businessAuth, catchAsync(control.addCoupon));

router.get("/:id", catchAsync(control.getCoupon));

router.put("/:user/:id", businessAuth, couponHost, catchAsync(control.awardUser));

router.delete("/:id", businessAuth, couponHost, catchAsync(control.deleteCoupon));

/* -------------------------------------------------------------------------- */

module.exports = router;
