<script setup lang="ts">
import type { IconName } from '~~/@types/ui';

const props = defineProps({
	name: { type: String as () => IconName, required: true },
	size: { type: [Number, String], default: 20 },
});

const sizeValue = computed(() => (typeof props.size === 'number' ? `${props.size}px` : props.size));
</script>

<template>
	<svg
		v-if="name === 'children'"
		:width="sizeValue"
		:height="sizeValue"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.8"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<circle cx="9" cy="6" r="2.5" />
		<path d="M9 9v6m-3 4v-6h6v6" />
		<circle cx="17" cy="8" r="2" />
		<path d="M17 10v4m-2 4v-4h4v4" />
	</svg>
	<svg v-else-if="name === 'youth'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<circle cx="12" cy="6" r="3" />
		<path d="M5 21v-2a7 7 0 0 1 14 0v2" />
	</svg>
	<svg v-else-if="name === 'home_group'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		<path d="M9 22V12h6v10" />
	</svg>
	<svg v-else-if="name === 'worship'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M9 18V5l12-2v13" />
		<circle cx="6" cy="18" r="3" />
		<circle cx="18" cy="16" r="3" />
	</svg>
	<svg v-else-if="name === 'evangelism'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M3 11l18-8-4 18-4-8z" />
		<path d="M13 13l-2 8" />
	</svg>
	<svg v-else-if="name === 'social'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
	</svg>
	<svg v-else-if="name === 'play'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M8 5v14l11-7z" />
	</svg>
	<svg v-else-if="name === 'arrow_right'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<line x1="5" y1="12" x2="19" y2="12" />
		<polyline points="12 5 19 12 12 19" />
	</svg>
	<svg v-else-if="name === 'menu'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<line x1="4" y1="7" x2="20" y2="7" />
		<line x1="4" y1="12" x2="20" y2="12" />
		<line x1="4" y1="17" x2="20" y2="17" />
	</svg>
	<svg v-else-if="name === 'close'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<line x1="6" y1="6" x2="18" y2="18" />
		<line x1="18" y1="6" x2="6" y2="18" />
	</svg>
	<svg v-else-if="name === 'youtube'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.6 4 12 4 12 4s-7.6 0-9.4.4A3 3 0 0 0 .5 6.5C.1 8.3.1 12 .1 12s0 3.7.4 5.5a3 3 0 0 0 2.1 2.1C4.4 20 12 20 12 20s7.6 0 9.4-.4a3 3 0 0 0 2.1-2.1c.4-1.8.4-5.5.4-5.5s0-3.7-.4-5.5zM9.8 15.5v-7l6.2 3.5z" />
	</svg>
	<svg v-else-if="name === 'facebook'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z" />
	</svg>
	<svg v-else-if="name === 'instagram'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
		<rect x="3" y="3" width="18" height="18" rx="5" />
		<circle cx="12" cy="12" r="4" />
		<circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
	</svg>
	<svg v-else-if="name === 'map_pin'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
		<circle cx="12" cy="10" r="3" />
	</svg>
	<svg v-else-if="name === 'phone'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
	</svg>
	<svg v-else-if="name === 'mail'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
		<polyline points="22,6 12,13 2,6" />
	</svg>
	<svg v-else-if="name === 'clock'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<circle cx="12" cy="12" r="10" />
		<polyline points="12 6 12 12 16 14" />
	</svg>
	<svg v-else-if="name === 'calendar'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<rect x="3" y="4" width="18" height="18" rx="2" />
		<line x1="16" y1="2" x2="16" y2="6" />
		<line x1="8" y1="2" x2="8" y2="6" />
		<line x1="3" y1="10" x2="21" y2="10" />
	</svg>
	<svg v-else-if="name === 'globe'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<circle cx="12" cy="12" r="10" />
		<line x1="2" y1="12" x2="22" y2="12" />
		<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
	</svg>
	<svg v-else-if="name === 'heart'" :width="sizeValue" :height="sizeValue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
	</svg>
</template>
