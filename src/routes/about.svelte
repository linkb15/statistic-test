<script>
	import { operationStore, query, setClient } from '@urql/svelte';
	import client from '$lib/graphql/client';

	setClient(client);
	const todos = operationStore(`
    query {
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    ships {
      name
      home_port
      image
    }
  }
}
    `);

	query(todos);
</script>

<h1>Abount</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if $todos.fetching}
	<p>Loading...</p>
{:else if $todos.error}
	<p>Oh no... {$todos.error.message}</p>
{:else}
	<ul>
		{#each $todos.data.launchesPast as todo}
			<li>{todo.mission_name}</li>
		{/each}
	</ul>
{/if}
