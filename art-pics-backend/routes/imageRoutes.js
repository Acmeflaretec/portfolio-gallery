const express = require('express');
const multer = require('multer');
const Image = require('../models/Image');
const router = express.Router();
require('dotenv').config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { name, size, year, imageType } = req.body;
    console.log("imageType", imageType);
    const newImage = new Image({
      name,
      size,
      year,
      imageUrl: req.file.path,
      imageType: parseInt(imageType),
    });

    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/images', async (req, res) => {
  try {
    const { imageType } = req.query;
    const imgType = parseInt(imageType);
    console.log("imageType",imgType);
    if (imageType) {
      console.log("sam",Image);

      let filteredImages = await Image.find().sort({ createdAt: -1 });
      const filers = filteredImages.filter(img=>img.imageType === imgType)
      return res.json(filers);
    } else {
      const images = await Image.find().sort({ createdAt: -1 });
      return res.json(images);

    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



router.put('/image/:id', async (req, res) => {
  try {
    const { name, size, year } = req.body;
    const image = await Image.findByIdAndUpdate(req.params.id, { name, size, year }, { new: true });
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.delete('/image/:id', async (req, res) => {
  try {
    await Image.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
