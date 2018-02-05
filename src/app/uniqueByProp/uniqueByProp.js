
export default function uniqueByProp(peopleData = [], propName) {
	const used = {};
	return peopleData.filter((obj) => {
		if (obj[propName] in used) {
			return false;
		}
		used[obj[propName]] = true;
		return true;
	});
}
