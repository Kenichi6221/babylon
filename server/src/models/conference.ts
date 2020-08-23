import { model, Document, Schema } from "mongoose";
import { IUser } from "./user";

export interface IConference extends Document {
  id: string;
  title: string;
  date: string;
  location: string;
  quota: number;
  userId: IUser["_id"];
  state: string;
}

export interface IConferenceInput {
  title: string;
  date: string;
  location: string;
  quota: number;
  userId: string;
  state: string;
}

const coferenceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  state: {
    type: String,
  },
  spieakerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  assistants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export default model<IConference>("Conference", coferenceSchema);
