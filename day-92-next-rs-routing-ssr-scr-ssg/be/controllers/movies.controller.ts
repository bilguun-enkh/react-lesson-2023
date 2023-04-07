import { Request, Response } from "express";
import MovieModel from "../models/movie";

export const getMovies = async (request: Request, response: Response) => {
    try {
        const movies = await MovieModel.find({}).limit(9)
        response.status(200).json(movies)
    } catch (error) {
        response.status(404).json({ data: [] })
    }
}