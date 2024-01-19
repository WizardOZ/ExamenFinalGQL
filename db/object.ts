import mongoose from "mongoose";
import {Object} from "../types.ts";

const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
  
});

export type ObjectModelType = mongoose.Document & Object


export const ObjectModel = mongoose.model<ObjectModelType>("Object", ObjectSchema);


