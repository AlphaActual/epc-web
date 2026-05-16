import { defineStore } from 'pinia';

export const usePersistedStore = defineStore(
	'persisted',
	() => {
		return {};
	},
	{ persist: true },
);