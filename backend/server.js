// server.js
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from 'dotenv';
import userRoutes from "./routes/users.js";
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("DB Connected")).catch(err => console.log('DB Connection error', err));

app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json()); // Adding body parsing middleware


app.use("/users", userRoutes);

const port = process.env.PORT || 8080;

const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
