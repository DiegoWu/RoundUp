const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema(
	{
		host: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Business",
			require: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: false,
		},
		startTime: {
			type: Date,
			required: true,
		},
		expirationTime: {
			type: Date,
			required: true,
		},
		minAmount: {
			type: Number,
			required: true,
		},
		discount: {
			type: Number,
			required: true,
		},
		redeemedUsers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
	{ timestamps: true }
);

const Coupon = mongoose.model("Coupon", CouponSchema);

/* -------------------------------------------------------------------------- */

module.exports = Coupon;
