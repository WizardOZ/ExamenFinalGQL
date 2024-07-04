import { GraphQLError } from "graphql";
import {ContactModel, ContactModelType} from "../db/contact.ts";
import { contactBuilder } from "./contactBuilder.ts";

export const Mutation = {
  addContact: async (
    _: unknown,
    args: { surnameAndNames: string; phoneNum: string }
  ): Promise<ContactModelType> => {
    
    const contact = await contactBuilder(args.surnameAndNames,args.phoneNum);
    const newContact = await ContactModel.create(contact);
    return newContact;
  },
  deleteContact: async (
    _: unknown,
    args: { id: string }
  ): Promise<boolean> => {
    const contact = await ContactModel.findByIdAndDelete(args.id);
    if (!contact) {
      throw new GraphQLError(`No contact found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return true;
  },
  updateContact: async (
    _: unknown,
    args: { id : string, surnameAndNames: string, phoneNum: string}
  ): Promise<ContactModelType> => {

    const contact = await ContactModel.findByIdAndUpdate(
      args.id,
      { surnameAndNames: args.surnameAndNames,
        phoneNum: args.phoneNum,
      },
      { new: true, runValidators: true }
    );
    if (!contact) {
      throw new GraphQLError(`No contact found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return contact;
  },
}
