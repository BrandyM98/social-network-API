const express = require('express');
const mongodb = require('mongodb').MongoClient;
// const mongoose = require('mongoose')

const app = express();
const Port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./routes'));

// MONGOOSE 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-Api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () =>
console.log('Connected to MongoDB Endpoint')
);

mongoose.connection.on('error', (err) =>
console.log(`MONGOOSE DISCONNECTED ERROR: ${err}`)
);

app.listen(PORT, () => console.log(`Now listening on localhost ${PORT}`));
