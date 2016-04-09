var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var DB = require('./db.js');
var index = require('./routes/index.js');
var doctor = require('./routes/doctor.js');
var pharmacy = require('./routes/pharmacy.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', index);
app.use('/doctor', doctor);
app.use('/pharmacy', pharmacy);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// Connect to Mongo on start
DB.connect('mongodb://127.0.0.1:27017/script', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } else {
    app.listen(8081, function() {
      console.log('Listening on port 3000...');

      // DB Collection creation - will find better place soon
      DB.get().createCollection("Medication", function(err, data) {
        if (!err) {
          console.log("-> Collection 'Medication' created");
        }
      });

      DB.get().createCollection("Doctors", function(err, data) {
        if (!err) {
          console.log("-> Collection 'Doctors' created");
        }
      });

      DB.get().createCollection("Pharmacies", function(err, data) {
        if (!err) {
          console.log("-> Collection 'Pharmacies' created");
        }
      });
    });
  }
});
