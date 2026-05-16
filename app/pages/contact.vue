<script lang="ts" setup>
import { contactInfo, socialLinks } from '~/data/contact';

const { t } = useI18n();

definePageMeta({
	name: 'contact',
});

defineI18nRoute({
	paths: {
		hr: '/kontakt',
		en: '/contact',
	},
});

useSeoMeta({
	title: t('contact.hero.title'),
	description: t('contact.hero.subtitle'),
});
</script>

<template>
	<div>
		<PageHero :eyebrow="t('contact.hero.eyebrow')" :title="t('contact.hero.title')" :subtitle="t('contact.hero.subtitle')" />

		<Section spacing="md">
			<Container size="xl">
				<div class="grid gap-10 lg:grid-cols-5">
					<div class="lg:col-span-2 space-y-6">
						<ContactInfo />

						<div class="rounded-2xl bg-sand00 p-5 shadow-layer-1">
							<h3 class="font-serif text-lg font-semibold text-sand100">{{ t('contact.socials.title') }}</h3>
							<p class="mt-1 text-sm text-sand60">{{ t('contact.socials.subtitle') }}</p>
							<div class="mt-4 flex items-center gap-3">
								<a
									v-for="s in socialLinks"
									:key="s.platform"
									:href="s.url"
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex size-11 items-center justify-center rounded-full bg-terracotta05 text-terracotta80 transition-colors hover:bg-terracotta60 hover:text-white"
									:aria-label="s.platform"
								>
									<Icon :name="s.platform" :size="20" />
								</a>
							</div>
						</div>
					</div>

					<div class="lg:col-span-3">
						<ContactForm />
					</div>
				</div>

				<div class="mt-12 overflow-hidden rounded-2xl shadow-layer-2">
					<iframe
						:src="contactInfo.map_embed_url"
						class="aspect-[16/7] w-full"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="EPC Rovinj — Google Maps"
					/>
				</div>
			</Container>
		</Section>
	</div>
</template>
