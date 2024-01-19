// The GraphQL schema
export const typeDefs = `#graphql
  type Contact {
    surnameAndNames : String!
    phoneNum : String!
    country : String
    time : String
  }

  type Query {
    getContacts: [Contact!]!
    getContact(id: ID!): Contact!
  }

  type Mutation {
    addContact(surnameAndNames: String!, phoneNum: String!): Contact!
    deleteContact(id: ID!): Boolean!
    updateContact(id : String!, surnameAndNames: String!, phoneNum: String!): Contact!
  }
`;
