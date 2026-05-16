<script setup lang="ts">
const { t } = useI18n();

const beliefs = [
	{ key: 'bible' },
	{ key: 'god' },
	{ key: 'jesus' },
	{ key: 'salvation' },
	{ key: 'spirit' },
	{ key: 'gifts' },
	{ key: 'church' },
	{ key: 'return' },
];
</script>

<template>
	<Section tone="sand" spacing="lg">
		<Container size="lg">
			<SectionHeading
				:eyebrow="t('about.beliefs.title')"
				:title="t('about.beliefs.title')"
				:subtitle="t('about.beliefs.intro')"
			/>

			<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				<div
					v-for="b in beliefs"
					:key="b.key"
					class="rounded-2xl bg-sand00 p-6 shadow-layer-1 transition-shadow hover:shadow-layer-2"
				>
					<h3 class="font-serif text-lg font-semibold text-terracotta80">
						{{ t(`about.beliefs.items.${b.key}.title`) }}
					</h3>
					<p class="mt-3 text-sm leading-relaxed text-sand80">
						{{ t(`about.beliefs.items.${b.key}.body`) }}
					</p>
				</div>
			</div>
		</Container>
	</Section>
</template>
