const mongoose = require("mongoose");

const dbConnect = async () => {
  return mongoose.connect(
    "mongodb+srv://gautam:gautam@cointab.hrx5xwe.mongodb.net/cointab"
  );
};

module.exports = dbConnect;
