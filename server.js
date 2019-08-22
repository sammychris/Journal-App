import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './route/authRoutes';
import noteRoutes from './route/noteRoutes';

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB, {useNewUrlParser: true});

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/views/index.html');
// });




//Sample front-end
// app.route('/page')
//   .get(function (req, res) {
//     res.sendFile(__dirname + '/views/test.html');
//   })

// Just testing


// import your route
// require('./route/api')(app);

// Routes
app.use('/api/auth/', authRoutes);
app.use('/api/note/', noteRoutes);
//app.use('/api/user/');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected! to DB')
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
