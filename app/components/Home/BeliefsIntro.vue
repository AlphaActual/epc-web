<script setup lang="ts">
const { t } = useI18n();

const tenets = [
	{ key: 'bible', label: 'The Bible' },
	{ key: 'spirit', label: 'Holy Spirit' },
	{ key: 'jesus', label: 'Jesus Christ' },
	{ key: 'church', label: 'The Church' },
];
</script>

<template>
	<section class="relative bg-sand05 py-24 sm:py-32 lg:py-40">
		<Container size="xl">
			<!-- Section marker -->
			<div class="flex items-center gap-4 section-no text-sand60">
				<span>№ 02</span>
				<span class="block h-px w-16 bg-sand40" />
				<span class="eyebrow">{{ t('home.beliefs_intro.eyebrow') }}</span>
			</div>

			<div class="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
				<!-- Big editorial statement -->
				<div class="lg:col-span-8">
					<h2 class="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tight text-sand100">
						<span class="block">{{ t('home.beliefs_intro.title_lead_1') }}</span>
						<span class="font-display-italic block text-terracotta60">{{ t('home.beliefs_intro.title_accent_1') }}</span>
						<span class="block">{{ t('home.beliefs_intro.title_lead_2') }}</span>
						<span class="block">{{ t('home.beliefs_intro.title_lead_3') }} <span class="font-display-italic text-terracotta60">{{ t('home.beliefs_intro.title_accent_3') }}</span></span>
					</h2>

					<div class="mt-12 grid max-w-2xl gap-8 sm:grid-cols-[120px_1fr] sm:gap-12">
						<div class="hidden sm:block">
							<p class="eyebrow text-sand60">— {{ t('home.beliefs_intro.eyebrow') }}</p>
							<div class="mt-3 h-px w-12 bg-terracotta60" aria-hidden="true" />
						</div>
						<p class="text-lg leading-relaxed text-sand80">
							{{ t('home.beliefs_intro.body') }}
						</p>
					</div>

					<div class="mt-10">
						<TLink
							to="about"
							class="group inline-flex items-center gap-4 border-b border-sand100 pb-1 text-sm font-medium uppercase tracking-[0.18em] text-sand100 transition-colors hover:border-terracotta60 hover:text-terracotta60"
						>
							{{ t('home.beliefs_intro.cta') }}
							<Icon name="arrow_right" :size="14" class="transition-transform group-hover:translate-x-1" />
						</TLink>
					</div>
				</div>

				<!-- Numbered tenets -->
				<aside class="lg:col-span-4 lg:border-l lg:border-sand20 lg:pl-12">
					<p class="eyebrow text-sand60">{{ t('home.beliefs_intro.foundations_label') }}</p>
					<ol class="mt-6 space-y-px">
						<li
							v-for="(tenet, idx) in tenets"
							:key="tenet.key"
							class="group flex items-baseline justify-between gap-4 border-b border-sand20 py-4 transition-colors hover:border-terracotta60"
						>
							<div class="flex items-baseline gap-4">
								<span class="font-mono text-xs text-sand40 tabular">{{ String(idx + 1).padStart(2, '0') }}</span>
								<span class="font-display text-2xl text-sand100">{{ t(`about.beliefs.items.${tenet.key}.title`) }}</span>
							</div>
							<Icon name="arrow_right" :size="14" class="shrink-0 text-sand40 transition-all group-hover:translate-x-1 group-hover:text-terracotta60" aria-hidden="true" />
						</li>
					</ol>
				</aside>
			</div>
		</Container>
	</section>
</template>
