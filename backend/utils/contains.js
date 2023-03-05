const containsID = (id, arr) => {
	for (let i = 0; i <= arr.length; ++i) {
		if (arr[i]._id === id) return true;
	}
	return false;
};

/* -------------------------------------------------------------------------- */

module.exports = containsID;
