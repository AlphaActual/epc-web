# CLAUDE.md — EPC web

## Project overview

Nuxt 4 (Vue 3) SSR app

The browser **never** calls these APIs directly. All external calls go through Nitro server routes in `server/api/` (BFF pattern).

## Development commands

```sh
npm run dev        # dev server (LAN-accessible)
npm run build      # production build
npm run typecheck  # full TS check
rm -rf .nuxt/cache # clear cache when builds behave strangely
```

## State management

- `useMainStore()` — UI state: header type/style, nav open, config, country codes
- `usePersistedStore()` — user-persisted data (localStorage)
- Always `storeToRefs()` when destructuring reactive state from a store


## TODO comments

```ts
// TODO* brief description
```

## Overlay scroll locking

- For overlays, modals, drawers, and full-screen menus controlled by an `open` prop/model, always lock/unlock body scroll with this watch pattern:

```ts
watch(
	() => props.open,
	val => {
		if (val) {
			disableScroll();
		} else {
			enableScroll();
		}
	},
)
```

@rules/vue-components.md
@rules/typescript.md
@rules/server-routes.md
@rules/i18n.md
@rules/form-validation.md
