import UsersModel from './../services/db/index';
import makeRadio from './../pubSub/pubSub';

const radio = makeRadio();

export default class UsersDB {
	constructor() {
		this.emptyFieldsMsg = 'You DO NOT entered all required fields!';
		radio.subscribe('MainModel.addUser', this.addUser.bind(this));
		radio.subscribe('MainModel.updateUser', this.updateUser.bind(this));
		radio.subscribe('MainModel.deleteUser', this.removeUser.bind(this));
		radio.subscribe('MainModel.allUsers', this.allUser.bind(this));
	}

	addUser({ name, surname, age, sex }) {
		if (name === '' || surname === '' || age === '' || sex === '') {
			radio.publish('UsersDB.ifOneInputIsClear', { message: this.emptyFieldsMsg });
			return;
		}
		UsersModel.insert('users', {
			name,
			surname,
			age,
			sex,
		});
		UsersModel.commit();
		this.allUser();
		radio.publish('UsersDB.clearInputs');
	}

	updateUser(updatedUser) {
		if (updatedUser.name === '' || updatedUser.surname === '' || updatedUser.age === '' || updatedUser.sex === '') {
			alert('You have empty fields');
			this.allUser();
			return;
		}
		UsersModel.update('users', { ID: updatedUser.ID }, () => updatedUser);
		UsersModel.commit();
		this.allUser();
	}

	allUser() {
		const users = UsersModel.queryAll('users');
		radio.publish('UsersDB.IGiveUsers', users);
	}

	removeUser(user) {
		UsersModel.deleteRows('users', { ID: user.ID });
		UsersModel.commit();
		this.allUser();
	}
}
