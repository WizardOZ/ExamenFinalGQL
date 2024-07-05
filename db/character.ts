import mongoose from "mongoose";
import {Character} from "../types.ts";

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    id : {type: Number },
    name : {type: String},
    status: {type: String},
    species: {type: String},
    type : {type: String},
    gender : {type: String},
    origin : {type: String},
    location : {type: Object},
    image : {type: String},
    episode : {type: Array<string>},
    url : {type: String},
    created: {type: String},

});

export type CharacterModelType = mongoose.Document & Character;

export const CharacterModel = mongoose.model<CharacterModelType>("Character", CharacterSchema);


