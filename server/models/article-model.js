const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema(
    {
        title: { type: String, required: true, trim: true },
        info: { type: String, required: true, trim: true },
        price: { type: Number, required: true, trim: true },
        product_type: { type: String, required: true, trim: true },
        size: { type: String, required: true, trim: true },
        img: { type: String, required: true },
        inCart: {type: Boolean, default: false },
        count: {type: Number, default: 0},
        total: {type: Number, default: 0}
    },
    { timestamps: true },
)

module.exports = mongoose.model('articles', Article) //La chaine de caractères correspond au nom du champs dans la bdd

module.exports.Article = Article