import { Schema, model, Document } from 'mongoose';
import uniquevalidator from 'mongoose-unique-validator';
import bcrypt from 'bcrypt';

const allowedRoles = {
  values: ['SPEAKER', 'ATTENDANT'],
  message: 'is not a valid role',
};

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  website: string;
  bio: string;
  password: string;
  role: string;
}

export interface IToken {
  role: string;
  name: string;
  email: string;
  website: string;
  bio: string;
  token: string;
  id: string;
  password: string;
}

export interface IUserInput {
  name: string;
  email: string;
  website: string;
  bio: string;
  password: string;
  role: string;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  bio: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  role: {
    type: String,
    enum: allowedRoles,
  },
});

userSchema.plugin(uniquevalidator, { message: 'must be uniqe' });

userSchema.pre<IUser>('save', function (next) {
  if (!this.isDirectModified('password')) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 10);

  next();
});

export default model<IUser>('User', userSchema);
