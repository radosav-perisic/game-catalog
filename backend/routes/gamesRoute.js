import express from "express";
import { Game } from "../models/gameModel.js";

const router = express.Router();

router.post("/", async (request, response) => {
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
    };

    const game = await Game.create(newGame);

    return response.status(201).send(game);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const games = await Game.find({});

    return response.status(200).json({
      count: games.length,
      data: games,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const game = await Game.findById(id);

    return response.status(200).json(game);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = request.params;

    const result = await Game.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Game not found" });
    }
    return response.status(200).send({ message: "Game updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Game.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Game not found" });
    }
    return response.status(200).send({ message: "Game deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
