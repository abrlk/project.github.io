import test from 'ava';
import proxyquire from 'proxyquire';
import { importWithoutStyles } from '../utils/utils';

const { default: LiveSearch } = importWithoutStyles('src/app/liveSearch/liveSearch');


test('test should find word', (t) => {
	const live = new LiveSearch();
	const src = [{ name: 'word' }, { name: 'Oleg' }, { name: 'Andriy' }, { name: 'Pulup' }];
	const pattern = 'word';
	const result = live.liveSearch(src, pattern);
	const expected = 'word';
	t.is(result[0].name, expected);
});

test('test should not find word in hello world', (t) => {
	const live = new LiveSearch();
	const src = [{ name: 'word' }, { name: 'Oleg' }, { name: 'Andriy' }, { name: 'Pulup' }];
	const expected = src;
	live.rerenderLiveSearch(src);
	const result = live.inputArr();
	t.is(result, expected);
});
