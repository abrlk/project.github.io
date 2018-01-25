import test from 'ava';
import generateUsers from './generateUsers';

test('should generate array with 10 users', (t) => {
	const expectedLength = 10;
	const generatedArray = generateUsers(expectedLength);
	t.is(generatedArray.length, expectedLength);
});
