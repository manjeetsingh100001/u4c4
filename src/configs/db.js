const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    " mongodb://127.0.0.1:27017/todo"
    //"mongodb+srv://manjeetdb:mongodb@cluster0.swdoo.mongodb.net/todo"
  );
};
