<script setup lang="ts">
import { contactInfo } from '~/data/contact';

const { t } = useI18n();
</script>

<template>
	<section class="relative">
		<Container size="xl">
			<div class="relative -mt-px overflow-hidden border-y border-sand20 bg-terracotta100 text-sand20">
				<div class="grain absolute inset-0 opacity-60" aria-hidden="true" />

				<div class="relative grid items-stretch gap-px bg-sand80/30 sm:grid-cols-[auto_1fr_auto]">
					<!-- Day column -->
					<div class="flex items-center gap-4 bg-terracotta100 px-6 py-6 sm:px-8 sm:py-7">
						<div class="font-display text-5xl leading-none text-terracotta40 sm:text-6xl">10</div>
						<div class="flex flex-col">
							<span class="eyebrow text-terracotta40">{{ t('home.next_service.label') }}</span>
							<span class="mt-1 text-base font-medium text-white">{{ t('home.next_service.every_sunday') }}</span>
							<span class="font-mono text-xs text-sand40">{{ t('home.next_service.time') }} {{ t('home.next_service.timezone') }}</span>
						</div>
					</div>

					<!-- Location -->
					<div class="flex items-center gap-3 bg-terracotta100 px-6 py-6 sm:px-8 sm:py-7">
						<Icon name="map_pin" :size="18" class="shrink-0 text-terracotta40" aria-hidden="true" />
						<div class="min-w-0">
							<span class="eyebrow text-sand40">{{ t('home.next_service.venue') }}</span>
							<p class="mt-1 truncate text-sm font-medium text-white">{{ t('home.next_service.location') }}</p>
						</div>
					</div>

					<!-- CTA -->
					<a
						:href="contactInfo.map_url"
						target="_blank"
						rel="noopener noreferrer"
						class="group inline-flex items-center justify-between gap-6 bg-terracotta60 px-6 py-6 text-white transition-colors hover:bg-terracotta80 sm:px-8 sm:py-7"
					>
						<span class="font-medium">{{ t('home.next_service.directions') }}</span>
						<span class="flex size-9 items-center justify-center rounded-full border border-white/30 transition-transform group-hover:translate-x-1">
							<Icon name="arrow_right" :size="14" aria-hidden="true" />
						</span>
					</a>
				</div>
			</div>
		</Container>
	</section>
</template>
