const express = require('express')
const router = express.Router() 
const request = require('request')

router.post('/',(req,res) => {

	var program = {
		script : req.body.code,
		language : req.body.language,
		versionIndex: req.body.versionIndex,
		clientId: "e6c51346ea5408d09f3f70a8a317e595",
		clientSecret:"4112856a802a6d7d2182a6bc0744ba5a7bb0e9b38b8332a83f22f6253376fe09"
	};

	request({
	    url: 'https://api.jdoodle.com/v1/execute',
	    method: "POST",
	    json: program
	},
		function (error, response, body) {
		    console.log('error:', error);
		    console.log('statusCode:', response && response.statusCode);
		    // console.log('body:', body);
			res.send(body.output);
	});

	// res.end()

})


module.exports = router