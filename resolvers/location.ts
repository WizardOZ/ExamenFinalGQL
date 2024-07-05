import { GraphQLError } from "graphql";
import { LocationModelType } from "../db/location.ts";

export const Character ={
    time: async (parent: LocationModelType): Promise<string> =>{
        try {
            const nombre = await
        
        } catch (err) {
            console.log(err);
            throw new GraphQLError(err);
        }
    },
};