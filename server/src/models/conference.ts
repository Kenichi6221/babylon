import { model, Document, Schema } from 'mongoose';
import { IUser } from './user';

export interface IConference extends Document {
  id: string;
  title: string;
  date: string;
  location: string;
  quota: number;
  speakerId: IUser['_id'];
  state: string;
  assistants: string[];
}

export interface IConferenceInput {
  title: string;
  date: string;
  location: string;
  quota: number;
  speakerId: string;
  state: string;
}

export interface IAsistantInput {
  conferenceId: string;
  attendantId: string;
}

export interface IMutationResult {
  ok: boolean;
  conference?: IConference | null;
  message?: string;
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
  quota: {
    type: Number,
    required: true,
  },
  speakerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  assistants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

export default model<IConference>('Conference', coferenceSchema);
