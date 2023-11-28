export const isBoycottOrNot = (barCode) => {
	const countryCode = barCode.slice(0, 3);
	if (countryCode === "622") {
		return false;
	} else {
		return true;
	}
};
