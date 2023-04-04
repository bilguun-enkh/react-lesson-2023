import mongoose, { Date, Schema } from "mongoose";

interface IViewer {
    rating: number,
    numReview: number,
    meter: number
}

interface IAwards {
    wins: number,
    nominations: number,
    text: string,
}
interface IImdb {
    rating: number,
    votes: number,
    id: number
}
interface ITomatoes {
    viewer: IViewer,
    lastUpdated: Date
}
interface IMovie {
    plot: string,
    genre: {
        type: [string]
    },
    runtime: number,
    rated: string,
    cast: {
        type: [string]
    },
    num_mflix_comments: number,
    poster: string,
    title: string,
    fullplot: string,
    languages: {
        type: [string]
    },
    released: Date,
    directors: [
        type: [string]
    ],
    writers: [
        type: [string]
    ],
    awards: IAwards,
    lastupdated: Date,
    year: number,
    imdb: IImdb,
    countries: {
        type: [string]
    },
    type: string,
    tomatoes: ITomatoes
}

const MovieSchema: Schema = new Schema({})

const MovieModel = mongoose.model<IMovie>("Movie", MovieSchema)

export default MovieSchema