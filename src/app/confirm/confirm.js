import ko from 'knockout';
import makeRadio from './../pubSub/pubSub';
import './confirm.sass';

const radio = makeRadio();

export default class Confirm {
	constructor() {
		this.userID = 0;
		this.confirmMessage = ko.observable('');
		this.confirmMode = ko.observable(false);
		radio.subscribe('Confirm.Id', (user) => { this.userID = user.ID; });
		radio.subscribe('MainModel.confirm', this.showWindowMsg.bind(this));
	}

	showWindowMsg(user) {
		this.confirmMode(!this.confirmMode());
		this.confirmMessage(user.message);
		radio.publish('Confirm.Id', { ID: user.ID });
	}

	yes() {
		radio.publish('MainModel.deleteUser', { ID: this.userID });
		this.confirmMode(!this.confirmMode());
	}

	no() {
		this.confirmMode(!this.confirmMode());
	}
}
