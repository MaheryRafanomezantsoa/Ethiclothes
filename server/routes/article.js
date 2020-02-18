const express = require('express')
const ArticleCtrl = require('../controllers/ethi-controller')
const router = express.Router()

router.post('/article', ArticleCtrl.createArticle)
router.put('/article/:id', ArticleCtrl.updateArticle)
router.delete('/article/:id', ArticleCtrl.deleteArticle)
router.get('/article/:id', ArticleCtrl.getArticleById)
router.get('/articles', ArticleCtrl.getArticles)
router.get('/findarticles/:article', ArticleCtrl.getArticleByTitle)

module.exports = router