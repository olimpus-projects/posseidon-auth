import mongoose, { Schema } from "mongoose";
import { UserToken } from "../UserToken";
import { db } from "@providers/mongoDB/useDb";



export type IUserTokenSchema = UserToken & Document;

const UserTokenSchema: Schema = new Schema(
  {
    userId: { type: String },
    token: { type: String },
  },
  {
    collection: 'userToken',
  },
);

UserTokenSchema.set('toJSON', {
  transform(__: any, ret: any, _: any) {
    ret.id = ret._id;
    delete ret.__v;
  },
});

const modelUsersToken = db.model<IUserTokenSchema>('userTokens', UserTokenSchema);

export default modelUsersToken;
