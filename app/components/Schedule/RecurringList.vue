<script setup lang="ts">
import { recurringMeetings } from '~/data/schedule';

const { t } = useI18n();
</script>

<template>
	<Section spacing="md">
		<Container size="lg">
			<SectionHeading :title="$t('schedule.recurring_title')" :subtitle="$t('schedule.recurring_subtitle')" />

			<div class="mt-10 overflow-hidden rounded-2xl bg-sand00 shadow-layer-1">
				<ul class="divide-y divide-sand20">
					<li
						v-for="meeting in recurringMeetings"
						:key="meeting.id"
						class="grid items-start gap-4 p-5 sm:grid-cols-[140px_140px_1fr] sm:gap-6 sm:p-6"
					>
						<div>
							<p class="font-serif text-lg font-semibold text-terracotta80">
								{{ t(`schedule.days.${meeting.day_key}`) }}
							</p>
							<p class="text-sm text-sand60">{{ meeting.time }}</p>
						</div>

						<p class="font-serif text-base font-medium text-sand100">
							{{ t(meeting.title_key) }}
						</p>

						<div>
							<p class="text-sm leading-relaxed text-sand80">
								{{ t(meeting.description_key) }}
							</p>
							<p class="mt-2 inline-flex items-center gap-1.5 text-xs text-sand60">
								<Icon name="map_pin" :size="12" />
								{{ t(meeting.location_key) }}
							</p>
						</div>
					</li>
				</ul>
			</div>
		</Container>
	</Section>
</template>
