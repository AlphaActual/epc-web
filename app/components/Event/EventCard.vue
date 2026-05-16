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

const rangeLabel = computed(() => {
	const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
	const start = date.value.toLocaleDateString(locale.value === 'hr' ? 'hr-HR' : 'en-US', opts);
	if (!endDate.value) return start;
	const sameDay = date.value.toDateString() === endDate.value.toDateString();
	if (sameDay) return start;
	const end = endDate.value.toLocaleDateString(locale.value === 'hr' ? 'hr-HR' : 'en-US', opts);
	return `${start} – ${end}`;
});

const timeLabel = computed(() =>
	date.value.toLocaleTimeString(locale.value === 'hr' ? 'hr-HR' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
);
</script>

<template>
	<article class="flex gap-5 rounded-2xl bg-sand00 p-5 shadow-layer-1 transition-shadow hover:shadow-layer-2">
		<div class="flex size-20 shrink-0 flex-col items-center justify-center rounded-xl bg-terracotta60 text-white">
			<span class="font-serif text-2xl font-bold leading-none">{{ day }}</span>
			<span class="mt-1 text-xs font-semibold uppercase tracking-wider">{{ month }}</span>
		</div>

		<div class="flex min-w-0 flex-1 flex-col gap-1.5">
			<h3 class="font-serif text-xl font-semibold leading-snug text-sand100">
				{{ t(event.title_key) }}
			</h3>

			<div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-sand60">
				<span class="inline-flex items-center gap-1.5">
					<Icon name="clock" :size="14" />
					{{ rangeLabel }} · {{ timeLabel }}
				</span>
				<span class="inline-flex items-center gap-1.5">
					<Icon name="map_pin" :size="14" />
					{{ t(event.location_key) }}
				</span>
			</div>

			<p v-if="event.description_key" class="mt-1 text-sm leading-relaxed text-sand80">
				{{ t(event.description_key) }}
			</p>
		</div>
	</article>
</template>
