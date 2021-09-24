import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(__dirname, "../.env") });
import app from "./app";
import "./db";
const port = app.get("port");
app.listen(port, () => console.log("Server listening on port 3000"));
