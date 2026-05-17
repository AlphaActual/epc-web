<script setup lang="ts">
import { upcomingEvents } from '~/data/schedule';

const { t } = useI18n();

const events = computed(() =>
	[...upcomingEvents].sort((a, b) => new Date(a.date_iso).getTime() - new Date(b.date_iso).getTime()).slice(0, 3),
);
</script>

<template>
	<section class="relative bg-sand05 py-24 sm:py-32 lg:py-40">
		<Container size="xl">
			<div class="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
				<div class="max-w-2xl">
					<div class="flex items-center gap-4 section-no text-sand60">
						<span>№ 04</span>
						<span class="block h-px w-16 bg-sand40" />
						<span class="eyebrow">{{ t('home.upcoming_events.eyebrow') }}</span>
					</div>
					<h2 class="mt-6 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] tracking-tight text-sand100">
						{{ t('home.upcoming_events.title') }}
					</h2>
				</div>
				<TLink
					to="services"
					class="group hidden items-center gap-3 border-b border-sand100 pb-1 text-sm font-medium uppercase tracking-[0.18em] text-sand100 transition-colors hover:border-terracotta60 hover:text-terracotta60 sm:inline-flex"
				>
					{{ t('home.upcoming_events.view_all') }}
					<Icon name="arrow_right" :size="14" class="transition-transform group-hover:translate-x-1" />
				</TLink>
			</div>

			<div class="mt-12 border-b border-sand20">
				<EventCard v-for="event in events" :key="event.id" :event="event" />
			</div>

			<div class="mt-10 flex sm:hidden">
				<TLink
					to="services"
					class="group inline-flex items-center gap-3 border-b border-sand100 pb-1 text-sm font-medium uppercase tracking-[0.18em] text-sand100 transition-colors hover:border-terracotta60 hover:text-terracotta60"
				>
					{{ t('home.upcoming_events.view_all') }}
					<Icon name="arrow_right" :size="14" class="transition-transform group-hover:translate-x-1" />
				</TLink>
			</div>
		</Container>
	</section>
</template>
