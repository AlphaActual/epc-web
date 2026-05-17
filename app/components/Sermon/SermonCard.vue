<script setup lang="ts">
import type { Sermon } from '~~/@types/content';

const props = defineProps({
	sermon: { type: Object as () => Sermon, required: true },
	compact: { type: Boolean, default: false },
	index: { type: Number, default: null },
});

const { t, locale } = useI18n();

const thumb = computed(() => `https://i.ytimg.com/vi/${props.sermon.youtube_id}/hqdefault.jpg`);
const youtubeUrl = computed(() => `https://www.youtube.com/watch?v=${props.sermon.youtube_id}`);

const dateLabel = computed(() => {
	const d = new Date(props.sermon.date);
	return d.toLocaleDateString(locale.value === 'hr' ? 'hr-HR' : 'en-US', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).replace('.', '').toUpperCase();
});

const numberLabel = computed(() => (props.index !== null ? String(props.index + 1).padStart(2, '0') : null));
</script>

<template>
	<article class="group relative flex flex-col bg-sand00 transition-colors hover:bg-sand10">
		<a
			:href="youtubeUrl"
			target="_blank"
			rel="noopener noreferrer"
			class="relative block aspect-square overflow-hidden bg-sand20"
			:aria-label="t(sermon.title_key)"
		>
			<img
				:src="thumb"
				:alt="t(sermon.title_key)"
				class="size-full object-cover transition-transform duration-700 group-hover:scale-105"
				loading="lazy"
			/>
			<div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,23,20,0)_50%,rgba(26,23,20,0.55)_100%)]" aria-hidden="true" />

			<!-- Number badge -->
			<div v-if="numberLabel" class="absolute left-4 top-4 inline-flex items-center gap-2 bg-sand00/95 px-2.5 py-1 backdrop-blur-sm">
				<span class="font-mono text-xs font-medium text-sand100 tabular">{{ numberLabel }}</span>
			</div>

			<!-- Play affordance -->
			<div class="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-terracotta60 px-3 py-1.5 text-white shadow-layer-2 transition-transform duration-300 group-hover:translate-x-[-2px]">
				<Icon name="play" :size="11" aria-hidden="true" />
				<span class="eyebrow">{{ t('common.watch') }}</span>
			</div>
		</a>

		<div class="flex flex-1 flex-col gap-3 border border-t-0 border-sand20 p-6 transition-colors group-hover:border-sand40">
			<div class="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-sand60 tabular">
				<span>{{ dateLabel }}</span>
				<span class="text-sand40" aria-hidden="true">/</span>
				<span class="truncate text-sand80">{{ t(sermon.speaker_key) }}</span>
			</div>

			<h3 class="font-display text-2xl leading-[1.1] text-sand100">
				<a :href="youtubeUrl" target="_blank" rel="noopener noreferrer" class="block transition-colors group-hover:text-terracotta80">
					{{ t(sermon.title_key) }}
				</a>
			</h3>

			<p v-if="t(sermon.scripture_key).length" class="font-mono text-xs text-terracotta80">
				— {{ t(sermon.scripture_key) }}
			</p>

			<p v-if="!compact" class="text-sm leading-relaxed text-sand60">
				{{ t(sermon.summary_key) }}
			</p>

			<div v-if="!compact" class="mt-auto flex flex-wrap gap-1.5 pt-3">
				<span
					v-for="topic in sermon.topic_keys"
					:key="topic"
					class="inline-flex items-center border border-sand20 bg-sand05 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-sand80"
				>
					{{ t(topic) }}
				</span>
			</div>
		</div>
	</article>
</template>
