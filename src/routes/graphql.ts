import { ApolloServer } from 'apollo-server-svelte-kit';
import typeDefs from '../lib/graphql/schema/server';

const handler = async (req) => {
	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers: {
			Query: {
				ping: () => 'pong',
				name: () => 'Sharath',
				books: () => books
			}
		}
	});
	await apolloServer.start();
	const resp = await apolloServer.handleRequest(req);
	apolloServer.stop();
	return resp;
};

const books = [
	{
		title: 'The Awakening',
		author: 'Kate Chopin'
	},
	{
		title: 'City of Glass',
		author: 'Paul Auster'
	}
];

export const head = handler;
export const get = handler;
export const post = handler;
