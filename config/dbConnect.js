const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database is CONNECTED");
  } catch (error) {
    console.log("Database error");
    //throw new Error(error)
  }
};
mongoose.set("strictQuery", true);

module.exports = dbConnect;
