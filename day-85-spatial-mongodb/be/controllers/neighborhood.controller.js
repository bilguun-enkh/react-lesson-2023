const Neighborhood = require("../models/neighborhoods")
exports.getNeighborhoods = async (request, response) => {
    try {
        const result = await Neighborhood.find({}).limit(10)
        response.status(200).json({
            data: result
        })
    } catch (error) {
        response.status(500).json({
            error: error
        })
    }
}