<script setup lang="ts">
import type { Sermon } from '~~/@types/content';

const props = defineProps({
	sermon: { type: Object as () => Sermon, required: true },
	compact: { type: Boolean, default: false },
});

const { t, locale } = useI18n();

const thumb = computed(() => `https://i.ytimg.com/vi/${props.sermon.youtube_id}/hqdefault.jpg`);
const youtubeUrl = computed(() => `https://www.youtube.com/watch?v=${props.sermon.youtube_id}`);

const dateLabel = computed(() => {
	const d = new Date(props.sermon.date);
	return d.toLocaleDateString(locale.value === 'hr' ? 'hr-HR' : 'en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
});
</script>

<template>
	<article class="group relative flex flex-col overflow-hidden rounded-2xl bg-sand00 shadow-layer-1 transition-shadow hover:shadow-layer-3">
		<a :href="youtubeUrl" target="_blank" rel="noopener noreferrer" class="relative block aspect-video overflow-hidden bg-sand20" :aria-label="t(sermon.title_key)">
			<img :src="thumb" :alt="t(sermon.title_key)" class="size-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
			<div class="absolute inset-0 bg-gradient-to-t from-sand100/60 via-transparent to-transparent" />
			<span class="absolute bottom-3 left-3 inline-flex size-12 items-center justify-center rounded-full bg-terracotta60 text-white shadow-layer-2 transition-transform group-hover:scale-110">
				<Icon name="play" :size="20" />
			</span>
		</a>

		<div class="flex flex-1 flex-col gap-3 p-5">
			<div class="flex flex-wrap items-center gap-2 text-xs font-medium text-sand60">
				<span>{{ dateLabel }}</span>
				<span aria-hidden="true">·</span>
				<span>{{ t(sermon.speaker_key) }}</span>
				<template v-if="sermon.series_key">
					<span aria-hidden="true">·</span>
					<span class="text-olive60">{{ t(sermon.series_key) }}</span>
				</template>
			</div>

			<h3 class="font-serif text-xl font-semibold leading-snug text-sand100">
				{{ t(sermon.title_key) }}
			</h3>

			<p class="text-sm font-medium text-terracotta60">{{ t(sermon.scripture_key) }}</p>

			<p v-if="!compact" class="text-sm leading-relaxed text-sand60">
				{{ t(sermon.summary_key) }}
			</p>

			<div v-if="!compact" class="mt-auto flex flex-wrap gap-2 pt-2">
				<span v-for="topic in sermon.topic_keys" :key="topic" class="inline-flex items-center rounded-full bg-terracotta05 px-3 py-1 text-xs font-medium text-terracotta80">
					{{ t(topic) }}
				</span>
			</div>
		</div>
	</article>
</template>
