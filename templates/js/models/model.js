var express = require('express');

var userModel = function(User) {
	addUser: function() {
		var newuser = new User({ firstname: 'example', lastname: 'example', username: 'example' });
		newuser.save(function(err, docs) {
			if(err) console.log(err);

			console.log(docs);
		});
	},
	getUser: function() {
		User.find({ username: 'example' }, function(err, docs) {
			if(err) console.log(err);

			console.log(docs);
		});
	},
	removeUser: function() {
		User.remove({ username: 'example' }, function(err, docs) {
			if(err) console.log(err);

			console.log(docs);
		});
	}
	return {
		addUser: addUser,
		getUser: getUser,
		removeUser: removeUser
	}
};

module.exports = userModel;