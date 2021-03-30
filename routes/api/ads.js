const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Ad = require('../../models/Ads');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

//post api
router.post(
  '/',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newAd = new Ad({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });
      const ad = await newAd.save();

      res.json(ad);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

//get all ads
router.get('/', auth, async (req, res) => {
  try {
    const ads = await Ad.find().sort({ date: -1 });
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//get ads for id
router.get('/:id', auth, async (req, res) => {
  try {
    const ads = await Ad.findById(req.params.id);

    if (!ads) {
      return res.status(404).json({ msg: 'ad not found' });
    }

    res.json(ads);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'ad not found' });
    }
    res.status(500).send('Server error');
  }
});

//delete all ads by id
router.delete('/:id', auth, async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);

    if (!ad) {
      return res.status(404).json({ msg: 'ad not found' });
    }

    if (ad.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'user not auth' });
    }
    await ad.remove();

    res.json({ msg: 'ad removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'ad not found' });
    }
    res.status(500).send('Server error');
  }
});

module.exports = router;
