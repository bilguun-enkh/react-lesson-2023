import mongoose, { Date, Schema } from "mongoose";

interface IComments {
    name: string,
    email: string,
    movie_id: number,
    text: string,
    date: Date
}

const CommentsSchema: Schema = new Schema({})

const CommentModel = mongoose.model<IComments>("Comments", CommentsSchema)

export default CommentModel