var connection = function() {
	return mongoose.connect('mongodb://localhost/myapp');
};

module.exports = connection;