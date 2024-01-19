import { GraphQLError } from "graphql";
import { ContactModel, ContactModelType } from "../db/contact.ts";
import $ from "npm:jquery";

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

    var number = contact.phoneNum;
    const countryName = await $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/validatephone?number=' + number,
      headers: { 'X-Api-Key': '/GVsqJbBkQgjat2hbbNq/A==4t8R6CfLGubMkAjQ'},
      contentType: 'application/json',
      success: function(result : Response) {
          console.log(result);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
    });

    const countryTime = await $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/worldtime?country=' + countryName,
        headers: { 'X-Api-Key': 'GVsqJbBkQgjat2hbbNq'},
        contentType: 'application/json',
        success: (result: Response) => {
          console.log(result);
        },
        error: (jqXHR) => {
          console.error('Error: ', jqXHR.responseText);
        }
    });

    contact.country = countryName;
    contact.time = countryTime;
    
    return contact;
  },
};
