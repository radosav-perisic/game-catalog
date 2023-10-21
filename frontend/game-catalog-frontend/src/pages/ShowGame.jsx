import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowGame = () => {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/games/${id}`)
      .then((response) => {
        setGame(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 ">Show Game</h1>
      {loading ? (
        <Spinner />
      ): (<div className="flex flex-col border-2 border-blue-500 rounded-xl w-fit p-4">
        <div className="my-4">
        <span className="text-lg mr-4 text-gray-500">Id</span>
        <span>{game._id}</span>
        </div>
        <div className="my-4">
        <span className="text-lg mr-4 text-gray-500">Title</span>
        <span>{game.title}</span>
        </div>
        <div className="my-4">
        <span className="text-lg mr-4 text-gray-500">Author</span>
        <span>{game.author}</span>
        </div>
        <div className="my-4">
        <span className="text-lg mr-4 text-gray-500">Publish Year</span>
        <span>{game.publishYear}</span>
        </div>
        <div className="my-4">
        <span className="text-lg mr-4 text-gray-500">Create Time</span>
        <span>{new Date(game.createdAt).toString()}</span>
        </div>
        <div className="my-4">
        <span className="text-lg mr-4 text-gray-500">Last Update Time</span>
        <span>{new Date(game.updatedAt).toString()}</span>
        </div>
      </div>)}
    </div>
  );
};

export default ShowGame;
