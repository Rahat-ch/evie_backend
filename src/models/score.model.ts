import mongoose, { Schema, Document } from 'mongoose'
import { IUser } from './user.model'

export interface IScore extends Document {
  score: number;
  url: string;
  dateVisited: string;
  user: IUser['_id']
}

const ScoreSchema = new Schema({
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
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

export const Score = mongoose.model("Score", ScoreSchema);