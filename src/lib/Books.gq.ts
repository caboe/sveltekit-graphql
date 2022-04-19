import type * as Types from './graphql/types.gq';

import { writable } from "svelte/store"
import { g } from '$lib/config/g'
import type { GFetchReturnWithErrors, GGetParameters } from '@leveluptuts/g-query'
import gql from 'graphql-tag';
export type BooksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BooksQuery = { __typename?: 'Query', name?: string | null, books?: Array<{ __typename?: 'Book', author?: string | null, title?: string | null } | null> | null };


type SubscribeWrapperArgs<T> = {
	variables?: T,
}

interface CacheFunctionOptions {
	update?: boolean
}


export const BooksDoc = gql`
    query Books {
  name
  books {
    author
    title
  }
}
    `;

export const Books = writable<GFetchReturnWithErrors<BooksQuery>>({
	errors: [],
	gQueryStatus: 'LOADING',
})

// Cached
export async function getBooks({ fetch, variables }: GGetParameters<BooksQueryVariables>, options?: CacheFunctionOptions) {
	const data = await g.fetch<BooksQuery>({
		queries: [{ query: BooksDoc, variables }],
		fetch
	})
	Books.set({ ...data, errors: data?.errors, gQueryStatus: 'LOADED' })
	return data
}

