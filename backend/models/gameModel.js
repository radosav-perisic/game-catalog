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

const Cat = mongoose.model('Call of Duty', gameSchema);
