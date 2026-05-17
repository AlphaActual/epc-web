<script setup lang="ts">
import { sermons } from '~/data/sermons';

const { t } = useI18n();

const latestSermons = computed(() => sermons.slice(0, 3));
</script>

<template>
	<section class="relative bg-sand10 py-24 sm:py-32 lg:py-40">
		<Container size="xl">
			<div class="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
				<div class="max-w-2xl">
					<div class="flex items-center gap-4 section-no text-sand60">
						<span>№ 03</span>
						<span class="block h-px w-16 bg-sand40" />
						<span class="eyebrow">{{ t('home.latest_sermons.eyebrow') }}</span>
					</div>
					<h2 class="mt-6 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] tracking-tight text-sand100">
						{{ t('home.latest_sermons.title') }}
					</h2>
				</div>
				<TLink
					to="sermons"
					class="group hidden items-center gap-3 border-b border-sand100 pb-1 text-sm font-medium uppercase tracking-[0.18em] text-sand100 transition-colors hover:border-terracotta60 hover:text-terracotta60 sm:inline-flex"
				>
					{{ t('home.latest_sermons.view_all') }}
					<Icon name="arrow_right" :size="14" class="transition-transform group-hover:translate-x-1" />
				</TLink>
			</div>

			<div class="mt-14 grid gap-px bg-sand20 sm:grid-cols-2 lg:grid-cols-3">
				<SermonCard
					v-for="(sermon, idx) in latestSermons"
					:key="sermon.id"
					:sermon="sermon"
					:index="idx"
				/>
			</div>

			<div class="mt-10 flex sm:hidden">
				<TLink
					to="sermons"
					class="group inline-flex items-center gap-3 border-b border-sand100 pb-1 text-sm font-medium uppercase tracking-[0.18em] text-sand100 transition-colors hover:border-terracotta60 hover:text-terracotta60"
				>
					{{ t('home.latest_sermons.view_all') }}
					<Icon name="arrow_right" :size="14" class="transition-transform group-hover:translate-x-1" />
				</TLink>
			</div>
		</Container>
	</section>
</template>
