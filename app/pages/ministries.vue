<script lang="ts" setup>
import { ministries } from '~/data/ministries';

const { t } = useI18n();

definePageMeta({
	name: 'ministries',
});

defineI18nRoute({
	paths: {
		hr: '/sluzenja',
		en: '/ministries',
	},
});

useSeoMeta({
	title: t('ministries.hero.title'),
	description: t('ministries.hero.subtitle'),
});
</script>

<template>
	<div>
		<PageHero :eyebrow="t('ministries.hero.eyebrow')" :title="t('ministries.hero.title')" :subtitle="t('ministries.hero.subtitle')" />

		<Section spacing="md">
			<Container size="lg">
				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<article
						v-for="ministry in ministries"
						:key="ministry.id"
						class="group rounded-2xl bg-sand00 p-6 shadow-layer-1 transition-shadow hover:shadow-layer-3"
					>
						<span class="inline-flex size-12 items-center justify-center rounded-xl bg-terracotta05 text-terracotta80 transition-colors group-hover:bg-terracotta60 group-hover:text-white">
							<Icon :name="ministry.icon" :size="24" />
						</span>
						<h3 class="mt-5 font-serif text-xl font-semibold text-sand100">{{ t(ministry.title_key) }}</h3>
						<p class="mt-3 text-sm leading-relaxed text-sand60">{{ t(ministry.description_key) }}</p>
					</article>
				</div>
			</Container>
		</Section>
	</div>
</template>
