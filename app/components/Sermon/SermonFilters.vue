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
	<div class="border border-sand20 bg-sand00 p-6 sm:p-8">
		<div class="grid gap-px bg-sand20 md:grid-cols-2 lg:grid-cols-4">
			<label class="block bg-sand00 lg:col-span-2">
				<span class="sr-only">{{ t('common.search') }}</span>
				<div class="relative">
					<input
						v-model="search"
						type="search"
						:placeholder="t('sermons.filters.search_placeholder')"
						class="w-full bg-transparent px-4 py-3.5 pl-11 text-sm text-sand100 placeholder:text-sand40 focus:bg-sand05 focus:outline-none"
					/>
					<svg class="absolute left-4 top-1/2 -translate-y-1/2 text-sand60" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<circle cx="11" cy="11" r="7" />
						<line x1="21" y1="21" x2="16.65" y2="16.65" />
					</svg>
				</div>
			</label>

			<label class="block bg-sand00">
				<span class="sr-only">{{ t('sermons.filters.all_speakers') }}</span>
				<select
					v-model="speaker"
					class="w-full appearance-none bg-transparent px-4 py-3.5 text-sm text-sand100 focus:bg-sand05 focus:outline-none"
				>
					<option v-for="opt in speakerOptions" :key="opt.value" :value="opt.value">{{ t(opt.label_key) }}</option>
				</select>
			</label>

			<label class="block bg-sand00">
				<span class="sr-only">{{ t('sermons.filters.all_series') }}</span>
				<select
					v-model="series"
					class="w-full appearance-none bg-transparent px-4 py-3.5 text-sm text-sand100 focus:bg-sand05 focus:outline-none"
				>
					<option v-for="opt in seriesOptions" :key="opt.value" :value="opt.value">{{ t(opt.label_key) }}</option>
				</select>
			</label>
		</div>

		<div class="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-sand20 pt-6">
			<span class="eyebrow text-sand60 mr-2">{{ t('sermons.filters.topics_label') }}</span>
			<button
				v-for="opt in topicOptions"
				:key="opt.value"
				type="button"
				:class="[
					'border px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors',
					topic === opt.value
						? 'border-terracotta60 bg-terracotta60 text-white'
						: 'border-sand20 bg-sand00 text-sand80 hover:border-sand40 hover:bg-sand10',
				]"
				@click="topic = opt.value"
			>
				{{ t(opt.label_key) }}
			</button>

			<button
				v-if="hasFilters"
				type="button"
				class="ml-auto inline-flex items-center gap-2 border-b border-sand40 pb-0.5 font-mono text-[10px] uppercase tracking-wider text-terracotta80 transition-colors hover:border-terracotta60"
				@click="clear"
			>
				{{ t('sermons.filters.clear') }}
				<Icon name="close" :size="10" aria-hidden="true" />
			</button>
		</div>
	</div>
</template>
