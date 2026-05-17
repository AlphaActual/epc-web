<script setup lang="ts">
import { sermonSeries, sermonTopics } from '~/data/sermons';

const search = defineModel<string>('search', { default: '' });
const speaker = defineModel<string>('speaker', { default: '' });
const series = defineModel<string>('series', { default: '' });
const topic = defineModel<string>('topic', { default: '' });

const { t } = useI18n();

const speakerOptions = [
	{ value: '', label_key: 'sermons.filters.all_speakers' },
	{ value: 'sermons.speakers.matija_bacac', label_key: 'sermons.speakers.matija_bacac' },
	{ value: 'sermons.speakers.goran_roksandic', label_key: 'sermons.speakers.goran_roksandic' },
	{ value: 'sermons.speakers.jure_dohnal', label_key: 'sermons.speakers.jure_dohnal' },
	{ value: 'sermons.speakers.katka_dohnalov', label_key: 'sermons.speakers.katka_dohnalov' },
	{ value: 'sermons.speakers.tin_pritisanac', label_key: 'sermons.speakers.tin_pritisanac' },
	{ value: 'sermons.speakers.fabiola_bacac', label_key: 'sermons.speakers.fabiola_bacac' },
	{ value: 'sermons.speakers.andrea_bacac', label_key: 'sermons.speakers.andrea_bacac' },
	{ value: 'sermons.speakers.tereza_bacac', label_key: 'sermons.speakers.tereza_bacac' },
	{ value: 'sermons.speakers.vukasin_vukovic', label_key: 'sermons.speakers.vukasin_vukovic' },
	{ value: 'sermons.speakers.eva_husak_bacac', label_key: 'sermons.speakers.eva_husak_bacac' },
];

const seriesOptions = computed(() => [
	{ value: '', label_key: 'sermons.filters.all_series' },
	...sermonSeries.map(s => ({ value: s.title_key, label_key: s.title_key })),
]);

const topicOptions = computed(() => [
	{ value: '', label_key: 'sermons.filters.all_topics' },
	...sermonTopics.map(t => ({ value: t, label_key: t })),
]);

function clear() {
	search.value = '';
	speaker.value = '';
	series.value = '';
	topic.value = '';
}

const hasFilters = computed(() => !!(search.value || speaker.value || series.value || topic.value));
</script>

<template>
	<div class="rounded-2xl border border-sand20 bg-sand00 p-5 shadow-layer-1">
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			<label class="lg:col-span-2">
				<span class="sr-only">{{ t('common.search') }}</span>
				<div class="relative">
					<input
						v-model="search"
						type="search"
						:placeholder="t('sermons.filters.search_placeholder')"
						class="w-full rounded-lg border border-sand20 bg-sand05 px-4 py-2.5 pl-10 text-sm text-sand100 placeholder:text-sand60 focus:border-terracotta60 focus:outline-none focus:ring-2 focus:ring-terracotta20"
					/>
					<svg class="absolute left-3 top-1/2 -translate-y-1/2 text-sand60" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<circle cx="11" cy="11" r="7" />
						<line x1="21" y1="21" x2="16.65" y2="16.65" />
					</svg>
				</div>
			</label>

			<label>
				<span class="sr-only">{{ t('sermons.filters.all_speakers') }}</span>
				<select
					v-model="speaker"
					class="w-full rounded-lg border border-sand20 bg-sand05 px-4 py-2.5 text-sm text-sand100 focus:border-terracotta60 focus:outline-none focus:ring-2 focus:ring-terracotta20"
				>
					<option v-for="opt in speakerOptions" :key="opt.value" :value="opt.value">{{ t(opt.label_key) }}</option>
				</select>
			</label>

			<label>
				<span class="sr-only">{{ t('sermons.filters.all_series') }}</span>
				<select
					v-model="series"
					class="w-full rounded-lg border border-sand20 bg-sand05 px-4 py-2.5 text-sm text-sand100 focus:border-terracotta60 focus:outline-none focus:ring-2 focus:ring-terracotta20"
				>
					<option v-for="opt in seriesOptions" :key="opt.value" :value="opt.value">{{ t(opt.label_key) }}</option>
				</select>
			</label>
		</div>

		<div class="mt-4 flex flex-wrap items-center gap-2">
			<span class="text-xs font-semibold uppercase tracking-wider text-sand60">{{ t('sermons.topics.faith').replace(/.+/, '') || '' }}</span>
			<button
				v-for="opt in topicOptions"
				:key="opt.value"
				type="button"
				:class="[
					'rounded-full px-3 py-1 text-xs font-medium transition-colors',
					topic === opt.value
						? 'bg-terracotta60 text-white'
						: 'bg-sand10 text-sand80 hover:bg-sand20',
				]"
				@click="topic = opt.value"
			>
				{{ t(opt.label_key) }}
			</button>

			<button
				v-if="hasFilters"
				type="button"
				class="ml-auto text-xs font-medium text-terracotta60 hover:text-terracotta80"
				@click="clear"
			>
				{{ t('sermons.filters.clear') }}
			</button>
		</div>
	</div>
</template>
