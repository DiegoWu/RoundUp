const mongoose = require("mongoose");

const Business = require("../models/businessModel");
const Coupon = require("../models/couponModel");
const User = require("../models/userModel");

/* -------------------------------------------------------------------------- */

const updateBusiness = async (id, couponId) => {
	let business = await Business.findById(id);
	if (business.coupons.includes(id)) {
		business.coupons = business.coupons.filter((coup) => {
			return coup !== couponId;
		});
	} else {
		business.coupons.push(id);
	}
	await business.save();
};

const updateUsers = async (userId, couponId) => {
	let user = await User.findById(userId);
	user.coupons.push(couponId);
	const newUser = await user.save();
	return newUser;
};

/* -------------------------------------------------------------------------- */

const addCoupon = async (req, res) => {
	const { title, description, startTime, expirationTime, minAmount, discount } = req.body;

	const coupon = await Coupon.findOne({ title: title, host: req.business._id });

	if (coupon) {
		res.status(400);
		throw new Error("Coupon already exists");
	}
	const newCoupon = await Coupon.create({
		title,
		description,
		startTime,
		expirationTime,
		category,
		discount,
		minAmount,
		host: req.business._id,
	});

	if (newCoupon) {
		updateBusiness(newCoupon.host, newCoupon);
		res.status(201).json({
			_id: newCoupon._id,
			title: newCoupon.title,
			description: newCoupon.description,
			startTime: newCoupon.startTime,
			expirationTime: newCoupon.expirationTime,
			minAmount: newCoupon.minAmount,
			discount: newCoupon.discount,
			host: newCoupon.host,
		});
	} else {
		res.status(400);
		throw new Error("Invalid coupon data");
	}
};

const feedCoupon = async (req, res) => {
	const coupons = await Coupon.find().populate("host");

	if (coupons) {
		res.json(coupons);
	} else {
		res.status(404);
		throw new Error("Coupons not found");
	}
};

const getCoupon = async (req, res) => {
	const params = req.params;
	const coupon = await Coupon.findById(params.id).populate("host");

	if (coupon) {
		res.json({
			_id: coupon._id,
			title: coupon.title,
			description: coupon.description,
			startTime: coupon.startTime,
			expirationTime: coupon.expirationTime,
			minAmount: coupon.minAmount,
			discount: coupon.discount,
			host: coupon.host,
		});
	} else {
		res.status(404);
		throw new Error("Coupon not found");
	}
};

const deleteCoupon = async () => {
	const params = req.params;
	const removedCoupon = await Coupon.deleteOne({ _id: params.id });
	if (removedCoupon) {
		updateBusiness(removedCoupon.host, removedCoupon);
		res.json({
			_id: removedCoupon._id,
			title: removedCoupon.title,
			description: removedCoupon.description,
			startTime: removedCoupon.startTime,
			expirationTime: removedCoupon.expirationTime,
			discount: removedCoupon.discount,
			minAmount: removedCoupon.minAmount,
			host: removedCoupon.host,
		});
	} else {
		res.status(404);
		throw new Error("Coupon not found");
	}
};

const awardUser = async (req, res) => {
	const params = req.params;
	const winningUser = await User.findOne({ email: params.user });
	let coupon = await Coupon.findById(params.id);
	if (coupon && winningUser) {
		if (coupon.redeemedUsers.includes(winningUser._id)) {
			res.status(401);
			throw new Error("User has already redeemed this coupon");
		}
		coupon.redeemedUsers.push(winningUser._id);
		const newUser = await updateUsers(winningUser._id, challenge._id, challenge.reward);
		const newCoupon = await coupon.save();
		res.json(newUser);
	} else {
		res.status(404);
		throw new Error("Coupon or user not found");
	}
};

/* -------------------------------------------------------------------------- */

module.exports = {
	feedCoupon,
	addCoupon,
	getCoupon,
	deleteCoupon,
	awardUser,
};
