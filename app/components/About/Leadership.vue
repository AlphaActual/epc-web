<script setup lang="ts">
import { leadership } from '~/data/leadership';

const { t } = useI18n();

function initials(name: string) {
	return name
		.split(' ')
		.map(p => p[0])
		.slice(0, 2)
		.join('')
		.toUpperCase();
}
</script>

<template>
	<Section tone="sand" spacing="lg">
		<Container size="lg">
			<SectionHeading :title="t('about.leadership.title')" :subtitle="t('about.leadership.subtitle')" />

			<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<article
					v-for="member in leadership"
					:key="member.id"
					class="overflow-hidden rounded-2xl bg-sand00 shadow-layer-1 transition-shadow hover:shadow-layer-2"
				>
					<div class="flex aspect-square items-center justify-center bg-gradient-to-br from-terracotta40 to-terracotta60 text-white">
						<span class="font-serif text-5xl font-bold">{{ initials(member.name) }}</span>
					</div>
					<div class="p-5">
						<h3 class="font-serif text-lg font-semibold text-sand100">{{ member.name }}</h3>
						<p class="text-sm font-medium text-terracotta60">{{ t(member.role_key) }}</p>
						<p class="mt-3 text-sm leading-relaxed text-sand60">{{ t(member.bio_key) }}</p>
					</div>
				</article>
			</div>
		</Container>
	</Section>
</template>
