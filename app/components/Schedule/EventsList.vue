<script setup lang="ts">
import { upcomingEvents } from '~/data/schedule';

const { t } = useI18n();

const events = computed(() =>
	[...upcomingEvents].sort((a, b) => new Date(a.date_iso).getTime() - new Date(b.date_iso).getTime()),
);
</script>

<template>
	<Section tone="sand" spacing="lg">
		<Container size="xl">
			<div class="flex items-center gap-4 section-no text-sand60">
				<span>§ II</span>
				<span class="block h-px w-16 bg-sand40" />
				<span class="eyebrow">{{ t('schedule.events_subtitle') }}</span>
			</div>

			<h2 class="mt-6 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] tracking-tight text-sand100">
				{{ t('schedule.events_title') }}
			</h2>

			<div class="mt-12 border-b border-sand20">
				<EventCard v-for="event in events" :key="event.id" :event="event" />
			</div>
		</Container>
	</Section>
</template>
