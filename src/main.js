import $ from 'jquery';
import ko from 'knockout';
import './app/crudButtons/crudButtons';
import './bindings';
import makeRadio from './app/pubSub/pubSub';
import './app/database/database';

const radio = makeRadio();

window.ko = ko;
window.$ = $;

/**
 *
 * @param {*} data
 */

export default class Main {
	constructor() {
		this.users = ko.observableArray([]);
		radio.subscribe('UsersDB.IGiveUsers', this.putUsersInMainModel.bind(this));
		radio.subscribe('UsersDB.clearInputs', this.clearInputs.bind(this));
		this.sortBy = ko.observable('asc');
		this.confirmMessage = 'Are you sure?';
		this.inpName = ko.observable('');
		this.inpSurname = ko.observable('');
		this.inpAge = ko.observable('');
		this.inpSex = ko.observable('');
		this.editModeFunc = function editMode(user) {
			user.editMode(!user.editMode());
		};
		this.read();
	}

	putUsersInMainModel(users) {
		const editUsers = users.map((user) => {
			user.editMode = ko.observable(false);
			return user;
		});
		this.users(editUsers);
		radio.publish('MainModel.IGotUsers', users);
	}

	edit(user) {
		this.editModeFunc(user);
	}

	save(user) {
		radio.publish('MainModel.updateUser', user);
		this.editModeFunc(user);
	}

	delete(data) {
		radio.publish('MainModel.confirm', { message: this.confirmMessage, ID: data.ID });
	}

	read() {
		radio.publish('MainModel.allUsers');
	}

	addNew() {
		radio.publish('MainModel.addUser', {
			name: this.inpName(),
			surname: this.inpSurname(),
			age: this.inpAge(),
			sex: this.inpSex(),
		});
	}

	clearInputs() {
		this.inpName('');
		this.inpSurname('');
		this.inpAge('');
		this.inpSex('');
	}
}
