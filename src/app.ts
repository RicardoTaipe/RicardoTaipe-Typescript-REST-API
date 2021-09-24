import express from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";
import authRoutes from "./routes/auth.routes";
import specialRoutes from "./routes/special.routes";
import taskRoutes from "./routes/tasks.routes";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(morgan("dev"));
app.use(compression());
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);
app.use(authRoutes);
app.use(specialRoutes);
app.use(taskRoutes);
const specs = swaggerJSDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.get("*", (req, res) => {
  res.redirect("/docs");
});
export default app;
