import mongoose from 'mongoose'

const ScoreSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  dateVisited: {
    type: Date,
    default: Date.now,
    required: true
  }
});

export const Score = mongoose.model("Score", ScoreSchema);