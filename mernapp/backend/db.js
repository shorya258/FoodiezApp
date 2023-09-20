const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://foodiez:foodiez@cluster0.jlauqxw.mongodb.net/foodiezMERN?retryWrites=true&w=majority";
const mongoDB = async () => {
  try {
    // mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log("connected successfully");
    const fetched_data = mongoose.connection.db.collection("food_items");
    fetched_data
      .find({})
      .toArray()
      .then((data) => {
        console.log();
      });
  } catch (err) {
    console.log(err);
  }
};
module.exports = mongoDB;
