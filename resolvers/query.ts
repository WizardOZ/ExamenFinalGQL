import { GraphQLError } from "graphql";
import { assertValidExecutionArguments } from "graphql";
  
export const Query = {

  character : async (_: unknown, args: { id: string }): Promise<string> => {
    const res = await assertValidExecutionArguments.get('https://rickandmortyapi.com/api/character/'+ args);
    if (!res) {
      throw new GraphQLError(`No object found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return res;
  },
  charactersByIds : async (_: unknown, args: { ids: [string] }): Promise<Array<string>> => {
    const res = await assertValidExecutionArguments.get('https://rickandmortyapi.com/api/character/'+args);
    if (!res) {
      throw new GraphQLError(`No object found with id ${args.ids}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return res;
  },
  
};
