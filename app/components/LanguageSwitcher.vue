<script setup lang="ts">
const props = defineProps({
	tone: { type: String as () => 'dark' | 'light', default: 'dark' },
});

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => (locales.value as { code: string; language: string }[]).filter(l => l.code !== locale.value));

const colorClasses = computed(() =>
	props.tone === 'light'
		? 'text-white/80 hover:text-white'
		: 'text-sand60 hover:text-sand100',
);
</script>

<template>
	<div class="flex items-center gap-1 text-sm font-medium">
		<span class="uppercase font-semibold" :class="tone === 'light' ? 'text-white' : 'text-sand100'">
			{{ locale }}
		</span>
		<span class="mx-1" :class="tone === 'light' ? 'text-white/40' : 'text-sand40'">/</span>
		<NuxtLink
			v-for="l in availableLocales"
			:key="l.code"
			:to="switchLocalePath(l.code)"
			class="uppercase transition-colors"
			:class="colorClasses"
			:aria-label="$t('common.language') + ': ' + l.code"
		>
			{{ l.code }}
		</NuxtLink>
	</div>
</template>
