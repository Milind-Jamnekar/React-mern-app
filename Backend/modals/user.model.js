import mongoose from "mongoose";

const Schema = mongoose.Schema;

//Id's are automatically generated by defalu
const userSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
});

const User = mongoose.model("User", userSchema);
export default User;
