import { Request, Response } from "express";
import MovieModel from "../models/movie";

export const getMovies = async (request: Request, response: Response) => {
    try {
        const movies = await MovieModel.find({ "tomatoes.viewer.meter": { $gte: 90 }, year: { $gt: 2010 } }).limit(30)
        response.status(200).json(movies)
    } catch (error) {
        response.status(404).json({ data: [] })
    }
}

export const getDetails = async (req: Request, res: Response) => {
    try {
        const details = await MovieModel.findOne({ _id: req.params.id });
        res.status(200).json(details);
    } catch (error) {
        res.status(404).json({ data: ["MOVIE NOT FOUND."] });
    }
};