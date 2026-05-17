import { defineStore } from 'pinia';

export type Palette =
	| 'marine'
	| 'sky'
	| 'slate'
	| 'lapis'
	| 'denim'
	| 'cobalt'
	| 'stone'
	| 'olive'
	| 'vine'
	| 'sage'
	| 'ink'
	| 'plum';

export const useMainStore = defineStore('main', () => {
	const palette = ref<Palette>('marine');

	function setPalette(value: Palette) {
		palette.value = value;
	}

	return { palette, setPalette };
});
