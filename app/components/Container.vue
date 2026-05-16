<script setup lang="ts">
const props = defineProps({
	size: { type: String as () => 'sm' | 'md' | 'lg' | 'xl', default: 'lg' },
	as: { type: String, default: 'div' },
});

const sizeClasses = {
	sm: 'max-w-3xl',
	md: 'max-w-5xl',
	lg: 'max-w-6xl',
	xl: 'max-w-7xl',
};

const classes = computed(() => [sizeClasses[props.size], 'mx-auto px-5 sm:px-6 lg:px-8 w-full']);
</script>

<template>
	<component :is="as" :class="classes">
		<slot />
	</component>
</template>
