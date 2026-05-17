<script setup lang="ts">
import { contactInfo } from '~/data/contact';

const { t } = useI18n();
</script>

<template>
	<section class="relative isolate overflow-hidden bg-terracotta100 text-sand00">
		<div class="grain absolute inset-0 opacity-50" aria-hidden="true" />
		<div class="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-terracotta80/40 blur-3xl" aria-hidden="true" />
		<div class="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-terracotta60/30 blur-3xl" aria-hidden="true" />

		<Container size="xl" class="relative py-24 sm:py-28 lg:py-32">
			<div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
				<div class="lg:col-span-6">
					<div class="flex items-center gap-4 section-no text-sand20">
						<span>№ 05</span>
						<span class="block h-px w-16 bg-sand20/40" />
						<span class="eyebrow">{{ t('home.map_callout.eyebrow') }}</span>
					</div>

					<h2 class="mt-8 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] tracking-tight text-sand00">
						{{ t('home.map_callout.title') }}
					</h2>

					<p class="mt-8 max-w-md text-lg leading-relaxed text-sand20">
						{{ t('home.map_callout.body') }}
					</p>

					<dl class="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2">
						<div class="border-t border-sand20/30 pt-4">
							<dt class="eyebrow text-terracotta40">{{ t('contact.info.address_label') }}</dt>
							<dd class="mt-2 leading-relaxed text-sand00">
								{{ contactInfo.address }}<br />
								{{ contactInfo.postal_code }} {{ contactInfo.city }}
							</dd>
						</div>
						<div class="border-t border-sand20/30 pt-4">
							<dt class="eyebrow text-terracotta40">{{ t('contact.info.hours_label') }}</dt>
							<dd class="mt-2 leading-relaxed text-sand00">{{ t('contact.info.hours_value') }}</dd>
						</div>
					</dl>

					<div class="mt-12">
						<a
							:href="contactInfo.map_url"
							target="_blank"
							rel="noopener noreferrer"
							class="group inline-flex items-center gap-4 bg-sand00 px-8 py-4 font-medium text-terracotta100 transition-colors hover:bg-sand10"
						>
							{{ t('home.map_callout.cta') }}
							<span class="flex size-7 items-center justify-center rounded-full bg-terracotta100 text-sand00 transition-transform group-hover:translate-x-1">
								<Icon name="arrow_right" :size="12" aria-hidden="true" />
							</span>
						</a>
					</div>
				</div>

				<div class="relative lg:col-span-6">
					<div class="absolute -inset-3 border border-sand20/30 lg:-inset-4" aria-hidden="true" />
					<div class="absolute -top-3 left-0 right-0 h-px bg-sand20/40 lg:-top-4" aria-hidden="true" />
					<div class="relative overflow-hidden bg-sand100">
						<iframe
							:src="contactInfo.map_embed_url"
							class="aspect-[4/3] w-full grayscale"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							title="EPC Rovinj — Google Maps"
						/>
					</div>
					<div class="mt-4 flex items-center justify-between font-mono text-xs text-sand20/70">
						<span class="tabular">45.0811° N · 13.6387° E</span>
						<span>{{ t('church.name') }}</span>
					</div>
				</div>
			</div>
		</Container>
	</section>
</template>
