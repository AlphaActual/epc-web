import { defineStore } from 'pinia';

export type Palette = 'terracotta' | 'sky' | 'adriatic' | 'teal' | 'olive';

export const usePersistedStore = defineStore(
	'persisted',
	() => {
		const palette = ref<Palette>('terracotta');
		return { palette };
	},
	{ persist: true },
);