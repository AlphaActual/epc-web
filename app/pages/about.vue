<script lang="ts" setup>
const { t } = useI18n();

definePageMeta({
	name: 'about',
});

defineI18nRoute({
	paths: {
		hr: '/o-nama',
		en: '/about',
	},
});

useSeoMeta({
	title: t('about.hero.title'),
	description: t('about.hero.subtitle'),
});
</script>

<template>
	<div>
		<PageHero :eyebrow="t('about.hero.eyebrow')" :title="t('about.hero.title')" :subtitle="t('about.hero.subtitle')" />
		<AboutHistory />
		<AboutBeliefs />
		<AboutMission />
		<AboutLeadership />
	</div>
</template>
