const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Shopping_cart = new Schema(
    {
        userSchema: UserSchema,
        articles: [Article]
    }
)

module.exports = mongoose.model('shopping_cart', Shopping_cart) //La chaine de caractères correspond au nom du champs dans la bdd 