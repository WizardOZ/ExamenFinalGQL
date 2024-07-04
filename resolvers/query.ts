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

    const number = contact.phoneNum;
    const apiKey = '/GVsqJbBkQgjat2hbbNq/A==4t8R6CfLGubMkAjQ';
    let url = `https://api.api-ninjas.com/v1/validatephone?number=${number}`;

    const headers = new Headers({
      'X-Api-Key': apiKey
    });

    fetch(url, { headers }).then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`Error: ${response.status} ${text}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Phone validation Request failed:', error.message);
      });

    
    const city = 'london';
    url = `https://api.api-ninjas.com/v1/city?name=${city}`;

    fetch(url, { headers }).then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`Error: ${response.status} ${text}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        contact.country = data.name;
      })
      .catch(error => {
        console.error('Country Request failed:', error.message);
      });

      url = `https://api.api-ninjas.com/v1/worldtime?city=${city}`;

      fetch(url, { headers }).then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`Error: ${response.status} ${text}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        contact.time = data.datetime;
      })
      .catch(error => {
        console.error('Country Request failed:', error.message);
      });

    return contact;
  },
};
