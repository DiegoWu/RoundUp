if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const path = require("path");

/* -------------------------------------------------------------------------- */

const connectDB = require("./data/database");
connectDB();

/* -------------------------------------------------------------------------- */

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/build")));
}

if (process.env.NODE_ENV === "development") {
	const morgan = require("morgan");
	app.use(morgan("dev"));
}

/* -------------------------------------------------------------------------- */

const morgan = require("morgan");

if (process.env.NODE_ENV === "development") {
	app.get("/", (req, res) => {
		res.send("API is running...");
	});
}

app.all("*", (req, res, next) => {
	const err = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);
	next(err);
});

app.use((err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === "production" ? null : err.stack,
	});
});

/* -------------------------------------------------------------------------- */

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
	console.log(`RoundUp is listening on port ${Port}`);
});
