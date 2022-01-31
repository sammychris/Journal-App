import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './route/authRoutes';
import noteRoutes from './route/noteRoutes';
import userRoutes from './route/userRoutes';
import config from './config/config';


const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://sammychris:ebusam12@cluster0.tapcx.mongodb.net/Journal-app?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);


// serving static files...
if (process.env.NODE_ENV === 'production') {
	console.log('Production environment!');
	app.use(express.static('client/build'));
} else { console.log('Development environment!')}


// Routes
app.use('/api/auth/', authRoutes);
app.use('/api/note/', noteRoutes);
app.use('/api/user/', userRoutes);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected! to DB')
});

// listen for requests :)
const listener = app.listen(8000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
