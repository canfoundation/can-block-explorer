const config = require('../config');

// production mod
config.PROD = true;

// mongo uri and options
config.MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb:27017';
config.MONGO_OPTIONS = {
  ...config.MONGO_OPTIONS,
  user: 'root',
  pass: 'test123',
  dbName: 'EOSweb',
};

console.log('---- config.MONGO_URI', config.MONGO_URI);

module.exports = config;

