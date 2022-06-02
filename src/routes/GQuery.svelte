<script context="module">
	import { getBooks, Books } from '$lib/Books.gq';
import { get } from 'svelte/store';

	export async function load({ fetch }) {
		await getBooks({ fetch });
		return {};
	}
</script>

<h1>Books</h1>

{#each $Books.books as { title, author }}
	<div>
		<h4>{title}</h4>
		<cite>-- {author}</cite>
	</div>
{/each}

<style>
	div {
		display: grid;
		border: 1px solid #ddd;
		max-width: 400px;
		padding: 1rem;
		margin-bottom: 1rem;
		background-color: lightgoldenrodyellow;
	}
	h4 {
		margin: 0;
	}
</style>
