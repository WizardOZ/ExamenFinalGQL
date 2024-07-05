import { GraphQLError } from "graphql";
import { ObjectModel, ObjectModelType } from "../db/object.ts";

export const Query = {

  object : async (_: unknown, args: { id: string }): Promise<ObjectModelType> => {
    const pet = await ObjectModel.findById(args.id);
    if (!pet) {
      throw new GraphQLError(`No object found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return pet;
  },
  
};
