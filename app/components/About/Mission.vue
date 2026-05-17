<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
	<Section spacing="lg">
		<Container size="xl">
			<div class="flex items-center gap-4 section-no text-sand60">
				<span>§ I</span>
				<span class="block h-px w-16 bg-sand40" />
				<span class="eyebrow">{{ t('about.mission.title') }}</span>
			</div>

			<div class="mt-12 grid gap-px bg-sand20 sm:grid-cols-2">
				<div class="relative bg-sand00 p-10 sm:p-12">
					<div class="flex items-center gap-3">
						<span class="font-mono text-xs tabular text-sand40">01 / 02</span>
						<span class="block h-px flex-1 bg-sand20" />
						<span class="eyebrow text-terracotta80">{{ t('about.mission.vision_label') }}</span>
					</div>
					<p class="mt-8 font-display text-3xl leading-tight text-sand100 sm:text-4xl">
						<span class="font-display-italic">"</span>{{ t('about.mission.vision_body') }}<span class="font-display-italic">"</span>
					</p>
				</div>
				<div class="relative bg-sand00 p-10 sm:p-12">
					<div class="flex items-center gap-3">
						<span class="font-mono text-xs tabular text-sand40">02 / 02</span>
						<span class="block h-px flex-1 bg-sand20" />
						<span class="eyebrow text-olive60">{{ t('about.mission.mission_label') }}</span>
					</div>
					<p class="mt-8 font-display text-3xl leading-tight text-sand100 sm:text-4xl">
						<span class="font-display-italic">"</span>{{ t('about.mission.mission_body') }}<span class="font-display-italic">"</span>
					</p>
				</div>
			</div>
		</Container>
	</Section>
</template>
