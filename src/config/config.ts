export default {
  JWT_SECRET: process.env.JWT_SECRET || "secret",
  DB: {
    URI: process.env.DB_URI || "",
    USER: process.env.DB_USER || "",
    PASSWORD: process.env.DB_PASSWORD || "",
  },
};
