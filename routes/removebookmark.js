var user = require('../models/user.js');

module.exports = function(req, res) {
	if(!(req.user && req.body.group && req.body.address)) return;		//Sanitisation
		
	user.removeBookmark(req.user._doc.username, req.body.group, {'address': req.body.address}, function(err){});
};