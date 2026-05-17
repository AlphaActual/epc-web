<script setup lang="ts">
import type { Palette } from '~~/app/stores/main';

const store = useMainStore();
const { palette } = storeToRefs(store);

type PaletteSwatch = {
	id: Palette;
	label: string;
	primary: string;
	bg: string;
	deep: string;
};

const palettes: PaletteSwatch[] = [
	{ id: 'marine', label: 'Marine', primary: '#1d4b82', bg: '#f3f0e6', deep: '#081a30' },
	{ id: 'sky', label: 'Sky', primary: '#2e8eb5', bg: '#f3f7f8', deep: '#0c2d3c' },
	{ id: 'slate', label: 'Slate', primary: '#465e7a', bg: '#f1f0ed', deep: '#14202e' },
	{ id: 'lapis', label: 'Lapis', primary: '#2b4399', bg: '#f3eee5', deep: '#0a1854' },
	{ id: 'denim', label: 'Denim', primary: '#5a7ba6', bg: '#ededea', deep: '#1a2a3d' },
	{ id: 'cobalt', label: 'Cobalt', primary: '#2052c9', bg: '#f5f6fa', deep: '#0a1e4d' },
	{ id: 'stone', label: 'Stone', primary: '#a83520', bg: '#faf5e6', deep: '#4a1407' },
	{ id: 'olive', label: 'Olive', primary: '#556b2f', bg: '#f3f4e5', deep: '#1a2010' },
	{ id: 'vine', label: 'Vine', primary: '#872446', bg: '#f5ece8', deep: '#2a0a14' },
	{ id: 'sage', label: 'Sage', primary: '#5b7860', bg: '#f1efe7', deep: '#1f2620' },
	{ id: 'ink', label: 'Ink', primary: '#2d2d2d', bg: '#fafaf7', deep: '#050505' },
	{ id: 'plum', label: 'Plum', primary: '#5e2557', bg: '#f2ecee', deep: '#1f0a1d' },
];

const blueIds: Palette[] = ['marine', 'sky', 'slate', 'lapis', 'denim', 'cobalt'];
const bluePalettes = palettes.filter(p => blueIds.includes(p.id));
const otherPalettes = palettes.filter(p => !blueIds.includes(p.id));

const open = ref(false);

const current = computed(() => palettes.find(p => p.id === palette.value) ?? palettes[0]);

function select(id: Palette) {
	store.setPalette(id);
}
</script>

<template>
	<div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
		<Transition
			enter-active-class="transition-all duration-200 ease-out"
			enter-from-class="opacity-0 translate-y-2"
			enter-to-class="opacity-100 translate-y-0"
			leave-active-class="transition-all duration-150 ease-in"
			leave-from-class="opacity-100 translate-y-0"
			leave-to-class="opacity-0 translate-y-2"
		>
			<div
				v-if="open"
				class="w-80 border border-sand20 bg-sand00 shadow-layer-3 sm:w-96"
			>
				<div class="flex items-center justify-between border-b border-sand20 px-5 py-4">
					<div class="flex items-center gap-3 eyebrow text-sand60">
						<span class="block size-1.5 rounded-full bg-terracotta60 animate-pulse" aria-hidden="true" />
						<span>PALETTE / {{ current?.label.toUpperCase() }}</span>
					</div>
					<button
						type="button"
						class="text-sand60 transition-colors hover:text-sand100"
						:aria-label="'Close palette switcher'"
						@click="open = false"
					>
						<Icon name="close" :size="14" />
					</button>
				</div>

				<div class="max-h-[60vh] overflow-y-auto">
					<div class="border-b border-sand20 bg-sand05 px-5 py-2 eyebrow text-sand60">
						BLUE FAMILY · 6
					</div>
					<div class="grid grid-cols-2 gap-px bg-sand20">
						<button
							v-for="p in bluePalettes"
							:key="p.id"
							type="button"
							:class="[
								'group flex items-stretch gap-3 bg-sand00 p-3 text-left transition-colors hover:bg-sand10',
								palette === p.id ? 'ring-1 ring-inset ring-terracotta60' : '',
							]"
							@click="select(p.id)"
						>
							<div class="flex w-12 shrink-0 flex-col overflow-hidden border border-sand20">
								<span class="block h-5" :style="{ background: p.deep }" />
								<span class="block h-5" :style="{ background: p.primary }" />
								<span class="block h-5" :style="{ background: p.bg }" />
							</div>
							<div class="flex flex-col justify-center">
								<span class="font-display text-base leading-tight text-sand100">{{ p.label }}</span>
								<span class="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-sand60">{{ p.primary }}</span>
							</div>
							<span
								v-if="palette === p.id"
								class="ml-auto self-center font-mono text-[10px] uppercase tracking-wider text-terracotta60"
							>
								ACTIVE
							</span>
						</button>
					</div>

					<div class="border-y border-sand20 bg-sand05 px-5 py-2 eyebrow text-sand60">
						OTHER · {{ otherPalettes.length }}
					</div>
					<div class="grid grid-cols-2 gap-px bg-sand20">
						<button
							v-for="p in otherPalettes"
							:key="p.id"
							type="button"
							:class="[
								'group flex items-stretch gap-3 bg-sand00 p-3 text-left transition-colors hover:bg-sand10',
								palette === p.id ? 'ring-1 ring-inset ring-terracotta60' : '',
							]"
							@click="select(p.id)"
						>
							<div class="flex w-12 shrink-0 flex-col overflow-hidden border border-sand20">
								<span class="block h-5" :style="{ background: p.deep }" />
								<span class="block h-5" :style="{ background: p.primary }" />
								<span class="block h-5" :style="{ background: p.bg }" />
							</div>
							<div class="flex flex-col justify-center">
								<span class="font-display text-base leading-tight text-sand100">{{ p.label }}</span>
								<span class="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-sand60">{{ p.primary }}</span>
							</div>
							<span
								v-if="palette === p.id"
								class="ml-auto self-center font-mono text-[10px] uppercase tracking-wider text-terracotta60"
							>
								ACTIVE
							</span>
						</button>
					</div>
				</div>

				<div class="border-t border-sand20 px-5 py-3 font-mono text-[10px] uppercase tracking-wider text-sand60">
					Resets on refresh — pick one to settle.
				</div>
			</div>
		</Transition>

		<button
			type="button"
			class="group inline-flex items-center gap-2 border border-sand20 bg-sand00 px-3 py-2 shadow-layer-2 transition-colors hover:bg-sand10"
			:aria-label="open ? 'Close palette switcher' : 'Open palette switcher'"
			:aria-expanded="open"
			@click="open = !open"
		>
			<span class="flex overflow-hidden border border-sand20">
				<span class="block size-4" :style="{ background: current?.deep }" />
				<span class="block size-4" :style="{ background: current?.primary }" />
				<span class="block size-4" :style="{ background: current?.bg }" />
			</span>
			<span class="font-mono text-[10px] uppercase tracking-[0.18em] text-sand80">
				{{ current?.label }}
			</span>
		</button>
	</div>
</template>
