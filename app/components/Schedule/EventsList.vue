<script setup lang="ts">
import { upcomingEvents } from '~/data/schedule';

const { t } = useI18n();

const events = computed(() =>
	[...upcomingEvents].sort((a, b) => new Date(a.date_iso).getTime() - new Date(b.date_iso).getTime()),
);
</script>

<template>
	<Section tone="sand" spacing="md">
		<Container size="lg">
			<SectionHeading :title="t('schedule.events_title')" :subtitle="t('schedule.events_subtitle')" />

			<div class="mt-10 grid gap-5 lg:grid-cols-2">
				<EventCard v-for="event in events" :key="event.id" :event="event" />
			</div>
		</Container>
	</Section>
</template>
