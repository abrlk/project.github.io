import ko from 'knockout';
import sortTableAscDesc from './app/sortTableAscDesc/sortTableAscDesc';

ko.bindingHandlers.sort = {
	init(element, valueAccessor, allBindingsAccessor, viewModel) {
		let asc = true;
		sortTableAscDesc(viewModel, valueAccessor().arr, valueAccessor().prop, asc);
		element.onclick = function forSortAsc() {
			asc = !asc;
			sortTableAscDesc(viewModel, valueAccessor().arr, valueAccessor().prop, asc);
		};
	},
};
