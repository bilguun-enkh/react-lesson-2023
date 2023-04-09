import TheaterModel from "../models/theaters.models";
import { Request, Response } from 'express'

export const getTheaters = async (request: Request, response: Response) => {
    try {
        const theaters = await TheaterModel.find({})
        console.log(theaters)
        response.status(200).json(theaters)
    } catch (error) {
        response.status(404).json({ data: [] })
    }
}

export const getTheaterById = async (request: Request, response: Response) => {
    try {
        const theater = await TheaterModel.find({ theaterId: Number(request.params.id) })
        response.status(200).json(theater)
    } catch (error) {
        response.status(404).json({ data: [] })
    }
}

export const searchTheatersByStreet = async (request: Request, response: Response) => {
    const street: string = String(request.query.keyword)
    try {
        const theater = await TheaterModel.find({ "location.address.street1": street })
        response.status(200).json(theater)
    } catch (error) {
        response.status(404).json({ data: [] })
    }
}

export const searchTheatersByZipcode = async (request: Request, response: Response) => {
    const zipcode: string = String(request.query.keyword)
    try {
        const theater = await TheaterModel.find({ "location.address.zipcode": zipcode })
        response.status(200).json(theater)
    } catch (error) {
        response.status(404).json({ data: [] })
    }
}

export const searchTheatersByState = async (request: Request, response: Response) => {
    const state: string = String(request.query.keyword)
    try {
        const theater = await TheaterModel.find({ "location.address.state": state })
        response.status(200).json(theater)
    } catch (error) {
        response.status(404).json({ data: [] })
    }
}