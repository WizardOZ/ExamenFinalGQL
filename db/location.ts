import mongoose from "mongoose";
import {Location} from "../types.ts";

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    id : {type: Number },
    name : {type: String},
    air_date : {type: String},
    episode : {type: String},
    characters : {type: Array<string>},
    url : {type: String},
    created : {type: String},

});

export type LocationModelType = mongoose.Document & Location;

export const LocationModel = mongoose.model<LocationModelType>("Location", LocationSchema);


