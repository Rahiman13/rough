const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  duration: {
    type: Number,
  },
  author: {
    type: String,
  },
  authorImage: {
    type: String,
     required: false,
  },
  authorId:{
    type: mongoose.Schema.Types.ObjectId,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
    required: false,
  },
  category: {
    type: String,
  },
  curriculum: {
    type: Map,
    of: [String],
  },
}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
