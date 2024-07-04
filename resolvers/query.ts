import { GraphQLError } from "graphql";
import { ContactModel, ContactModelType } from "../db/contact.ts";

export const Query = {
  getContacts: async (): Promise<ContactModelType[]> => {
    const contact = await ContactModel.find().exec();
    return contact;
  },

  getContact: async (_: unknown, args: { id: string }): Promise<ContactModelType> => {
    const contact = await ContactModel.findById(args.id);
    
    if (!contact) {
      throw new GraphQLError(`No contact found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }

    return contact;
  },
};
