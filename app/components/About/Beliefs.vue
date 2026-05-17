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
		<Container size="xl">
			<div class="flex items-center gap-4 section-no text-sand60">
				<span>§ III</span>
				<span class="block h-px w-16 bg-sand40" />
				<span class="eyebrow">{{ t('about.beliefs.title') }}</span>
			</div>

			<div class="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
				<div class="lg:col-span-5">
					<h2 class="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] tracking-tight text-sand100">
						{{ t('about.beliefs.title') }}
					</h2>
					<p class="mt-8 max-w-md text-lg leading-relaxed text-sand80">
						{{ t('about.beliefs.intro') }}
					</p>
				</div>
				<div class="lg:col-span-7">
					<ol class="space-y-px">
						<li
							v-for="(b, idx) in beliefs"
							:key="b.key"
							class="group flex flex-col gap-3 border-t border-sand20 py-5 transition-colors hover:border-terracotta60 last:border-b sm:flex-row sm:gap-8"
						>
							<div class="flex shrink-0 items-baseline gap-3 sm:w-44">
								<span class="font-mono text-xs text-sand40 tabular">{{ String(idx + 1).padStart(2, '0') }}</span>
								<h3 class="font-display text-xl text-sand100 sm:text-2xl">
									{{ t(`about.beliefs.items.${b.key}.title`) }}
								</h3>
							</div>
							<p class="text-sm leading-relaxed text-sand60 sm:text-base">
								{{ t(`about.beliefs.items.${b.key}.body`) }}
							</p>
						</li>
					</ol>
				</div>
			</div>
		</Container>
	</Section>
</template>
