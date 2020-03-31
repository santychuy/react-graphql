export const typeDefs = `
    type Query {
        findUser(id: ID!): User
        getUsers: [User]!
    }

    type Mutation {
        createUser(username: String!, fullname: String!, email: String!): User!
        deleteUser(id: ID!): User
    }

    type User {
        _id: ID!
        username: String!
        fullname: String!
        email: String!
    }
`;
