import LocalStorageDB from 'localstoragedb';

// Initialise. If the database doesn't exist, it is created
const lib = new LocalStorageDB('users', localStorage);

// Check if the database was just created. Useful for initial database setup
if (lib.isNew()) {
	// create the "books" table
	lib.createTable('users', ['name', 'surname', 'age', 'sex']);

	// insert some data
	lib.insert('users', {
		name: 'Agnes', surname: 'Johnson', age: 59, sex: 'Female',
	});
	lib.insert('users', {
		name: 'Albert', surname: 'Casey', age: 40, sex: 'Female',
	});
	lib.insert('users', {
		name: 'Alex', surname: 'Gonzalez', age: 24, sex: 'Male',
	});

	// commit the database to localStorage
	// all create/drop/insert/update/delete operations should be committed
	lib.commit();
}
