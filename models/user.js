const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    // In case we need to distinguish types of users in the future
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("UserSchema", userSchema);


get(products)
res.send(products)

            // product id
get(reviews/35234)

axios.get('/234234234/234234')

reviewRouter.get('/:user/:product', (req, res) => {
    const newReview = new Review(req.body)

})


// {
//     text: String,
//     _id: 234234324,
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//     },
//     product: {
//         type: Schema.Types.ObjectId,
//         ref: "Plant"
//     },

// }