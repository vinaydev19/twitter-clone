import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.routes.js";
import tweetRoute from "./routes/tweet.routes.js";
import cors from "cors";

dotenv.config({
  path: ".env",
});

connectDB();
const app = express();

// middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

app.listen(process.env.PORT, () => {
  console.log(`app listen at port no ${process.env.PORT}`);
});
