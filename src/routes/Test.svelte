<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: `query { 
        books {
          title
          author
        }
      }`
			})
		});

		const { data } = await res.json();

		return {
			props: { data }
		};
	};
</script>

<script>
	export let data;
</script>

<h1>Books</h1>

{#each data.books as { title, author }}
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
