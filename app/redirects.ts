import type { NitroConfig } from 'nitropack';

export default {
	// '/old-page/**': { redirect: { to: '/new-page', statusCode: 301 } }
} as NitroConfig['routeRules'];
