import mongoose from "mongoose";
import config from "./config/config";

let DB_URI = config.DB.URI;
DB_URI = DB_URI.replace("password", config.DB.PASSWORD).replace(
  "username",
  config.DB.USER
);

mongoose.connect(DB_URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MondoDB connection stablished");
});

connection.once("error", (err) => {
  console.log(err);
  process.exit(0);
});
