<script setup lang="ts">
import type { ChurchEvent } from '~~/@types/content';

const props = defineProps({
	event: { type: Object as () => ChurchEvent, required: true },
});

const { t, locale } = useI18n();

const date = computed(() => new Date(props.event.date_iso));
const endDate = computed(() => (props.event.end_date_iso ? new Date(props.event.end_date_iso) : null));

const day = computed(() => date.value.getDate().toString().padStart(2, '0'));
const month = computed(() =>
	date.value.toLocaleDateString(locale.value === 'hr' ? 'hr-HR' : 'en-US', { month: 'short' }).replace('.', '').toUpperCase(),
);
const year = computed(() => date.value.getFullYear());

const rangeLabel = computed(() => {
	if (!endDate.value) return null;
	const sameDay = date.value.toDateString() === endDate.value.toDateString();
	if (sameDay) return null;
	const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
	const start = date.value.toLocaleDateString(locale.value === 'hr' ? 'hr-HR' : 'en-US', opts);
	const end = endDate.value.toLocaleDateString(locale.value === 'hr' ? 'hr-HR' : 'en-US', opts);
	return `${start} – ${end}`;
});

const timeLabel = computed(() =>
	date.value.toLocaleTimeString(locale.value === 'hr' ? 'hr-HR' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
);
</script>

<template>
	<article class="group relative grid grid-cols-[auto_1fr] gap-6 border-t border-sand20 py-8 transition-colors hover:border-terracotta60 sm:grid-cols-[140px_1fr_auto] sm:gap-10 sm:py-10">
		<!-- Date column -->
		<div class="flex flex-col">
			<span class="font-display text-5xl leading-none text-sand100 tabular sm:text-6xl">{{ day }}</span>
			<div class="mt-2 flex items-baseline gap-2">
				<span class="font-mono text-xs font-medium text-terracotta80 tracking-wider">{{ month }}</span>
				<span class="font-mono text-xs text-sand40 tabular">{{ year }}</span>
			</div>
		</div>

		<!-- Body -->
		<div class="flex min-w-0 flex-col gap-3">
			<h3 class="font-display text-2xl leading-snug text-sand100 sm:text-3xl">
				{{ t(event.title_key) }}
			</h3>

			<div class="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wider text-sand60">
				<span class="inline-flex items-center gap-1.5">
					<Icon name="clock" :size="12" aria-hidden="true" />
					{{ timeLabel }}<span v-if="rangeLabel">  /  {{ rangeLabel }}</span>
				</span>
				<span class="hidden h-px w-3 bg-sand40 sm:block" aria-hidden="true" />
				<span class="inline-flex items-center gap-1.5">
					<Icon name="map_pin" :size="12" aria-hidden="true" />
					{{ t(event.location_key) }}
				</span>
			</div>

			<p v-if="event.description_key" class="max-w-prose text-sm leading-relaxed text-sand80">
				{{ t(event.description_key) }}
			</p>
		</div>

		<!-- CTA -->
		<div v-if="event.cta_key" class="col-span-2 flex items-end sm:col-span-1">
			<TLink
				:to="'services'"
				class="group/cta inline-flex items-center gap-3 border-b border-sand40 pb-1 font-mono text-xs uppercase tracking-[0.18em] text-sand100 transition-colors hover:border-terracotta60 hover:text-terracotta60"
			>
				{{ t(event.cta_key) }}
				<Icon name="arrow_right" :size="12" class="transition-transform group-hover/cta:translate-x-1" aria-hidden="true" />
			</TLink>
		</div>
	</article>
</template>
