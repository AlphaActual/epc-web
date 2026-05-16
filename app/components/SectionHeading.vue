<script setup lang="ts">
const props = defineProps({
	eyebrow: { type: String, default: null },
	title: { type: String, required: true },
	subtitle: { type: String, default: null },
	align: { type: String as () => 'left' | 'center', default: 'left' },
	tone: { type: String as () => 'dark' | 'light', default: 'dark' },
});

const alignClasses = computed(() => (props.align === 'center' ? 'text-center mx-auto' : 'text-left'));
const eyebrowColor = computed(() => (props.tone === 'light' ? 'text-terracotta20' : 'text-terracotta60'));
const titleColor = computed(() => (props.tone === 'light' ? 'text-white' : 'text-sand100'));
const subtitleColor = computed(() => (props.tone === 'light' ? 'text-sand20' : 'text-sand60'));
</script>

<template>
	<div :class="['max-w-3xl', alignClasses]">
		<p v-if="eyebrow" :class="['text-sm font-semibold uppercase tracking-wider mb-3', eyebrowColor]">
			{{ eyebrow }}
		</p>
		<h2 :class="['text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight', titleColor]">
			{{ title }}
		</h2>
		<p v-if="subtitle" :class="['mt-4 text-lg leading-relaxed', subtitleColor]">
			{{ subtitle }}
		</p>
	</div>
</template>
