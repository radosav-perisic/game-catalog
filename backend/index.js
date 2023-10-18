import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Game } from "./models/gameModel.js";
import gamesRoute from './routes/gamesRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors());

app.use(cors({
  origin:'http://localhost:3000',
  methods:['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders:['Content-Type']
}))

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello world!");
});

app.use('/games', gamesRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to :${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
