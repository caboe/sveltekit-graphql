import { gql, ApolloServer } from 'apollo-server-svelte-kit';

const handler = async (req) => {
	const apolloServer = new ApolloServer({
		typeDefs: gql`
			type Book {
				title: String
				author: String
			}
			type Query {
				ping: String!
				name: String
				books: [Book]
			}
		`,
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
