import { gql } from 'apollo-server-svelte-kit'

export default gql`
	type Book {
		title: String
		author: String
	}
`;
