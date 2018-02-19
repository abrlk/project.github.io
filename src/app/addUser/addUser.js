import ko from 'knockout';
import makeRadio from './../pubSub/pubSub';
import './addUser.sass';

const radio = makeRadio();

export default class AddUser {
	constructor() {
		this.addMode = ko.observable(false);
		this.addUserMessage = ko.observable('');
		this.inpName = ko.observable('');
		this.inpSurname = ko.observable('');
		this.inpAge = ko.observable('');
		this.inpSex = ko.observable('');
		radio.subscribe('MainModel.showAddWindow', this.showAddWindow.bind(this));
		radio.subscribe('UsersDB.clearInputs', this.clearInputs.bind(this));
		radio.subscribe('UsersDB.ifOneInputIsClear', this.showAddWindow.bind(this));
	}

	showAddWindow(user) {
		this.addMode(!this.addMode());
		this.addUserMessage(user.message);
	}

	addNew() {
		radio.publish('MainModel.addUser', {
			name: this.inpName(),
			surname: this.inpSurname(),
			age: this.inpAge(),
			sex: this.inpSex(),
		});
		this.addMode(!this.addMode());
	}

	closeAddWindow() {
		this.addMode(!this.addMode());
	}

	clearInputs() {
		this.inpName('');
		this.inpSurname('');
		this.inpAge('');
		this.inpSex('');
	}
}

