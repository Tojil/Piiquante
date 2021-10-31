const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');

router.post('/', auth, sauceCtrl.createSauces);

router.put('/:id', auth, sauceCtrl.modifySauce);

router.put('/:id', auth, sauceCtrl.deleteSauce);

router.get('/:id', auth, sauceCtrl.getOneSauce);

router.get('/', auth, sauceCtrl.getAllSauces);

router.post('/:id/like', auth, sauceCtrl.likeOrNot);

  module.exports = router;
