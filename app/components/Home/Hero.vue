<script setup lang="ts">
import type { IconName } from '~~/@types/ui';

const { t } = useI18n();

type HeroPoint = {
	icon: IconName;
	text: string;
};

const quickFacts = computed<HeroPoint[]>(() => [
	{ icon: 'calendar', text: t('home.next_service.every_sunday') },
	{ icon: 'clock', text: t('home.next_service.time') },
	{ icon: 'map_pin', text: t('home.next_service.location') },
]);
</script>

<template>
	<section class="relative overflow-hidden bg-bg">
		<div class="absolute inset-0 bg-linear-to-br from-white/95 via-sand05 to-sand05/98" />
		<div class="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_top_left,var(--color-terracotta20)_0%,transparent_32%),radial-gradient(circle_at_82%_18%,var(--color-terracotta05)_0%,transparent_28%)]" />
		<div class="absolute inset-y-0 right-0 hidden w-[44%] border-l border-sand20/80 bg-white/35 lg:block" aria-hidden="true" />
		<div class="absolute left-0 top-20 h-px w-24 bg-sand20 sm:w-40" aria-hidden="true" />
		<div class="absolute bottom-24 right-0 h-px w-24 bg-sand20 sm:w-48" aria-hidden="true" />
		<div class="absolute -left-24 top-12 size-72 rounded-full bg-terracotta20/60 blur-3xl" aria-hidden="true" />
		<div class="absolute -right-20 top-1/3 size-80 rounded-full bg-terracotta40/25 blur-3xl" aria-hidden="true" />

		<Container size="xl">
			<div class="relative grid gap-14 pb-24 pt-16 sm:pt-20 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center lg:gap-16 lg:pb-32">
				<div class="relative z-10 max-w-3xl">
					<span class="inline-flex items-center gap-2 rounded-full border border-terracotta20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-terracotta80 shadow-layer-1 backdrop-blur-sm sm:text-sm">
						<span class="size-2 rounded-full bg-terracotta60" aria-hidden="true" />
						{{ t('home.hero.eyebrow') }}
					</span>

					<h1 class="mt-8 max-w-4xl font-serif text-5xl font-semibold leading-[0.95] text-sand100 sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
						{{ t('home.hero.title_lead') }}
						<span class="mt-2 block italic text-primary">{{ t('home.hero.title_accent') }}</span>
					</h1>

					<p class="mt-6 max-w-2xl text-lg leading-8 text-sand80 sm:text-xl">
						{{ t('home.hero.subtitle') }}
					</p>

					<div class="mt-10 flex flex-wrap items-center gap-4">
						<Button to="contact" variant="primary" size="lg">
							{{ t('home.hero.cta_primary') }}
							<Icon name="arrow_right" :size="16" aria-hidden="true" />
						</Button>
						<Button to="sermons" variant="outline" size="lg" class="border-sand20! bg-white/70! text-sand100! hover:bg-white! hover:border-sand40!">
							<Icon name="play" :size="14" aria-hidden="true" />
							{{ t('home.hero.cta_secondary') }}
						</Button>
					</div>

					<div class="mt-12 flex flex-wrap gap-3 border-t border-sand20 pt-8">
						<div v-for="fact in quickFacts" :key="fact.text" class="inline-flex items-center gap-3 rounded-full border border-sand20 bg-white/85 px-4 py-3 text-sm font-medium text-sand80 shadow-layer-1 backdrop-blur-sm">
							<span class="flex size-9 items-center justify-center rounded-full bg-terracotta05 text-terracotta60">
								<Icon :name="fact.icon" :size="16" aria-hidden="true" />
							</span>
							<span>{{ fact.text }}</span>
						</div>
					</div>
				</div>

				<div class="relative z-10 lg:pl-6">
					<div class="absolute -left-4 top-8 hidden size-32 rounded-full border border-white/80 bg-white/40 blur-2xl lg:block" aria-hidden="true" />
					<div class="absolute -right-8 bottom-20 hidden size-44 rounded-full bg-terracotta20/75 blur-3xl lg:block" aria-hidden="true" />

					<div class="relative overflow-hidden rounded-4xl border border-white/80 bg-sand100 shadow-layer-3">
						<div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,25,23,0.04)_0%,rgba(28,25,23,0.7)_100%)]" aria-hidden="true" />
						<div class="aspect-4/5 sm:aspect-16/12 lg:aspect-4/5">
							<Image
								src="/img/rovinj.jpg"
								fit="cover"
								class="size-full object-cover"
								:alt="t('home.hero.image_alt')"
								priority
							/>
						</div>

						<div class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
							<div class="max-w-md rounded-3xl border border-white/15 bg-sand100/65 p-6 text-white shadow-layer-2 backdrop-blur-sm">
								<p class="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
									{{ t('church.name') }}
								</p>
								<p class="mt-3 font-serif text-2xl leading-tight sm:text-3xl">
									{{ t('home.hero.side_title') }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</section>
</template>
