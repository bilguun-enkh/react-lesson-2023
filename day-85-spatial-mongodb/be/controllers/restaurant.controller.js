const { Restaurant } = require("../models/restaurants")

exports.getRestaurants = async (request, response) => {
    try {
        const result = await Restaurant.find({}).limit(10)
        response.status(200).json({
            data: result
        })
    } catch (error) {
        response.status(500).json({
            error: error
        })
    }
}