const catchAsync = require("../utils/catchAsync");

const Coupon = require("../models/couponModel");

/* -------------------------------------------------------------------------- */

const isHost = catchAsync(async (req, res, next) => {
	const params = req.params;
	if (params.id) {
		const coupon = await Coupon.findById(params.id).populate("host");
		if (coupon && req.business && req.business.email === coupon.host.email) {
			next();
		}
	} else {
		res.status(404);
		throw new Error("Coupon not found");
	}
});

/* -------------------------------------------------------------------------- */

module.exports = isHost;
