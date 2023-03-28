const ShippingAddress = require("../models/ShippingAddress")
const User = require("../models/User")
const Product = require("../models/Product")

// exports.createTransaction = async (request, response) => {
//     try {
//         const result = await ShippingAddress.find({})
//         response.status(200).json({
//             data: []
//         })
//     } catch (error) {
//         response.status(500).json({
//             error: error
//         })
//     }
// }

exports.createTransaction = async (req, res) => {
    try {
        const session = await User.create(req.body.user, { session })
        session.startTransaction()
        const product = await Product.updateOne({
            _id: "64224da77e41730f37d20c34"
        }, {
            $inc: { quantity: +2 }
        },
            { session }
        )
        const user = await User.create(req.body.user, { session })
        const shippingAddress = await ShippingAddress.create(
            req.body.shippingAddress,
            { session }
        )
        await session.commitTransaction()
        session.endSession()
        res.json({ status: true, user, shippingAddress })
    } catch (error) {
        res.json({ status: false, error })
    }
}

exports.createTransactionWithOutSession = async (req, res) => {
    try {
        const product = await Product.updateOne({
            _id: "64224da77e41730f37d20c34"
        }, {
            $inc: { quantity: -2 }
        }
        )
        const user = await User.create(req.body.user)

        const shippingAddress = await ShippingAddress.create({
            address: req.body.shippingAddress,
            user_id: user._id

        }
        )
        res.json({ status: true, user, shippingAddress, product })
    } catch (error) {
        res.json({ status: false, error })
    }
}