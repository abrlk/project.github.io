import $ from 'jquery';
import ko from 'knockout';
import generateUsers from './app/generateUsers/generateUsers';
import Pagination from './app/pagination/pagination';
import uniqueByProp from './app/uniqueByProp/uniqueByProp';
import liveSearch from './app/liveSearch/liveSearch';
import prefixSex from './app/prefixSex/prefixSex';
import { sortBy } from './app/utils/utils';
import './bindings';

window.ko = ko;
window.$ = $;

const arrPaginationProps = [
	'numberOfItemsPerPage',
	'rows',
	'pageIndex',
	'pageSize',
	'maxPageIndex',
	'pageSize',
	'pagedPeoples',
	'previousPage',
	'nextPage',
	'gotoPage',
	'buttons'];

const mergeInstanses = function (props, src, dest) {
	props.forEach((propName) => {
		dest[propName] = src[propName];
	});
};

/**
 *
 * @param {*} data
 */

class Main {
	constructor(users) {
		const pagination = new Pagination(users);
		this.sortBy = ko.observable('asc');
		const filteredByName = uniqueByProp(users, 'name');
		const filteredByAge = sortBy(filteredByName, 'age');
		this.filtered = filteredByAge.map(prefixSex);
		this.peopleData = users;
		this.inputName = ko.observable('');
		this.liveSearchPeople = ko.computed(function liveS() {
			return liveSearch(users, this.inputName());
		}, this);
		mergeInstanses(arrPaginationProps, pagination, this);
	}
}

const peopleData = generateUsers(101);
const main = new Main(peopleData);
ko.applyBindings(main);
