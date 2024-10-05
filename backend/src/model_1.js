import mongoose from "mongoose";
const Schema = mongoose.Schema;

let user = new Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number
    },
    location: {
      type: String
    }
  },
  {
    collection: "Users"
  }
)

export default mongoose.model("User", user)