import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Game } from "./models/gameModel.js";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello world!");
});

app.post("/games", async(request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all reqired fields: title, author, publishYear",
      });
    }
    const newGame = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
    }

    const game = await Game.create(newGame);

    return response.status(201).send(game)

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

app.get('/games/:id', async (request, response) =>{
    try {

    const  {id} = request.params;

    const game = await Game.findById(id)

    return response.status(200).json(game) ;
    }catch(error){
    console.log(error.message);
    response.status(500).send({message: error.message})
    }
})

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
