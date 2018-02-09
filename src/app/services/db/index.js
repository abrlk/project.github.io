import LocalStorageDB from 'localstoragedb';

const UsersModel = new LocalStorageDB('usersDatabase', localStorage);

if (UsersModel.isNew()) {
	UsersModel.createTable('users', ['name', 'surname', 'age', 'sex']);
	UsersModel.insert('users', {
		name: 'Agnes', surname: 'Johnson', age: 59, sex: 'Female',
	});
	UsersModel.insert('users', {
		name: 'Albert', surname: 'Casey', age: 40, sex: 'Female',
	});
	UsersModel.insert('users', {
		name: 'A', surname: 'Ca', age: 4, sex: 'Female',
	});
	UsersModel.commit();
}

export default UsersModel;
