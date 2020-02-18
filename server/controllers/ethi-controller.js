const Article = require('../models/article-model')

createArticle = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a article',
        })
    }

    const article = new Article(body)

    if (!article) {
        return res.status(400).json({ success: false, error: err })
    }

    article
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: article._id,
                message: 'Article created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Article not created!',
            })
        })
}

updateArticle = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Article.findOne({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Article not found!',
            })
        }
        article.name = body.name
        article.description = body.description
        article.price = body.price
        article.product_type = body.product_type
        article.size = body.size
        article.img = body.img
        article.inCart = body.inCart
        article.count = body.count
        article.total = body.total
        article
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: article._id,
                    message: 'Article updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Article not updated!',
                })
            })
    })
}

deleteArticle = async (req, res) => {
    await Article.findOneAndDelete({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!article) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }

        return res.status(200).json({ success: true, data: article })
    }).catch(err => console.log(err))
}

getArticleById = async (req, res) => {
    await Article.findOne({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!article) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }
        return res.status(200).json({ success: true, data: article })
    }).catch(err => console.log(err))
}

getArticles = async (req, res) => {
    await Article.find({}, (err, articles) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!articles.length) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }
        return res.status(200).json({ success: true, data: articles })
    }).catch(err => console.log(err))
}

filterFunction = (userInput) =>{
    var filteredNames = names.filter((x)=>{ 
        return x.includes(userInput)
    } )  
    return filteredNames
 }

// result = (userInput)=>{
//     let tabResult = Article.filter((elA)=>{
//         return elA.includes(userInput)
//     })
//     console.log(tabResult)
//     return tabResult
// };
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

getArticleByTitle = async (req, res) => {
    // console.log(result)  
    // await result.map()
    if (req.params.article) {
        const regex = new RegExp(escapeRegex(req.params.article), 'gi');
        await Article.find({title:regex}, (err, article) => {
            // .find({}, (err, article) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
            if (!article) {
                return res
                console.log(Article)
                    .status(404)
                    .json({ success: false, error: `Article not found` })
            }
            return res.status(200).json({ success: true, data: article })
        }).catch(err => console.log(err))
    }
}

module.exports = {
    createArticle,
    updateArticle,
    deleteArticle,
    getArticles,
    getArticleById,
    getArticleByTitle
}