import { GraphQLError } from "graphql";
import { CharacterModelType } from "../db/character.ts";

export const Character ={
    time: async (parent: CharacterModelType): Promise<string> =>{
        try {
            const nombre = await
        
        } catch (err) {
            console.log(err);
            throw new GraphQLError(err);
        }
    },
};