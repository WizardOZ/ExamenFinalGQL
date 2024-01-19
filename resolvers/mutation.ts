import { GraphQLError } from "graphql";
import {ObjectModel, ObjectModelType} from "../db/object.ts";
import mongoose from "mongoose";

export const Mutation = {
  addObject: async (
    _: unknown,
    args: { name: string; breed: string; owner: string }
  ): Promise<ObjectModelType> => {
    const pet = {
      name: args.name,
      breed: args.breed,
      owner: new mongoose.Types.ObjectId(args.owner),
    };
    const newPet = await ObjectModel.create(pet);
    return newPet;
  },
  deleteObject: async (
    _: unknown,
    args: { id: string }
  ): Promise<ObjectModelType> => {
    const pet = await ObjectModel.findByIdAndDelete(args.id);
    if (!pet) {
      throw new GraphQLError(`No pet found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return pet;
  },
  updateObject: async (
    _: unknown,
    args: { id: string; name: string; breed: string; owner: string }
  ): Promise<ObjectModelType> => {
    const pet = await ObjectModel.findByIdAndUpdate(
      args.id,
      { name: args.name, breed: args.breed, owner: args.owner },
      { new: true, runValidators: true }
    );
    if (!pet) {
      throw new GraphQLError(`No pet found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return pet;
  },
}
