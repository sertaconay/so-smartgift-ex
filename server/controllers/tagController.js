const mongoose = require('mongoose');
const tagSchema = require('../models/Tag');

const Tag = mongoose.model('Tag', tagSchema);

exports.addTag = async (req, res) => {
  const tag = await (new Tag(req.body)).save();
  res.redirect(`/tag/${tag.name}`);
};

exports.getTag = async (req, res) => {
  const tag = await Tag
    .find({
      $text: {
        $search: req.query.q,
      },
    });
  res.json(tag);
};

exports.getTags = async (req, res) => {
  const tags = await Tag.getTagsList();
  res.status(200).json(tags);
};
