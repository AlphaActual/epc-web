<script lang="ts" setup>
const { t } = useI18n();

definePageMeta({
	name: 'services',
});

defineI18nRoute({
	paths: {
		hr: '/bogosluzja',
		en: '/services',
	},
});

useSeoMeta({
	title: t('schedule.hero.title'),
	description: t('schedule.hero.subtitle'),
});
</script>

<template>
	<div>
		<PageHero :eyebrow="t('schedule.hero.eyebrow')" :title="t('schedule.hero.title')" :subtitle="t('schedule.hero.subtitle')" />
		<ScheduleRecurringList />
		<ScheduleEventsList />
	</div>
</template>
