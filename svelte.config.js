import preprocess from 'svelte-preprocess';

const netlify = require('@sveltejs/adapter-netlify');
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: netlify(),
		vite: {
			resolve: {
				dedupe: ['svelte', 'urql']
			},
			optimizeDeps: {
				exclude: Object.keys(pkg.dependencies || {}).filter((d) => !['graphql'].includes(d)),
				include: ['graphql']
			},
			ssr: {
				// Until https://github.com/vitejs/vite/issues/2579
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};

export default config;
