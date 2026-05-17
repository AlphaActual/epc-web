<script setup lang="ts">
import type { Palette } from '~~/app/stores/persisted';

const store = usePersistedStore();
const { palette } = storeToRefs(store);

const palettes: { id: Palette; label: string; primary: string; bg: string }[] = [
	{ id: 'terracotta', label: 'Terracotta', primary: '#b45309', bg: '#faf7f2' },
	{ id: 'sky', label: 'Sky', primary: '#4fb6d6', bg: '#fbfaf7' },
	{ id: 'adriatic', label: 'Adriatic', primary: '#2a7fb8', bg: '#f7f8fb' },
	{ id: 'teal', label: 'Teal', primary: '#0d6e8a', bg: '#fafbfc' },
	{ id: 'olive', label: 'Olive', primary: '#5c8b3b', bg: '#fbfaf6' },
];

const open = ref(false);
</script>

<template>
	<div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
			<Transition
				enter-active-class="transition-all duration-200 ease-out"
				enter-from-class="opacity-0 translate-y-2 scale-95"
				enter-to-class="opacity-100 translate-y-0 scale-100"
				leave-active-class="transition-all duration-150 ease-in"
				leave-from-class="opacity-100 translate-y-0 scale-100"
				leave-to-class="opacity-0 translate-y-2 scale-95"
			>
				<div
					v-if="open"
					class="flex flex-col gap-1 rounded-2xl bg-white p-2 shadow-layer-3 ring-1 ring-sand20"
				>
					<button
						v-for="p in palettes"
						:key="p.id"
						class="flex items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-sand10"
						:class="palette === p.id ? 'bg-sand10 font-medium' : ''"
						@click="palette = p.id"
					>
						<span class="flex shrink-0 items-center gap-1">
							<span
								class="size-5 rounded-full ring-2 ring-offset-1 transition-all"
								:style="{
									background: p.primary,
									'--tw-ring-color': palette === p.id ? p.primary : 'transparent',
								}"
							/>
							<span
								class="size-3 rounded-full ring-1 ring-sand20"
								:style="{ background: p.bg }"
							/>
						</span>
						<span class="text-sand80">{{ p.label }}</span>
						<span
							v-if="palette === p.id"
							class="ml-auto size-2 rounded-full"
							:style="{ background: p.primary }"
						/>
					</button>
				</div>
			</Transition>

			<button
				class="flex size-10 items-center justify-center rounded-full shadow-layer-2 ring-2 ring-white transition-transform active:scale-95"
				:style="{ background: palettes.find(p => p.id === palette)?.primary }"
				:aria-label="open ? 'Close palette switcher' : 'Open palette switcher'"
				:aria-expanded="open"
				@click="open = !open"
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<circle cx="13.5" cy="6.5" r="2.5" />
					<circle cx="17.5" cy="13.5" r="2.5" />
					<circle cx="8.5" cy="15" r="2.5" />
					<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.97-4.48-9-10-9z" />
				</svg>
			</button>
	</div>
</template>
