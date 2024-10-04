const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  titlw: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const purchaseSchema = new Schema({
  courseId: ObjectId,
  userId: ObjectId,
});

const userModal = mongoose.model("users", userSchema);
const courseModal = mongoose.model("courses", courseSchema);
const adminModal = mongoose.model("admins", adminSchema);
const purchaseModal = mongoose.model("Purchases", purchaseSchema);

module.exports = {
  userModal,
  courseModal,
  adminModal,
  purchaseModal,
};
