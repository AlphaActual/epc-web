<script setup lang="ts">
import { upcomingEvents } from '~/data/schedule';

const { t } = useI18n();

const events = computed(() =>
	[...upcomingEvents].sort((a, b) => new Date(a.date_iso).getTime() - new Date(b.date_iso).getTime()).slice(0, 3),
);
</script>

<template>
	<Section spacing="lg">
		<Container size="xl">
			<div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
				<SectionHeading :eyebrow="t('home.upcoming_events.eyebrow')" :title="t('home.upcoming_events.title')" />
				<Button to="services" variant="outline" size="md" class="hidden sm:inline-flex">
					{{ t('home.upcoming_events.view_all') }}
					<Icon name="arrow_right" :size="14" />
				</Button>
			</div>

			<div class="mt-10 grid gap-5 lg:grid-cols-2">
				<EventCard v-for="event in events" :key="event.id" :event="event" />
			</div>

			<div class="mt-8 flex sm:hidden">
				<Button to="services" variant="outline" size="md">
					{{ t('home.upcoming_events.view_all') }}
					<Icon name="arrow_right" :size="14" />
				</Button>
			</div>
		</Container>
	</Section>
</template>
