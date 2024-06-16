const express = require('express');
const watchRouter = express.Router();

const watchController = require('../controller/watchController');

watchRouter
    .route('/')
    .get(watchController.getAll)

watchRouter
    .route('/create')
    .get(watchController.createWatchGet)
    .post(watchController.createWatchPost)
watchRouter
    .route('/delete/:watchId')
    .get(watchController.deleteWatch)
watchRouter
    .route('/edit/:watchId')
    .get(watchController.formEdit)
    .post(watchController.edit)


module.exports = watchRouter;