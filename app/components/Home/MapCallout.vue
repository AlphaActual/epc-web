<script setup lang="ts">
import { contactInfo } from '~/data/contact';

const { t } = useI18n();
</script>

<template>
	<Section tone="terracotta" spacing="md">
		<Container size="xl">
			<div class="grid items-center gap-10 lg:grid-cols-2">
				<div>
					<SectionHeading
						tone="light"
						:eyebrow="t('home.map_callout.eyebrow')"
						:title="t('home.map_callout.title')"
						:subtitle="t('home.map_callout.body')"
					/>
					<div class="mt-8 space-y-3 text-white/90">
						<p class="flex items-start gap-2.5">
							<Icon name="map_pin" :size="18" class="mt-0.5 shrink-0 text-terracotta20" />
							<span>{{ contactInfo.address }}, {{ contactInfo.postal_code }} {{ contactInfo.city }}</span>
						</p>
						<p class="flex items-start gap-2.5">
							<Icon name="clock" :size="18" class="mt-0.5 shrink-0 text-terracotta20" />
							<span>{{ t('contact.info.hours_value') }}</span>
						</p>
					</div>
					<div class="mt-8">
						<a
							:href="contactInfo.map_url"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-terracotta80 transition-colors hover:bg-sand10"
						>
							{{ t('home.map_callout.cta') }}
							<Icon name="arrow_right" :size="14" />
						</a>
					</div>
				</div>

				<div class="overflow-hidden rounded-2xl border-4 border-white/20 shadow-layer-3">
					<iframe
						:src="contactInfo.map_embed_url"
						class="aspect-[4/3] w-full"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="EPC Rovinj — Google Maps"
					/>
				</div>
			</div>
		</Container>
	</Section>
</template>
