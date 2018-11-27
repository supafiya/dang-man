const express = require('express');
const app = express();
const port = 5000;

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(
	url,
	function(err, db) {
		if (err) throw err;
		var dbo = db.db('mydb');
		dbo.collection('customers')
			.find({})
			.toArray(function(err, result) {
				if (err) throw err;
				console.log('find empty[2].name: ' + result[2].name);
				db.close();
			});
	}
);

// Return the fields "name" and "address" of all documents in the customers collection:

// MongoClient.connect(
// 	url,
// 	function(err, db) {
// 		if (err) throw err;
// 		var dbo = db.db('mydb');
// 		dbo.collection('customers')
// 			.find({}, { projection: { _id: 0, name: 1, address: 1 } })
// 			.toArray(function(err, result) {
// 				if (err) throw err;
// 				console.log(result);
// 				db.close();
// 			});
// 	}
// );

// Find documents with the address "Park Lane 38":
// returns ALL info in object. Perfect to search for ID of cards

// MongoClient.connect(
// 	url,
// 	function(err, db) {
// 		if (err) throw err;
// 		var dbo = db.db('mydb');
// 		var query = { address: 'Park Lane 38' };
// 		dbo.collection('customers')
// 			.find(query)
// 			.toArray(function(err, result) {
// 				if (err) throw err;
// 				console.log(result);
// 				db.close();
// 			});
// 	}
// );

// Sort the result alphabetically by name:

// MongoClient.connect(
// 	url,
// 	function(err, db) {
// 		if (err) throw err;
// 		var dbo = db.db('mydb');
// 		var mysort = { name: 1 };
// 		dbo.collection('customers')
// 			.find()
// 			.sort(mysort)
// 			.toArray(function(err, result) {
// 				if (err) throw err;
// 				console.log(result);
// 				db.close();
// 			});
// 	}
// );

app.listen(port, () => console.log(`Listening on port ${port}`));
