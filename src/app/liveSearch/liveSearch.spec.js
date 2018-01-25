import test from 'ava';
import proxyquire from 'proxyquire';
import { importWithoutStyles } from '../utils/utils';

const { default: liveSearch, stringMatch } = importWithoutStyles('src/app/liveSearch/liveSearch');


test('stringMatch should find word in hello world', (t) => {
	const expected = true;
	const src = 'hello world';
	const pattern = 'world';
	const result = stringMatch(src, pattern);
	t.is(result, expected);
});

test('stringMatch should not find word in hello world', (t) => {
	const expected = false;
	const src = 'hello wqorqlqd';
	const pattern = 'world';
	const result = stringMatch(src, pattern);
	t.is(result, expected);
});

test('liveSearch should filter array', (t) => {
	const srcArray = [{ name: 'Ostap' }, { name: 'Oleg' }, { name: 'Andriy' }, { name: 'Pulup' }];
	const pattern = 'Ostap';
	const expectedArray = [{ name: 'Ostap' }];
	const filteredArray = liveSearch(srcArray, pattern);
	t.deepEqual(expectedArray, filteredArray);
});
