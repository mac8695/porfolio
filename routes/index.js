var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


exports.contact = function(req, res){
  res.render('contact', { title: 'Raging Flame Laboratory - Contact', page: 'contact' })
};

/*
var nodemailer = require('nodemailer');

var router = express.Router();
//app.use('/sendContactMail', 'router');
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

function handleSayHello(req, res) {
  // Not the movie transporter!
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'chavan.mahesh40@gmail.com', // Your email id
      pass: '8652587778' // Your password
    }
  });

  var text = 'Hello world from \n\n' + req.body.name;

  var mailOptions = {
    from: 'example@gmail.com>', // sender address
    to: 'chavan.mahesh40@gmail.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({yo: info.response});
    };
  });

  res.render('index', { title: 'Express' });
}

*/

/* GET home page
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET services page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services'});
});

/* GET about page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me'});
});
*/
module.exports = router;
