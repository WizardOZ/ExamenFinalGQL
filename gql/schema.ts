// The GraphQL schema
export const typeDefs = `#graphql
  type Character {
    id : ID!
    name : String!
    status : String
    species : String
    type : String
    gender : String
    origin : String
    location :  object
    image : object
    episode : [url]
    url : String
    created : String
  }

  type Location {
    id : ID!
    name : String
    type : String
    dimension : String
    residents : [url]
    url : String
    created : String
  }

  type Episode {
    id : ID!
    name : String
    air_date : String
    episode : String!
    characters : [url]
    url : String
    created : String
  }

  type Query {

    character(id: ID!): Character
    charactersByIds(ids: [ID!]!): [Character] 
  }

  type Mutation{
    addObject(name : String!): Object!
    deleteObject(id : ID!) : Object!
    updateObject(id : ID!, name : String!) : Object!
  }
`;
