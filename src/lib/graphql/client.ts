import { createClient } from '@urql/svelte';

const client = createClient({
	url: 'http://localhost:3000/graphql'
});

export default client;
