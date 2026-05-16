<script setup lang="ts">
const props = defineProps({
	tone: { type: String as () => 'default' | 'sand' | 'cream' | 'terracotta' | 'olive', default: 'default' },
	spacing: { type: String as () => 'sm' | 'md' | 'lg', default: 'md' },
	id: { type: String, default: null },
});

const toneClasses = {
	default: 'bg-sand05 text-sand100',
	sand: 'bg-sand10 text-sand100',
	cream: 'bg-terracotta05 text-sand100',
	terracotta: 'bg-terracotta60 text-white',
	olive: 'bg-olive60 text-white',
};

const spacingClasses = {
	sm: 'py-12 sm:py-16',
	md: 'py-16 sm:py-20 lg:py-24',
	lg: 'py-20 sm:py-28 lg:py-32',
};

const classes = computed(() => [toneClasses[props.tone], spacingClasses[props.spacing]]);
</script>

<template>
	<section :id="id ?? undefined" :class="classes">
		<slot />
	</section>
</template>
