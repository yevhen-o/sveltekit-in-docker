const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/components/__layout.svelte"),
	() => import("../../../src/routes/components/index.svelte"),
	() => import("../../../src/routes/components/form-elements.svelte"),
	() => import("../../../src/routes/components/headings.svelte"),
	() => import("../../../src/routes/components/buttons.svelte"),
	() => import("../../../src/routes/about.svelte"),
	() => import("../../../src/routes/todos/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/components/index.svelte
	[/^\/components\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/components/form-elements.svelte
	[/^\/components\/form-elements\/?$/, [c[0], c[3], c[5]], [c[1]]],

	// src/routes/components/headings.svelte
	[/^\/components\/headings\/?$/, [c[0], c[3], c[6]], [c[1]]],

	// src/routes/components/buttons.svelte
	[/^\/components\/buttons\/?$/, [c[0], c[3], c[7]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/todos/index.json.js
	[/^\/todos\.json$/],

	// src/routes/todos/index.svelte
	[/^\/todos\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/todos/[uid].json.js
	[/^\/todos\/([^/]+?)\.json$/]
];

export const fallback = [c[0](), c[1]()];