import ko from 'knockout';
import { fillArray } from '../utils/utils';
import './pagination.sass';
import radio from '../pubSub/pubSub';

const maxPageIndex = function mPi() {
	let pageS = this.pageSize();
	if (pageS === 'all') {
		pageS = this.rows().length;
	}
	return Math.ceil(this.rows().length / pageS) - 1;
};

const pageSizeObserver = function pSo() {
	if (this.pageIndex() > this.maxPageIndex()) {
		this.pageIndex(0);
	}
	return this.pageIndex(0);
};

const pagedPeopleComputed = function pPc() {
	let size = this.pageSize();
	if (size === 'all') {
		size = this.rows().length;
	}
	const start = this.pageIndex() * size;
	return this.rows().slice(start, start + size);
};

export default class Pagination {
	constructor() {
		this.rows = ko.observableArray([]);
		radio.subscribe('MainModel.IGotUsers', this.rerenderButtons.bind(this));
		this.numberOfItemsPerPage = ko.observableArray([5, 10, 20, 50, 'all']);
		this.sortBy = ko.observable('asc');
		this.pageIndex = ko.observable(0);
		this.pageSize = ko.observable(this.numberOfItemsPerPage()[0]);
		this.maxPageIndex = ko.computed(maxPageIndex, this);
		this.pageSize.subscribe(pageSizeObserver, this);
		this.pagedPeoples = ko.computed(pagedPeopleComputed, this);
		this.gotoPage(0);
	}

	rerenderButtons(users) {
		this.rows(users);
	}

	previousPage() {
		const pageIndex = this.pageIndex();
		if (pageIndex > 0) {
			this.pageIndex(pageIndex - 1);
		} else {
			this.pageIndex(0);
		}
		return this.pageIndex();
	}

	nextPage() {
		const pageIndex = this.pageIndex();
		if (pageIndex < this.maxPageIndex()) {
			this.pageIndex(pageIndex + 1);
		} else {
			this.pageIndex(this.maxPageIndex());
		}
		return this.pageIndex();
	}

	gotoPage(data) {
		if (this.pageSize() !== 'all') {
			this.pageIndex(data);
		}
		return this.pageIndex();
	}

	buttons() {
		return fillArray(this.maxPageIndex() + 1);
	}
}
