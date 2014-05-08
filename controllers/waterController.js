var fs = require('fs');
var path = require('path');

module.exports = {

	water: function(req, res) {
		var waterFile = path.join(__dirname, '../views/water.html');
		fs.readFile(waterFile,'utf-8', function(err, data) {  //example of a node callback or 'nodeback'
			if (err) {
				console.error('Error retrieving water.html');  //logs to terminal
				res.send(500, 'So sorry');
				return; //bypasses the else statement
			}
			res.send(data);
		});
	},

	water2: function(req, res) {
		res.render('water2');
	}
	
};