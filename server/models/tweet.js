const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var tweetSchema = new Schema({
  tweet: String,
  tag: []
},{
  timestamps: true
})

var Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet
