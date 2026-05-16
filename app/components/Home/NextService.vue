<script setup lang="ts">
import { contactInfo } from '~/data/contact';

const { t } = useI18n();
</script>

<template>
	<section class="relative -mt-8 sm:-mt-12 lg:-mt-16">
		<Container size="xl">
			<div class="rounded-2xl bg-sand100 px-6 py-7 text-white shadow-layer-3 sm:px-10 sm:py-8">
				<div class="grid items-center gap-6 sm:grid-cols-3">
					<div>
						<p class="text-xs font-semibold uppercase tracking-wider text-terracotta40">
							{{ t('home.next_service.label') }}
						</p>
						<p class="mt-1.5 font-serif text-2xl font-semibold">
							{{ t('home.next_service.every_sunday') }}
						</p>
						<p class="mt-0.5 text-sand20">
							{{ t('home.next_service.time') }}
						</p>
					</div>

					<div class="flex items-start gap-2.5 text-sand20">
						<Icon name="map_pin" :size="18" class="mt-0.5 shrink-0 text-terracotta40" />
						<span>{{ t('home.next_service.location') }}</span>
					</div>

					<div class="flex sm:justify-end">
						<a
							:href="contactInfo.map_url"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 rounded-lg bg-terracotta60 px-5 py-3 font-medium text-white transition-colors hover:bg-terracotta80"
						>
							{{ t('home.next_service.directions') }}
							<Icon name="arrow_right" :size="14" />
						</a>
					</div>
				</div>
			</div>
		</Container>
	</section>
</template>
