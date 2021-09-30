import { createClient } from '@urql/svelte';

const client = createClient({
	url: 'https://api.spacex.land/graphql/'
});

export default client;
