import { GraphQLServer } from 'graphql-yoga';

import { typeDefs } from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

// TODO: Check to "transpile" Graphql File

const server = new GraphQLServer({
	resolvers,
	typeDefs,
});

export default server;
