import './liveSearch.sass';

const stringMatch = (src, pattern) => new RegExp(pattern, 'i').test(src);

export default function liveSearch(array, pattern) {
	return array.filter(obj => Object.keys(obj)
		.some(propName => stringMatch(obj[propName], pattern)));
}
