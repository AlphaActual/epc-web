<script setup lang="ts">
import type { IconName } from '~~/@types/ui';

const { t } = useI18n();

type HeroPoint = {
	icon: IconName;
	label: string;
	value: string;
};

const serviceMeta = computed<HeroPoint[]>(() => [
	{ icon: 'calendar', label: t('home.hero.meta_day'), value: t('home.next_service.every_sunday') },
	{ icon: 'clock', label: t('home.hero.meta_time'), value: t('home.next_service.time') },
	{ icon: 'map_pin', label: t('home.hero.meta_place'), value: t('home.next_service.location') },
]);
</script>

<template>
	<section class="relative isolate overflow-hidden bg-sand05 grain">
		<div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-sand20" aria-hidden="true" />

		<Container size="xl" as="div" class="relative">
			<!-- Masthead issue line -->
			<div class="flex items-center justify-between gap-4 border-b border-sand20 py-4 text-sand60">
				<div class="flex flex-wrap items-center gap-x-3 gap-y-1 eyebrow">
					<span>{{ t('home.hero.eyebrow') }}</span>
					<span class="text-sand40" aria-hidden="true">·</span>
					<span class="hidden sm:inline">Rovinj · Istra · Hrvatska</span>
				</div>
				<div class="flex items-center gap-3 eyebrow text-sand60">
					<span class="hidden sm:inline">EST. <span class="text-sand100">MMIX</span></span>
					<span class="text-sand40" aria-hidden="true">·</span>
					<span>VOL. I</span>
				</div>
			</div>

			<div class="relative grid gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-20">
				<!-- Rotated EST. stamp (desktop) -->
				<div class="pointer-events-none absolute -left-2 top-32 hidden lg:flex" aria-hidden="true">
					<div class="text-vertical eyebrow text-sand40 flex items-center gap-3">
						<span class="block size-1 rounded-full bg-terracotta60" />
						{{ t('church.full_name') }}
					</div>
				</div>

				<!-- Headline column -->
				<div class="relative lg:col-span-7 lg:pl-12">
					<div class="flex items-center gap-3 mb-10 section-no text-sand60">
						<span class="block size-1.5 rounded-full bg-terracotta60 animate-pulse" />
						<span class="uppercase">№ 01 / {{ t('home.hero.section_label') }}</span>
						<span class="block h-px w-12 bg-sand20" />
					</div>

					<h1 class="font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.92] tracking-tight text-sand100">
						<span class="block">{{ t('home.hero.title_lead').trim() }}</span>
						<span class="font-display-italic block text-terracotta60">{{ t('home.hero.title_accent') }}</span>
					</h1>

					<div class="mt-10 max-w-xl border-l-2 border-terracotta60 pl-5">
						<p class="text-lg leading-relaxed text-sand80 sm:text-xl">
							{{ t('home.hero.subtitle') }}
						</p>
					</div>

					<div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
						<Button to="contact" variant="primary" size="lg">
							{{ t('home.hero.cta_primary') }}
							<Icon name="arrow_right" :size="16" aria-hidden="true" />
						</Button>
						<TLink
							to="sermons"
							class="group inline-flex items-center gap-3 border-b border-sand40 pb-1 text-sm font-medium text-sand100 transition-colors hover:border-terracotta60 hover:text-terracotta60"
						>
							<span class="flex size-7 items-center justify-center rounded-full bg-terracotta100 text-sand00 transition-colors group-hover:bg-terracotta60">
								<Icon name="play" :size="11" aria-hidden="true" />
							</span>
							{{ t('home.hero.cta_secondary') }}
						</TLink>
					</div>

					<!-- Service meta — typographic spec sheet -->
					<dl class="mt-14 grid max-w-xl gap-x-6 gap-y-4 sm:grid-cols-3">
						<div v-for="fact in serviceMeta" :key="fact.label" class="border-t border-sand20 pt-3">
							<dt class="eyebrow text-sand60">{{ fact.label }}</dt>
							<dd class="mt-1.5 text-sm font-medium text-sand100">{{ fact.value }}</dd>
						</div>
					</dl>
				</div>

				<!-- Image column -->
				<div class="relative lg:col-span-5">
					<div class="relative">
						<!-- Hairline crop frame -->
						<div class="absolute -inset-3 border border-sand20 lg:-inset-4" aria-hidden="true" />
						<div class="absolute -top-3 left-0 right-0 h-px bg-sand40/40 lg:-top-4" aria-hidden="true" />

						<figure class="relative overflow-hidden bg-terracotta100">
							<div class="aspect-[4/5] sm:aspect-[16/12] lg:aspect-[4/5]">
								<Image
									src="/img/rovinj.jpg"
									fit="cover"
									class="size-full object-cover"
									:alt="t('home.hero.image_alt')"
									priority
								/>
							</div>
							<div class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(26,23,20,0.0)_40%,rgba(26,23,20,0.85)_100%)]" aria-hidden="true" />

							<!-- Side label & caption -->
							<div class="absolute inset-x-0 bottom-0 px-6 pb-6 sm:px-8 sm:pb-8">
								<p class="eyebrow text-sand20">— {{ t('home.hero.side_label') }}</p>
								<p class="mt-3 font-display text-2xl leading-tight text-white sm:text-3xl">
									"{{ t('home.hero.side_title') }}"
								</p>
								<div class="mt-4 flex items-center gap-3">
									<span class="block h-px flex-1 bg-white/30" />
									<span class="eyebrow text-white/60">{{ t('church.full_name') }}</span>
								</div>
							</div>

							<!-- Corner brand mark -->
							<div class="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-sand00/90 px-3 py-1.5 backdrop-blur-sm">
								<span class="size-1.5 rounded-full bg-terracotta60 animate-pulse" aria-hidden="true" />
								<span class="eyebrow text-sand100">{{ t('home.hero.live_label') }}</span>
							</div>
						</figure>
					</div>
				</div>
			</div>
		</Container>
	</section>
</template>
