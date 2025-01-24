import { create } from "domain";
import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
    content: string;
    createdAt: Date;
}

const PostSchema: Schema<IPost> = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true }
})

export interface IUser extends Document {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
    verifiedcode: string;
    verified: boolean;
    verifiedAt: Date;
    verifiedExpires: Date;
    posts: IPost[];
}

const UserSchema: Schema<IUser> = new Schema({
    firstname: {
        type: String,
        required: [true, "Please provide your first name"],
    },
    lastname: {
        type: String,
        required: [true, "Please provide your last name"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email address"],
        unique: true,
        match: [/.+\@.+\..+/, "Please provide a valid email address"],
    },
    username: {
        type: String,
        required: [true, "Please provide a username"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    verifiedcode: {
        type: String,
        required: [true, "Please provide a verification code"],
    },
    verified: { type: Boolean, default: false },
    verifiedAt: { type: Date },
    verifiedExpires: { type: Date },
    posts: [PostSchema]

})


const Usermodel = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>("User", UserSchema);

export default Usermodel;