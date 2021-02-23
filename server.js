'use strict';

require('dotenv').config();

// Configuring the environment variables
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Database Connection
require('./src/db/config')
require('./src/db/associations')

// Importing the express app
const app = require('./app');

// Starting the server
const server = app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});

// Handle Unhandled Rejections
process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection! Shutting down the server...');
  console.error(err);
  server.close(() => {
    process.exit(1);
  });
});
