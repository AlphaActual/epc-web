<script lang="ts" setup>
const { t } = useI18n();

definePageMeta({
	name: 'index',
});

useSeoMeta({
	title: t('church.tagline'),
});
</script>

<template>
	<div>
		<HomeHero />
		<HomeNextService />
		<HomeBeliefsIntro />
		<HomeLatestSermons />
		<HomeUpcomingEvents />
		<HomeMapCallout />
	</div>
</template>
