import { gql } from 'apollo-server-svelte-kit'

export default gql`
	type Query {
		ping: String!
		name: String
		books: [Book]
	}
`;
