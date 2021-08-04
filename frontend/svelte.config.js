/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: {
			server: {
				watch: {
					usePolling: true
				},
				hmr: {
					host: 'localhost',
					port: 15000,
					protocol: 'ws'
				}
			}
		}
	}
};

export default config;
