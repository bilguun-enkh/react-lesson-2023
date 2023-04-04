import CommentModel from '../models/comments'
import { Request, Response } from 'express'

export const getComments = async (request: Request, response: Response) => {
    try {
        const comments = await CommentModel.find({}).limit(10)
        response.status(200).json(comments)
    } catch (error) {
        response.status(404).json({ data: [] })
    }
}