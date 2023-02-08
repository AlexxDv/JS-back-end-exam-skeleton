const { Schema, model, Error } = require("mongoose");

const userShema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  }
  // {
  //   virtuals: {
  //     repeatPassword: {
  //       set(value) {
  //         if (this.password !== value) {
  //           throw new Error("Password does not match");
  //         }
  //       },
  //     },
  //   },
  // }
);

const User = model("User", userShema);

module.exports = User;
