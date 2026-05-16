export default (elem = '', timeout = 250): undefined => {
	setTimeout(() => {
		if (elem) {
			document.querySelector(elem)?.scrollIntoView({ behavior: 'smooth' });
		} else {
			document.body.scrollIntoView({ behavior: 'smooth' });
		}
	}, timeout);

	return undefined;
};
