const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    nom: String,
    prenom: String,
    email: String,
    password: String,
    phone: String,
    imageUrl: String,

    privateKey: {
      type: String,
      required: true,
    },
    publicKey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
