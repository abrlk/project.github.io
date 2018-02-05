import $ from 'jquery';
import ko from 'knockout';
import uniqueByProp from './app/uniqueByProp/uniqueByProp';
import liveSearch from './app/liveSearch/liveSearch';
import prefixSex from './app/prefixSex/prefixSex';
import { sortBy } from './app/utils/utils';
import './bindings';
import radio from './app/pubSub/pubSub';

window.ko = ko;
window.$ = $;

/**
 *
 * @param {*} data
 */

export default class Main {
	constructor() {
		this.users = [{
			name: 'Isaiah',
			surname: 'Wong',
			age: 0,
			sex: 'Female',
			editMode: false,
		}, {
			name: 'Isa',
			surname: 'Wo',
			age: 33,
			sex: 'Female',
			editMode: false,
		}, {
			name: 'Isaak',
			surname: 'Qwerty',
			age: 330,
			sex: 'Female',
			editMode: false,
		}];
		this.sortBy = ko.observable('asc');
		const filteredByName = uniqueByProp(this.users, 'name');
		const filteredByAge = sortBy(filteredByName, 'age');
		this.filtered = filteredByAge.map(prefixSex);
		this.editUsers = this.users.map((user) => {
			user.editMode = ko.observable(false);
			return user;
		});
		this.editModeFunc = function editMode(user) {
			user.editMode(!user.editMode());
		};
		this.inputName = ko.observable('');
		this.liveSearchPeople = ko.computed(function liveS() {
			return liveSearch(this.users, this.inputName());
		}, this);
		radio.publish('users', this.users);
	}
	save() {
		this.editMode(!this.editMode);
	}
}
