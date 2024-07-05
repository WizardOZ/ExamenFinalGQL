import { GraphQLError } from "graphql";
import { CharacterModel, CharacterModelType } from "../db/character.ts";

export const Mutation = {

  addObject: async (
    _: unknown,
    args: { name: string; }
  ): Promise<CharacterModelType> => {
    const object = {
      name: args.name,
    };
    const newObject = await CharacterModel.create(object);
    return newObject;
  },

  deleteObject: async (
    _: unknown,
    args: { id: string }
  ): Promise<CharacterModelType> => {
    const object = await CharacterModel.findByIdAndDelete(args.id);
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
  ): Promise<CharacterModelType> => {
    const object = await CharacterModel.findByIdAndUpdate(
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
