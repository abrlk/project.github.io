import test from 'ava';
import uniqueByProp from './uniqueByProp';

test('should be unique by property', (t) => {
	const expectedLength = 4;
	const peopleData = [{
		name: 'Carlos', surname: 'Rowe', age: 40, sex: 'Female',
	},
	{
		name: 'Louis', surname: 'Luna', age: 26, sex: 'Male',
	},
	{
		name: 'Carlos', surname: 'Rowe', age: 40, sex: 'Female',
	},
	{
		name: 'Carlos', surname: 'Rowe', age: 40, sex: 'Female',
	},
	{
		name: 'Carlos', surname: 'Rowe', age: 40, sex: 'Female',
	},
	{
		name: 'Carlos', surname: 'Rowe', age: 40, sex: 'Female',
	},
	{
		name: 'Carlos', surname: 'Rowe', age: 40, sex: 'Female',
	},
	{
		name: 'Erik', surname: 'Owen', age: 43, sex: 'Female',
	},
	{
		name: 'Christian', surname: 'Hopkins', age: 33, sex: 'Male',
	}];
	const generated = uniqueByProp(peopleData, 'name');
	t.is(generated.length, expectedLength);
});
