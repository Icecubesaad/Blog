const mongoose = require("mongoose");
const url = "";
const connection = () => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to database!');
      // your code here
    })
    .catch((error) => {
      console.error('Error connecting to database:', error);
    });
}
module.exports = connection;
