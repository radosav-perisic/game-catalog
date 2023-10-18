import mongoose from "mongoose";


const gameSchema = mongoose.Schema(
{
    title : {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,

    },
    publishYear : {
        type: Number,
        required: true,
    },
},
{
    timestamps: true, 
}
)

export const Game = mongoose.model('Call of Duty', gameSchema);
