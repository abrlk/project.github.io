
export default function prefixSex(user) {
	const newUser = Object.assign({}, user);
	if (newUser.sex === 'Female') {
		newUser.name = `Міс ${newUser.name} ${newUser.surname}`;
	} else {
		newUser.name = `Містер ${newUser.name} ${newUser.surname}`;
	}
	return newUser;
}
