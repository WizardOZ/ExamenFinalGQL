import { GraphQLError } from "graphql";
import { CharacterModel,CharacterModelType } from "../db/character.ts";
import { LocationModel,LocationModelType } from "../db/location.ts";
import { EpisodeModel,EpisodeModelType } from "../db/episode.ts";


export const Query = {

  character : async (_: unknown, args: { id: string }): Promise<CharacterModelType> => {
    const pet = await CharacterModel.findById(args.id);
    if (!pet) {
      throw new GraphQLError(`No object found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return pet;
  },
  location : async (_: unknown, args: { id: string }): Promise<LocationModelType> => {
    const pet = await LocationModel.findById(args.id);
    if (!pet) {
      throw new GraphQLError(`No object found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return pet;
  },
  episode : async (_: unknown, args: { id: string }): Promise<EpisodeModelType> => {
    const pet = await EpisodeModel.findById(args.id);
    if (!pet) {
      throw new GraphQLError(`No object found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return pet;
  },
  
};
