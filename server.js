const app = require("./app")
const dotenv = require('dotenv');
dotenv.config();
const connectDatabase = require('./config/dbconfig')



connectDatabase();

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.stack}`);
  console.log('Shutting down due to uncaught exception');
  process.exit(1)
})

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})




