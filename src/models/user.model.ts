import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  username: string;
  email: string;
}

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  }
});

export const User = mongoose.model<IUser>("User", UserSchema);
