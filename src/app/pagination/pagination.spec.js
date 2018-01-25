import test from 'ava';
import Pagination from './pagination';
import { fillArray, times } from '../utils/utils';

test('should increment page index', (t) => {
	const arr = fillArray(35);
	const pagination = new Pagination(arr);
	const expectedIndex = 1;
	const expectedIndex2 = 2;
	const expectedIndex3 = 6;
	pagination.nextPage();
	const generatedIndex = pagination.pageIndex();
	t.is(generatedIndex, expectedIndex);
	times(1)(() => pagination.nextPage());
	const generatedIndex2 = pagination.pageIndex();
	t.is(generatedIndex2, expectedIndex2);
	times(5)(() => pagination.nextPage());
	const generatedIndex3 = pagination.pageIndex();
	t.is(generatedIndex3, expectedIndex3);
});

test('max page index should be 3 for 11 items', (t) => {
	const arr = fillArray(11);
	const pagination = new Pagination(arr);
	const expectedIndex = 2;
	const pageIndex = pagination.maxPageIndex();
	t.is(pageIndex, expectedIndex);
});

test('should decrement page index', (t) => {
	const arr = fillArray(11);
	const pagination = new Pagination(arr);
	const expectedIndex = 1;
	times(2)(() => pagination.nextPage());
	times(1)(() => pagination.previousPage());
	const generatedIndex = 1;
	t.is(generatedIndex, expectedIndex);
});

test('should go to current page index', (t) => {
	const arr = fillArray(101);
	const pagination = new Pagination(arr);
	const expectedIndex = 20;
	const generatedMaxIndex = pagination.gotoPage(pagination.maxPageIndex());
	t.is(generatedMaxIndex, expectedIndex);
});

test('should check max page index', (t) => {
	const arr = fillArray(101);
	const pagination = new Pagination(arr);
	const expectedIndex = 0;
	pagination.pageSize('all');
	const generatedPageSize = pagination.maxPageIndex();
	t.is(generatedPageSize, expectedIndex);
});

test('should check pageSizeObserver', (t) => {
	const arr = fillArray(101);
	const pagination = new Pagination(arr);
	const expectedIndex = 0;
	pagination.pageIndex(25);
	pagination.pageSize(10);
	const generatedPageIndex = pagination.pageIndex();
	t.is(generatedPageIndex, expectedIndex);
});

test('should check fillArray', (t) => {
	const arr = fillArray(101);
	const pagination = new Pagination(arr);
	const expectedIndex = 20;
	const generatedPageIndex = pagination.buttons();
	t.is(generatedPageIndex.length, expectedIndex);
});

test('should check previousPage', (t) => {
	const arr = fillArray(101);
	const pagination = new Pagination(arr);
	const expectedIndex = 0;
	pagination.pageIndex(-1);
	const generatedPageIndex = pagination.previousPage();
	t.is(generatedPageIndex, expectedIndex);
});

test('should check gotoPage', (t) => {
	const arr = fillArray(101);
	const pagination = new Pagination(arr);
	const expectedIndex = 0;
	pagination.pageSize('all');
	pagination.gotoPage(7);
	const generatedPageIndex = pagination.pageIndex();
	t.is(generatedPageIndex, expectedIndex);
});
