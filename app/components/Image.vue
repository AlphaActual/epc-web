<script lang="ts" setup>
import type { ImageProps } from '@@/@types/image';

const config = useRuntimeConfig();

const props = defineProps<ImageProps>();

if (props.priority && props.src) {
	useHead({
		link: [
			{
				rel: 'preload',
				as: 'image',
				fetchpriority: 'high',
				href: props.src,
			},
		],
	});
}
</script>

<template>
	<nuxt-img
		v-bind="props"
		:alt="props.alt ?? config.public.appName"
		:loading="props.priority ? 'eager' : (props.loading ?? 'lazy')"
		decoding="async"
		:preload="props.priority || props.loading === 'eager'"
		:fit="props.fit ?? 'contain'"
		:fetchpriority="props.priority ? 'high' : undefined"
	/>
</template>
