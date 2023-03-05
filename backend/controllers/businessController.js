const Business = require("../models/businessModel");

const generateToken = require("../utils/generateToken");

/* -------------------------------------------------------------------------- */

const addBusiness = async (req, res) => {
	const { name, email, password, image, address, description } = req.body;

	const business = await Business.findOne({ email });

	if (business) {
		res.status(400);
		throw new Error("Business already exists");
	}

	const newBusiness = await Business.create({
		name,
		email,
		password,
		address,
		image,
		description,
	});

	if (newBusiness) {
		res.status(201).json({
			_id: newBusiness._id,
			name: newBusiness.name,
			email: newBusiness.email,
			address: newBusiness.address,
			image: newBusiness.image,
			description: newBusiness.description,
			coupons: newBusiness.coupons,
			token: generateToken(newBusiness._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid business data");
	}
};

const authBusiness = async (req, res) => {
	const { email, password } = req.body;

	const business = await Business.findOne({ email });

	if (business && (await business.matchPassword(password))) {
		res.status(201).json({
			_id: business._id,
			name: business.name,
			email: business.email,
			address: business.address,
			image: business.image,
			description: business.description,
			coupons: business.coupons,
			token: generateToken(business._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
};

const getProfile = async (req, res) => {
	const business = await Business.findById(req.business._id);

	if (business) {
		res.status(201).json({
			_id: business._id,
			name: business.name,
			email: business.email,
			address: business.address,
			image: business.image,
			description: business.description,
			coupons: business.coupons,
		});
	} else {
		res.status(404);
		throw new Error("Business not found");
	}
};

/* -------------------------------------------------------------------------- */

module.exports = { addBusiness, authBusiness, getProfile };
