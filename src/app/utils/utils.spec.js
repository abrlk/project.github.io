import test from 'ava';
import { fillArray, sortBy } from './utils';

test('should generate array with 10 elements', (t) => {
	const expectedLength = 10;
	const generatedArray = fillArray(expectedLength);
	t.is(generatedArray.length, expectedLength);
});

test('should sort by key', (t) => {
	const arr = [{
		name: 'Timothy', surname: 'Fitzgerald', age: 50, sex: 'Male',
	},
	{
		name: 'Gordon', surname: 'Casey', age: 34, sex: 'Female',
	},
	{
		name: 'Frances', surname: 'Fields', age: 58, sex: 'Female',
	},
	{
		name: 'Lula', surname: 'Harmon', age: 100, sex: 'Male',
	},
	{
		name: 'Celia', surname: 'Miller', age: 33, sex: 'Female',
	},
	{}];
	const expected = 0;
	let generated = 0;
	sortBy(arr, 'age');
	arr.sort((a, b) => {
		if (a.age > b.age) {
			generated += 1;
		}
		return generated;
	});
	t.is(generated, expected);
});
