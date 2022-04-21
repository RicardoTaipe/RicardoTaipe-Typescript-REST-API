import { connect } from "mongoose";
import config from "./config/config";

let DB_URI = config.DB.URI;
DB_URI = DB_URI.replace("password", config.DB.PASSWORD).replace(
  "username",
  config.DB.USER
);

export const startDBConnection = async () => {
  try {
    const db = await connect(DB_URI);
    console.log("MondoDB connection stablished with db:" + db.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};
