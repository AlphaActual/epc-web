<script setup lang="ts">
const props = defineProps({
	eyebrow: { type: String, default: null },
	title: { type: String, required: true },
	subtitle: { type: String, default: null },
	align: { type: String as () => 'left' | 'center', default: 'left' },
	tone: { type: String as () => 'dark' | 'light', default: 'dark' },
});

const alignClasses = computed(() => (props.align === 'center' ? 'text-center mx-auto' : 'text-left'));
const eyebrowColor = computed(() => (props.tone === 'light' ? 'text-terracotta20' : 'text-sand60'));
const ruleColor = computed(() => (props.tone === 'light' ? 'bg-sand20/40' : 'bg-sand40'));
const titleColor = computed(() => (props.tone === 'light' ? 'text-sand00' : 'text-sand100'));
const subtitleColor = computed(() => (props.tone === 'light' ? 'text-sand20' : 'text-sand60'));
const eyebrowFlex = computed(() => (props.align === 'center' ? 'justify-center' : ''));
</script>

<template>
	<div :class="['max-w-3xl', alignClasses]">
		<div v-if="eyebrow" :class="['flex items-center gap-3', eyebrowFlex]">
			<span :class="['block h-px w-8', ruleColor]" aria-hidden="true" />
			<p :class="['eyebrow', eyebrowColor]">{{ eyebrow }}</p>
		</div>
		<h2
			:class="[
				'mt-5 font-display leading-[1.02] tracking-tight',
				'text-[clamp(2rem,4.5vw,4rem)]',
				titleColor,
			]"
		>
			{{ title }}
		</h2>
		<p v-if="subtitle" :class="['mt-5 text-lg leading-relaxed', subtitleColor]">
			{{ subtitle }}
		</p>
	</div>
</template>
