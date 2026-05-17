<script setup lang="ts">
import { recurringMeetings } from '~/data/schedule';

const { t } = useI18n();
</script>

<template>
	<Section spacing="lg">
		<Container size="xl">
			<div class="flex items-center gap-4 section-no text-sand60">
				<span>§ I</span>
				<span class="block h-px w-16 bg-sand40" />
				<span class="eyebrow">{{ t('schedule.recurring_subtitle') }}</span>
			</div>

			<h2 class="mt-6 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] tracking-tight text-sand100">
				{{ t('schedule.recurring_title') }}
			</h2>

			<ol class="mt-12 space-y-px border-y border-sand20">
				<li
					v-for="(meeting, idx) in recurringMeetings"
					:key="meeting.id"
					class="group grid gap-4 border-b border-sand20 py-8 transition-colors last:border-b-0 hover:border-terracotta60 sm:grid-cols-[60px_180px_1fr_auto] sm:gap-8 sm:py-10"
				>
					<span class="font-mono text-xs text-sand40 tabular">{{ String(idx + 1).padStart(2, '0') }}</span>

					<div class="flex flex-col">
						<p class="eyebrow text-terracotta80">{{ t(`schedule.days.${meeting.day_key}`) }}</p>
						<p class="mt-1 font-display text-3xl text-sand100 tabular">{{ meeting.time }}</p>
					</div>

					<div class="flex flex-col gap-2">
						<h3 class="font-display text-2xl leading-snug text-sand100">{{ t(meeting.title_key) }}</h3>
						<p class="max-w-prose text-sm leading-relaxed text-sand60">{{ t(meeting.description_key) }}</p>
					</div>

					<div class="flex items-start sm:items-center">
						<span class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sand60">
							<Icon name="map_pin" :size="12" aria-hidden="true" />
							{{ t(meeting.location_key) }}
						</span>
					</div>
				</li>
			</ol>
		</Container>
	</Section>
</template>
