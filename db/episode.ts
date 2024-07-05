import mongoose from "mongoose";
import {Episode} from "../types.ts";

const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
    id : {type: Number },
    name : {type: String},
    type : {type: String},
    dimension : {type: String},
    residents : {type: Array<string>},
    url : {type: String},
    created : {type: String},

});

export type EpisodeModelType = mongoose.Document & Episode;

export const EpisodeModel = mongoose.model<EpisodeModelType>("Episode", EpisodeSchema);


