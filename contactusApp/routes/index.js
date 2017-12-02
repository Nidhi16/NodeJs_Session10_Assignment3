var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contact', function(req, res, next) {
  console.log(req.body);
  details = JSON.stringify(req.body);
  // res.send(details);
  var transporter = nodemailer.createTransport({
	  service: 'Hotmail',
	      auth: {
	          user: 'tempexp@outlook.com',
	          pass: '7l1yrQ003Q48'
	      }
	  });
	   transporter.sendMail({
	      from: 'tempexp@outlook.com',
	      to: 'nidhi.valuable@gmail.com',
	      subject: 'Mail using nodemailer',
	      text: 'This mail is send using nodemailer',
	      html: '<p>This mail is send using <b>nodemailer</b></p>'
	  }, function(err, response){
			console.log('Mail sending done :');
			console.dir(err);
			console.dir(response);
			res.writeHead(200, {'Content-Type': 'text/plain'});
			if (err) {
				res.end('Mail not sent\n\nError :\n' + JSON.stringify(err) + '\n\nResponse :\n' + JSON.stringify(response));
			} else {
				res.end('Mail sent successfully\n\nError :\n' + JSON.stringify(err) + '\n\nResponse :\n' + JSON.stringify(response));
			}
	  });
});

module.exports = router;
