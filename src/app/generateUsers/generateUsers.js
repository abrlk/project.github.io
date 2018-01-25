import Chance from 'chance';
import './generateUsers.sass';

const chance = new Chance();

/**
 * @return {Array} - random generated users
 */

export default function generateUsers(n) {
	const peopleData = [];
	for (let i = 0; i < n; i += 1) {
		peopleData[i] = {
			name: chance.first(),
			surname: chance.last(),
			age: chance.age(),
			sex: chance.gender(),
		};
	}
	return peopleData;
}
