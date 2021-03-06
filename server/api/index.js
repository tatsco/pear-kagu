const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/newsapi', require('./newsapi'))
router.use('/meetups', require('./meetups'))
router.use('/youtube', require('./youtube'))
router.use('/interests', require('./interests'))
router.use('/content', require('./content'))
router.use('/search', require('./search'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
