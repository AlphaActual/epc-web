<script setup lang="ts">
import type { Palette } from '~~/app/stores/persisted';

// Maps each palette to its terracotta-scale overrides (the scale used everywhere in templates).
const paletteVars: Record<Palette, Record<string, string>> = {
	terracotta: {
		'--color-terracotta100': '#7c2d12',
		'--color-terracotta80': '#9a3412',
		'--color-terracotta60': '#b45309',
		'--color-terracotta40': '#ea8a3e',
		'--color-terracotta20': '#fbd9b8',
		'--color-terracotta05': '#fdf2e6',
		'--color-sand05': '#faf7f2',
		'--color-sand10': '#f5f4f0',
		'--color-bg': '#faf7f2',
	},
	sky: {
		'--color-terracotta100': '#0e1518',
		'--color-terracotta80': '#2696b5',
		'--color-terracotta60': '#4fb6d6',
		'--color-terracotta40': '#9bd2e8',
		'--color-terracotta20': '#cce7f3',
		'--color-terracotta05': '#e7f4fa',
		'--color-sand05': '#f6fafc',
		'--color-sand10': '#eaf4f8',
		'--color-bg': '#f6fafc',
	},
	adriatic: {
		'--color-terracotta100': '#0a1422',
		'--color-terracotta80': '#1c5f8e',
		'--color-terracotta60': '#002d4b',
		'--color-terracotta40': '#86b7d9',
		'--color-terracotta20': '#c4dbee',
		'--color-terracotta05': '#e4eef7',
		'--color-sand05': '#f4f8fc',
		'--color-sand10': '#e8f0f8',
		'--color-bg': '#f4f8fc',
	},
	teal: {
		'--color-terracotta100': '#0a1418',
		'--color-terracotta80': '#09506a',
		'--color-terracotta60': '#0d6e8a',
		'--color-terracotta40': '#7cc1d6',
		'--color-terracotta20': '#bde0eb',
		'--color-terracotta05': '#dff0f6',
		'--color-sand05': '#f2f9fb',
		'--color-sand10': '#e6f2f7',
		'--color-bg': '#f2f9fb',
	},
	olive: {
		'--color-terracotta100': '#101813',
		'--color-terracotta80': '#40662b',
		'--color-terracotta60': '#5c8b3b',
		'--color-terracotta40': '#a8c98a',
		'--color-terracotta20': '#c9e0b0',
		'--color-terracotta05': '#eaf3e0',
		'--color-sand05': '#f5faf2',
		'--color-sand10': '#eaf4e4',
		'--color-bg': '#f5faf2',
	},
};

const { palette } = storeToRefs(usePersistedStore());

useHead(() => ({ htmlAttrs: { 'data-palette': palette.value } }));

if (import.meta.client) {
	watchEffect(() => {
		const vars = paletteVars[palette.value];
		for (const [key, value] of Object.entries(vars)) {
			document.documentElement.style.setProperty(key, value);
		}
	});
}
</script>

<template>
	<NuxtLayout />
</template>
