import mongoose from "mongoose";
import {Contact} from "../types.ts";

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    surnameAndNames : {type : String, required : true},
    phoneNum : {type : String, required : true},
    country : {type : String, required : false},
    time : {type : String, required : false}
});

export type ContactModelType = mongoose.Document & Contact

export const ContactModel = mongoose.model<ContactModelType>("Contact", ContactSchema);


