<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
	<section class="relative overflow-hidden bg-sand05">
		<div class="absolute inset-0 -z-10">
			<div class="absolute -top-32 -right-32 size-96 rounded-full bg-terracotta20 blur-3xl opacity-50" />
			<div class="absolute -bottom-32 -left-32 size-96 rounded-full bg-olive20 blur-3xl opacity-50" />
		</div>

		<Container size="xl">
			<div class="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:py-32">
				<div>
					<span class="inline-flex items-center gap-2 rounded-full bg-terracotta05 px-4 py-1.5 text-sm font-medium text-terracotta80">
						<span class="size-2 animate-pulse rounded-full bg-terracotta60" />
						{{ t('home.hero.eyebrow') }}
					</span>

					<h1 class="mt-6 font-serif text-4xl font-bold leading-[1.1] text-sand100 sm:text-5xl lg:text-6xl">
						{{ t('home.hero.title_lead') }}
						<span class="relative inline-block">
							<span class="relative z-10 italic text-terracotta60">{{ t('home.hero.title_accent') }}</span>
							<span class="absolute bottom-1 left-0 right-0 -z-0 h-3 bg-terracotta20" aria-hidden="true" />
						</span>
					</h1>

					<p class="mt-6 max-w-xl text-lg leading-relaxed text-sand80">
						{{ t('home.hero.subtitle') }}
					</p>

					<div class="mt-8 flex flex-wrap gap-3">
						<Button to="contact" variant="primary" size="lg">
							{{ t('home.hero.cta_primary') }}
							<Icon name="arrow_right" :size="16" />
						</Button>
						<Button to="sermons" variant="outline" size="lg">
							<Icon name="play" :size="14" />
							{{ t('home.hero.cta_secondary') }}
						</Button>
					</div>
				</div>

				<div class="relative">
					<div class="absolute inset-4 -z-10 rounded-3xl bg-terracotta60" />
					<div class="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-olive60 to-olive80 shadow-layer-3">
						<svg class="size-full text-white/10" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
							<defs>
								<pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
									<circle cx="20" cy="20" r="2" fill="currentColor" />
								</pattern>
							</defs>
							<rect width="400" height="500" fill="url(#dots)" />
							<circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" stroke-width="2" opacity="0.5" />
							<circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" stroke-width="2" opacity="0.7" />
						</svg>
						<div class="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white">
							<p class="font-serif text-7xl font-bold italic leading-none">EPC</p>
							<p class="mt-3 text-lg font-medium tracking-wide">Rovinj</p>
							<div class="my-6 h-px w-12 bg-white/40" />
							<p class="max-w-xs text-sm leading-relaxed text-white/80">
								{{ t('church.tagline') }} · Istra · 2009 →
							</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</section>
</template>
