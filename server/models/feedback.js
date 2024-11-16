// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const feedbackSchema = new Schema({
//   name: {
//     type: String,
//     required: true // This is correct
//   },
//   locality: {
//     type: String,
//     required: true // This is correct
//   },
//   problem: {
//     type: String,
//     required: true // This is correct
//   },
//   measures: {
//     type: String,
//     required: true // This is correct
//   },
//   landmark: {
//     type: String,
//     required: true // This is correct
//   }
// });

// module.exports = mongoose.model('Feedback', feedbackSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  locality: {
    type: String,
    required: true
  },
  noStreetLightning: {
    type: Boolean,
    required: true
  },
  solitary: {
    type: Boolean,
    required: true
  },
  noPoliceSurvey: {
    type: Boolean,
    required: true
  },
  roadsNotGood: {
    type: Boolean,
    required: true
  },
  measures: {
    type: String,
    required: true
  },
  landmark: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
