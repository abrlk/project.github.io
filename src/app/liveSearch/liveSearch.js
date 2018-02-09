import ko from 'knockout';
import './liveSearch.sass';
import radio from '../pubSub/pubSub';

const stringMatch = (src, patt) => new RegExp(patt, 'i').test(src);

export default class LiveSearch {
	constructor() {
		this.inputArr = ko.observableArray([]);
		radio.subscribe('MainModel.IGotUsers', this.rerenderLiveSearch.bind(this));
		this.inputName = ko.observable('');
		this.liveSearchPeople = ko.computed(function liveS() {
			return this.liveSearch(this.users, this.inputName());
		}, this);
		this.liveSearch(this.inputArr, this.inputName());
	}

	rerenderLiveSearch(users) {
		this.inputArr(users);
	}

	liveSearch() {
		const usersArr = this.inputArr();
		const pattern = this.inputName();
		return usersArr.filter(obj => Object.keys(obj)
			.some(propName => stringMatch(obj[propName], pattern)));
	}
}
