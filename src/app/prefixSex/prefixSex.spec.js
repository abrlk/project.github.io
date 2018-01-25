import test from 'ava';
import prefixSex from './prefixSex';

const sexPrefixTestHelper = (sex, expectedString) => (t) => {
	const generatedString = prefixSex({
		name: 'Andy',
		surname: 'Royce',
		age: 15,
		sex,
	});
	t.is(generatedString.name, expectedString);
};

test('should add prefix міс if sex is female', sexPrefixTestHelper('Female', 'Міс Andy Royce'));
test('should add prefix містер if sex is male', sexPrefixTestHelper('Male', 'Містер Andy Royce'));
