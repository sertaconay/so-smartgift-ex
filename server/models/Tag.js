const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
});

tagSchema.index({
  name: 'text',
});

tagSchema.statics.getTagsList = function () { // eslint-disable-line func-names
  return this.aggregate([
    { $unwind: '$name' },
    { $group: { _id: '$name', count: { $sum: 1 } } },
    { $limit: 10 },
    { $sort: { count: -1 } },
  ]);
};


module.exports = tagSchema;
