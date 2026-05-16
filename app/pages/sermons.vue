<script lang="ts" setup>
import { sermons } from '~/data/sermons';

const { t } = useI18n();

definePageMeta({
	name: 'sermons',
});

defineI18nRoute({
	paths: {
		hr: '/propovijedi',
		en: '/sermons',
	},
});

useSeoMeta({
	title: t('sermons.hero.title'),
	description: t('sermons.hero.subtitle'),
});

const search = ref('');
const speaker = ref('');
const series = ref('');
const topic = ref('');

const filtered = computed(() => {
	const q = search.value.trim().toLowerCase();
	return sermons.filter(s => {
		if (speaker.value && s.speaker_key !== speaker.value) return false;
		if (series.value && s.series_key !== series.value) return false;
		if (topic.value && !s.topic_keys.includes(topic.value)) return false;
		if (q) {
			const haystack = [t(s.title_key), t(s.scripture_key), t(s.summary_key)].join(' ').toLowerCase();
			if (!haystack.includes(q)) return false;
		}
		return true;
	});
});

const sorted = computed(() => [...filtered.value].sort((a, b) => b.date.localeCompare(a.date)));
</script>

<template>
	<div>
		<PageHero :eyebrow="t('sermons.hero.eyebrow')" :title="t('sermons.hero.title')" :subtitle="t('sermons.hero.subtitle')" />

		<Section spacing="md">
			<Container size="xl">
				<SermonFilters
					v-model:search="search"
					v-model:speaker="speaker"
					v-model:series="series"
					v-model:topic="topic"
				/>

				<p class="mt-6 text-sm text-sand60">
					{{ sorted.length }} {{ sorted.length === 1 ? '·' : '·' }}
					<span v-if="sorted.length === 1">{{ t('sermons.filters.results_one', { count: sorted.length }) }}</span>
					<span v-else>{{ t('sermons.filters.results', { count: sorted.length }) }}</span>
				</p>

				<div v-if="sorted.length" class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<SermonCard v-for="sermon in sorted" :key="sermon.id" :sermon="sermon" />
				</div>

				<div v-else class="mt-12 rounded-2xl border border-dashed border-sand20 bg-sand10 py-16 text-center">
					<p class="text-base text-sand60">{{ t('sermons.filters.no_results') }}</p>
				</div>
			</Container>
		</Section>
	</div>
</template>
