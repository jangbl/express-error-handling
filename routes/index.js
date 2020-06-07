const express = require('express');
const tweetController = require('../controller/tweet');

const router = express();
router.post('/tweet', tweetController.tweet);

module.exports = router;
