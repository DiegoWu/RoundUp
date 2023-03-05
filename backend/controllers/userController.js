const User = require("../models/userModel");
const Coupon = require("../models/couponModel");

const generateToken = require("../utils/generateToken");
const containsID = require("../utils/contains");

/* -------------------------------------------------------------------------- */

const addUser = async (req, res) => {
	const { name, email, password, location } = req.body;

	const user = await User.findone({ email });

	if (user) {
		res.status(400);
		throw new Error("User already exists");
	} else {
		const newUser = User.create({
			name,
			password,
			email,
			location,
		});

		if (newUser) {
			res.status(201).json({
				_id: newUser._id,
				name: newUser.name,
				email: newUser.email,
				location: newUser.location,
				balance: newUser.balance,
				coupons: newUser.coupons,
				token: generateToken(newUser._id),
			});
		} else {
			res.status(400);
			throw new Error("Invalid user information");
		}
	}
};

const authUser = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.status(201).json({
			_id: newUser._id,
			name: newUser.name,
			email: newUser.email,
			location: newUser.location,
			balance: newUser.balance,
			coupons: newUser.coupons,
			token: generateToken(newUser._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid user email or password");
	}
};

const getProfile = async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		res.status(201).json({
			_id: newUser._id,
			name: newUser.name,
			email: newUser.email,
			location: newUser.location,
			balance: newUser.balance,
			coupons: newUser.coupons,
			token: generateToken(newUser._id),
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
};

const roundUpPay = async (req, res) => {
	const user = await User.findById(req.user._id).populate("coupons");
	const { amount, roundUnit = 1, vendor } = req.body;

	if (user) {
		const roundUp = Math.ceil(amount / roundUnit) * roundUnit - amount;

		user.balance += roundUp;

		let coupons = await Coupon.find({});
		coupons.filter((coupon) => coupon.minAmount <= user.balance);

		for (let i = 0; i <= coupons.length; ++i) {
			if (containsID(coupons[i]._id, user.coupons)) {
				user.coupons.push(coupons[i]);
			}
		}

		const updateUser = await user.save();

		res.status(201).json({
			_id: updateUser._id,
			name: updateUser.name,
			email: updateUser.email,
			location: updateUser.location,
			balance: updateUser.balance,
			coupons: updateUser.coupons,
			token: generateToken(updateUser._id),
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
};

const spend = async (req, res) => {
	const user = await User.findById(req.user._id).populate("coupons");
	const { amount, vendor, couponID } = req.body;
	const coupon = await Coupon.findById(couponID).populate("redeemedUsers").populate("host");

	if (user && coupon) {
		if (amount <= 0 || amount > balance || amount < coupon.minAmount) {
			res.status(500);
			throw new Error("Invalid amount");
		}
		if (
			vendor != coupon.host._id ||
			!containsID(coupon._id, user.coupons) ||
			containsID(user._id, coupon.redeemedUsers)
		) {
			res.status(500);
			throw new Error("Invalid coupon");
		}
		user.balance -= (amount * (100 - coupon.discount)) / 100;

		const updateUser = await user.save();

		res.status(201).json({
			_id: updateUser._id,
			name: updateUser.name,
			email: updateUser.email,
			location: updateUser.location,
			balance: updateUser.balance,
			coupons: updateUser.coupons,
			token: generateToken(updateUser._id),
		});
	} else {
		res.status(404);
		if (!user) {
			throw new Error("User not found");
		} else {
			throw new Error("Invalid coupon");
		}
	}
};

/* -------------------------------------------------------------------------- */

module.exports = { addUser, authUser, getProfile, roundUpPay, spend };
