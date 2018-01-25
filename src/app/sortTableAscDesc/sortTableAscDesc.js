// import './sortTableAscDesc.sass';

/**
 * @param {*} viewModel
 * @param {*} data
 * @param {*} prop-propertie
 * @param {*} asc-order
 */

export default function sortTable(viewModel, data, prop, asc) {
	if (asc) {
		data.sort((left, right) => {
			viewModel.sortBy('asc');
			return left[prop] === right[prop] ? 0 : left[prop] < right[prop] ? -1 : 1;
		});
	} else {
		data.sort((left, right) => {
			viewModel.sortBy('desc');
			return left[prop] === right[prop] ? 0 : left[prop] > right[prop] ? -1 : 1;
		});
	}
}
