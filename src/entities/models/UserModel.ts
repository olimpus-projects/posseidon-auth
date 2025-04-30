import { Schema, Document } from 'mongoose';
import { User } from '../User';
import { db } from '@providers/mongoDB/useDb';

export type IUserSchema = User & Document;

const UserSchema: Schema = new Schema(
  {
    _id: {type: String },
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    collection: 'user',
  },
);

UserSchema.set('toJSON', {
  transform(__: any, ret: any, _: any) {
    ret.id = ret._id;
    delete ret.__v;
  },
});

const modelUsers = db.model<IUserSchema>('users', UserSchema);

export default modelUsers;
