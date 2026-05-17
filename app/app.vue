<script setup lang="ts">
import type { Palette } from '~~/app/stores/main';

// Each palette overrides the full primary brand scale (terracotta token names) AND the light end
// of the sand scale (sand00, sand05, sand10, sand20, bg). Dark text tones (sand40/60/80/100) stay
// constant for readability. Cards (bg-sand00), borders (border-sand20), and section bgs
// (bg-sand05 / bg-sand10) shift with the palette automatically.
const paletteVars: Record<Palette, Record<string, string>> = {
	marine: {
		'--color-terracotta100': '#081a30',
		'--color-terracotta80': '#112c4f',
		'--color-terracotta60': '#1d4b82',
		'--color-terracotta40': '#6491c4',
		'--color-terracotta20': '#c0d6ec',
		'--color-terracotta05': '#e6eef7',
		'--color-sand00': '#f9f7ee',
		'--color-sand05': '#f3f0e6',
		'--color-sand10': '#eae6d8',
		'--color-sand20': '#d8d3c1',
		'--color-sand40': '#a59a8e',
		'--color-bg': '#f3f0e6',
	},
	sky: {
		'--color-terracotta100': '#0c2d3c',
		'--color-terracotta80': '#1c5670',
		'--color-terracotta60': '#2e8eb5',
		'--color-terracotta40': '#79bcd6',
		'--color-terracotta20': '#c2dfec',
		'--color-terracotta05': '#e6f2f8',
		'--color-sand00': '#fcfdfc',
		'--color-sand05': '#f3f7f8',
		'--color-sand10': '#e7eff2',
		'--color-sand20': '#cfd9dd',
		'--color-sand40': '#97a4a9',
		'--color-bg': '#f3f7f8',
	},
	slate: {
		'--color-terracotta100': '#14202e',
		'--color-terracotta80': '#2b3c52',
		'--color-terracotta60': '#465e7a',
		'--color-terracotta40': '#7c91a8',
		'--color-terracotta20': '#c0c9d5',
		'--color-terracotta05': '#e2e6ec',
		'--color-sand00': '#fcfcfb',
		'--color-sand05': '#f1f0ed',
		'--color-sand10': '#e5e4e0',
		'--color-sand20': '#cdcbc6',
		'--color-sand40': '#999795',
		'--color-bg': '#f1f0ed',
	},
	lapis: {
		'--color-terracotta100': '#0a1854',
		'--color-terracotta80': '#182f8c',
		'--color-terracotta60': '#2b4399',
		'--color-terracotta40': '#7283c8',
		'--color-terracotta20': '#c2c9e2',
		'--color-terracotta05': '#e3e6f1',
		'--color-sand00': '#fbf9f5',
		'--color-sand05': '#f3eee5',
		'--color-sand10': '#e8e0d2',
		'--color-sand20': '#d3c8b6',
		'--color-sand40': '#a59989',
		'--color-bg': '#f3eee5',
	},
	denim: {
		'--color-terracotta100': '#1a2a3d',
		'--color-terracotta80': '#344962',
		'--color-terracotta60': '#5a7ba6',
		'--color-terracotta40': '#8da6c4',
		'--color-terracotta20': '#c8d4e3',
		'--color-terracotta05': '#e6ecf2',
		'--color-sand00': '#fafaf8',
		'--color-sand05': '#ededea',
		'--color-sand10': '#e1e1dd',
		'--color-sand20': '#c8c8c4',
		'--color-sand40': '#989894',
		'--color-bg': '#ededea',
	},
	stone: {
		'--color-terracotta100': '#4a1407',
		'--color-terracotta80': '#7a2515',
		'--color-terracotta60': '#a83520',
		'--color-terracotta40': '#d97757',
		'--color-terracotta20': '#f1c9b0',
		'--color-terracotta05': '#f8ece0',
		'--color-sand00': '#fefcf3',
		'--color-sand05': '#faf5e6',
		'--color-sand10': '#f0e8d0',
		'--color-sand20': '#dccfae',
		'--color-sand40': '#b3a48f',
		'--color-bg': '#faf5e6',
	},
	olive: {
		'--color-terracotta100': '#1a2010',
		'--color-terracotta80': '#354523',
		'--color-terracotta60': '#556b2f',
		'--color-terracotta40': '#8aa55a',
		'--color-terracotta20': '#c8d5a0',
		'--color-terracotta05': '#ebefd6',
		'--color-sand00': '#fafbf2',
		'--color-sand05': '#f3f4e5',
		'--color-sand10': '#eaecd5',
		'--color-sand20': '#d2d6bb',
		'--color-sand40': '#9da596',
		'--color-bg': '#f3f4e5',
	},
	vine: {
		'--color-terracotta100': '#2a0a14',
		'--color-terracotta80': '#4f1a2a',
		'--color-terracotta60': '#872446',
		'--color-terracotta40': '#c47591',
		'--color-terracotta20': '#ebc4ce',
		'--color-terracotta05': '#f7e3e9',
		'--color-sand00': '#fbf6f3',
		'--color-sand05': '#f5ece8',
		'--color-sand10': '#ecdfd9',
		'--color-sand20': '#d6c1b8',
		'--color-sand40': '#b29c9c',
		'--color-bg': '#f5ece8',
	},
	sage: {
		'--color-terracotta100': '#1f2620',
		'--color-terracotta80': '#3a4a3e',
		'--color-terracotta60': '#5b7860',
		'--color-terracotta40': '#9bb4a0',
		'--color-terracotta20': '#cad8cc',
		'--color-terracotta05': '#e6eee7',
		'--color-sand00': '#faf8f3',
		'--color-sand05': '#f1efe7',
		'--color-sand10': '#e7e3d8',
		'--color-sand20': '#cdc8b9',
		'--color-sand40': '#a0a298',
		'--color-bg': '#f1efe7',
	},
	ink: {
		'--color-terracotta100': '#050505',
		'--color-terracotta80': '#1a1a1a',
		'--color-terracotta60': '#2d2d2d',
		'--color-terracotta40': '#6a6a6a',
		'--color-terracotta20': '#c8c8c8',
		'--color-terracotta05': '#ededed',
		'--color-sand00': '#ffffff',
		'--color-sand05': '#fafaf7',
		'--color-sand10': '#f1f1ec',
		'--color-sand20': '#d8d8d3',
		'--color-sand40': '#9c9c9c',
		'--color-bg': '#fafaf7',
	},
	cobalt: {
		'--color-terracotta100': '#0a1e4d',
		'--color-terracotta80': '#16357f',
		'--color-terracotta60': '#2052c9',
		'--color-terracotta40': '#6987dc',
		'--color-terracotta20': '#b6c5f0',
		'--color-terracotta05': '#dde4f8',
		'--color-sand00': '#ffffff',
		'--color-sand05': '#f5f6fa',
		'--color-sand10': '#e9ebf2',
		'--color-sand20': '#d1d4dc',
		'--color-sand40': '#969aa3',
		'--color-bg': '#f5f6fa',
	},
	plum: {
		'--color-terracotta100': '#1f0a1d',
		'--color-terracotta80': '#3e1539',
		'--color-terracotta60': '#5e2557',
		'--color-terracotta40': '#95709c',
		'--color-terracotta20': '#d5c2dc',
		'--color-terracotta05': '#ece2ee',
		'--color-sand00': '#faf6f5',
		'--color-sand05': '#f2ecee',
		'--color-sand10': '#e7dde0',
		'--color-sand20': '#cfbfc4',
		'--color-sand40': '#a597a0',
		'--color-bg': '#f2ecee',
	},
};

const { palette } = storeToRefs(useMainStore());

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
