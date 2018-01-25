// import proxyquire from 'proxyquire';
// import path from 'path';

export const fillArray = (arrayLength) => {
	const arr = [];
	for (let i = 0; i < arrayLength; i += 1) {
		arr.push(i);
	}
	return arr;
};

export const times = x => (f) => {
	if (x > 0) {
		f();
		times(x - 1)(f);
	}
};

export const sortBy = (obj, by) => obj.sort((a, b) => {
	if (a[by] > b[by]) {
		return 1;
	} else if (a[by] < b[by]) {
		return -1;
	}
	return 0;
});

// export const importWithoutStyles = (pathToFile) => {
// 	const pathToJsFile = path.join(__dirname, '../../../', pathToFile);
// 	const pathToSassFile = `./${pathToFile.split('/').slice(-1).join('')}.sass`;
// 	return proxyquire(pathToJsFile, { [pathToSassFile]: { '@noCallThru': true } });
// };

export default {
	fillArray, times, sortBy,
};
