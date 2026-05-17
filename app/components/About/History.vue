<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
	<Section spacing="lg">
		<Container size="xl">
			<div class="flex items-center gap-4 section-no text-sand60">
				<span>§ II</span>
				<span class="block h-px w-16 bg-sand40" />
				<span class="eyebrow">{{ t('about.history.title') }}</span>
			</div>

			<div class="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
				<div class="lg:col-span-5">
					<h2 class="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] tracking-tight text-sand100">
						{{ t('about.history.title') }}
					</h2>
					<div class="mt-8 flex items-center gap-3 eyebrow text-sand60">
						<span class="block h-px w-12 bg-terracotta60" />
						<span>EST. <span class="tabular text-sand100">MMIX</span> · ROVINJ</span>
					</div>
				</div>
				<div class="lg:col-span-7">
					<div class="space-y-8 text-lg leading-relaxed text-sand80">
						<p class="relative pl-8">
							<span class="absolute left-0 top-3 font-mono text-xs text-sand40 tabular">01</span>
							{{ t('about.history.body_1') }}
						</p>
						<p class="relative pl-8">
							<span class="absolute left-0 top-3 font-mono text-xs text-sand40 tabular">02</span>
							{{ t('about.history.body_2') }}
						</p>
						<p class="relative pl-8">
							<span class="absolute left-0 top-3 font-mono text-xs text-sand40 tabular">03</span>
							{{ t('about.history.body_3') }}
						</p>
					</div>
				</div>
			</div>
		</Container>
	</Section>
</template>
