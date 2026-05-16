import tailwindcss from '@tailwindcss/vite';
import redirects from './app/redirects';

const env = process.env;

const IS_PRODUCTION = (env.VERCEL_ENV ?? env.APP_ENV) === 'production';

const BASE_APP_URL =
	IS_PRODUCTION && env.NUXT_PUBLIC_SITE_URL ? env.NUXT_PUBLIC_SITE_URL : ((env.VERCEL_URL && 'https://' + env.VERCEL_URL) ?? 'http://localhost:3000');

const BASE_BACK_API_URL = IS_PRODUCTION ? 'https://cms.domain.com/api' : 'https://cms-test.domain.com/api';

const APP_NAME = 'EPC Rovinj';
const APP_EMAIL = IS_PRODUCTION ? 'info@epcrovinj.hr' : 'dev@lloyds-digital.com';

const COOKIEBOT_ID = '';

export default defineNuxtConfig({
	app: {
		head: {
			title: APP_NAME,

			meta: [
				{ name: 'google-site-verification', content: '' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'application-name', content: APP_NAME },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:site_name', content: APP_NAME },
				{ property: 'og:title', content: APP_NAME },
				{ property: 'og:image', content: BASE_APP_URL + '/img/og-image.jpg' },
			],

			link: [{ rel: 'icon', type: 'image/png', href: '/img/favicon.png' }],
		},
	},

	css: ['~/assets/css/tailwind.css'],

	modules: [
		'@nuxt/image',
		'@nuxtjs/i18n',
		'@nuxt/fonts',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
		'nuxt-schema-org',
		'nuxt-csurf',
		'@pinia/nuxt',
		'pinia-plugin-persistedstate/nuxt',
	],

	logLevel: 'silent',

	vite: {
		build: {
			target: 'esnext',
			assetsInlineLimit: 0,
			sourcemap: false,
			reportCompressedSize: false,
		},
		plugins: [tailwindcss()],
	},

	routeRules: {
		'/**': { headers: { 'x-frame-options': 'SAMEORIGIN' } },

		'/api/**': { headers: { 'access-control-allow-origin': BASE_APP_URL } },

		...redirects,
	},

	runtimeConfig: {
		public: {
			isProduction: IS_PRODUCTION,
			appName: APP_NAME,
			appEmail: APP_EMAIL,
			appUrl: BASE_APP_URL,
			appBackApiUrl: BASE_BACK_API_URL,
			cookiebotId: COOKIEBOT_ID,
			recaptchaSiteKey: '', // set empty string ('') to disable recaptcha loading
		},

		defaultCacheMaxAge: IS_PRODUCTION ? 7200 : 1,

		recaptcha: {
			secretKey: '',
		},
	},

	fonts: {
		provider: 'google',
		defaults: {
			weights: [300, 400, 500, 600, 700],
			subsets: ['latin-ext'],
		},
		families: [
			{ name: 'Inter', provider: 'google', weights: [300, 400, 500, 600, 700] },
			{ name: 'Fraunces', provider: 'google', weights: [400, 500, 600, 700], styles: ['normal', 'italic'] },
		],
	},

	image: {
		format: ['avif', 'webp'],
	},

	site: {
		url: BASE_APP_URL,
		name: APP_NAME,
		indexable: IS_PRODUCTION,
	},

	robots: {
		credits: false,
		disallow: ['/img/nofollow/'],
	},

	sitemap: {
		minify: true,
		discoverImages: false,
		discoverVideos: false,
		credits: false,
		xslTips: false,
	},

	piniaPluginPersistedstate: {
		storage: 'localStorage',
	},

	i18n: {
		baseUrl: BASE_APP_URL,
		locales: [
			{
				code: 'hr',
				language: 'hr-HR',
				file: 'hr.json',
			},
			{
				code: 'en',
				language: 'en-US',
				file: 'en.json',
			},
		],
		strategy: 'prefix_except_default',
		detectBrowserLanguage: false,
		defaultLocale: 'hr',
	},

	ignore: IS_PRODUCTION ? ['app/pages/examples/**'] : [],
});
