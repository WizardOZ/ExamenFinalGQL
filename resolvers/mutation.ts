import { GraphQLError } from "graphql";
import { ObjectModel, ObjectModelType } from "../db/object.ts";

export const Mutation = {

  addObject: async (
    _: unknown,
    args: { name: string; }
  ): Promise<ObjectModelType> => {
    const object = {
      name: args.name,
    };
    const newObject = await ObjectModel.create(object);
    return newObject;
  },

  deleteObject: async (
    _: unknown,
    args: { id: string }
  ): Promise<ObjectModelType> => {
    const object = await ObjectModel.findByIdAndDelete(args.id);
    if (!object) {
      throw new GraphQLError(`No object found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return object;
  },
  
  updateObject: async (
    _: unknown,
    args: { id: string; name: string; }
  ): Promise<ObjectModelType> => {
    const object = await ObjectModel.findByIdAndUpdate(
      args.id,
      { name: args.name, },
      { new: true, runValidators: true }
    );
    if (!object) {
      throw new GraphQLError(`No object found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return object;
  },
}
