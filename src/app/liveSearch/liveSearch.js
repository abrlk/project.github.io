import ko from 'knockout';
import './liveSearch.sass';
import makeRadio from '../pubSub/pubSub';

const radio = makeRadio();
const stringMatch = (src, patt) => new RegExp(patt, 'i').test(src);

export default class LiveSearch {
	constructor() {
		this.inputArr = ko.observableArray([]);
		radio.subscribe('MainModel.IGotUsers', this.rerenderLiveSearch.bind(this));
		this.inputName = ko.observable('');
		this.liveSearchPeople = ko.computed(function liveS() {
			return this.liveSearch(this.inputArr(), this.inputName());
		}, this);
	}

	rerenderLiveSearch(users) {
		this.inputArr(users);
	}

	liveSearch(usersArr, pattern) {
		return usersArr.filter(obj => Object.keys(obj)
			.some(propName => stringMatch(obj[propName], pattern)));
	}
}
