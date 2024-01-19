import { GraphQLError } from "graphql";
import { ObjectModelType, ObjectModel } from "../db/object.ts";

export const Query = {
  objects: async (): Promise<ObjectModelType[]> => {
    const objects = await ObjectModel.find().exec();
    return objects;
  },

  object: async (_: unknown, args: { id: string }): Promise<ObjectModelType> => {
    const object = await ObjectModel.findById(args.id);
    if (!object) {
      throw new GraphQLError(`No object found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return object;
  },
};
