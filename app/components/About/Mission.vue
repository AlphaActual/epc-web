<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
	<Section spacing="md">
		<Container size="lg">
			<SectionHeading :title="t('about.mission.title')" />

			<div class="mt-10 grid gap-6 md:grid-cols-2">
				<div class="rounded-2xl border border-terracotta20 bg-terracotta05 p-8">
					<p class="text-xs font-semibold uppercase tracking-wider text-terracotta80">
						{{ t('about.mission.vision_label') }}
					</p>
					<p class="mt-3 font-serif text-2xl leading-snug text-sand100">
						{{ t('about.mission.vision_body') }}
					</p>
				</div>
				<div class="rounded-2xl border border-olive20 bg-olive05 p-8">
					<p class="text-xs font-semibold uppercase tracking-wider text-olive80">
						{{ t('about.mission.mission_label') }}
					</p>
					<p class="mt-3 font-serif text-2xl leading-snug text-sand100">
						{{ t('about.mission.mission_body') }}
					</p>
				</div>
			</div>
		</Container>
	</Section>
</template>
