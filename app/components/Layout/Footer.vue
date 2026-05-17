<script setup lang="ts">
import { contactInfo, socialLinks } from '~/data/contact';

const { t } = useI18n();

const navItems = computed(() => [
	{ label: t('nav.home'), to: 'index' },
	{ label: t('nav.about'), to: 'about' },
	{ label: t('nav.services'), to: 'services' },
	{ label: t('nav.sermons'), to: 'sermons' },
	{ label: t('nav.ministries'), to: 'ministries' },
	{ label: t('nav.prayer'), to: 'prayer' },
	{ label: t('nav.give'), to: 'give' },
	{ label: t('nav.contact'), to: 'contact' },
]);

const year = new Date().getFullYear();
</script>

<template>
	<footer class="bg-sand100 text-sand20">
		<Container size="xl">
			<div class="grid gap-12 py-16 lg:grid-cols-4">
				<div class="lg:col-span-2 max-w-md">
					<div class="inline-flex rounded-xl bg-sand10 p-2">
						<Image
							src="/img/epc-rovinj-logo.jpeg"
							:alt="t('church.name')"
							class="h-12 w-auto"
						/>
					</div>
					<p class="mt-5 text-sm leading-relaxed text-sand40">{{ t('footer.about_blurb') }}</p>

					<div class="mt-6 flex items-center gap-3">
						<a
							v-for="s in socialLinks"
							:key="s.platform"
							:href="s.url"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex size-10 items-center justify-center rounded-full bg-sand80 text-sand20 transition-colors hover:bg-terracotta60 hover:text-white"
							:aria-label="s.platform"
						>
							<Icon :name="s.platform" :size="18" />
						</a>
					</div>
				</div>

				<div>
					<h3 class="font-serif text-base font-semibold text-white">{{ t('footer.nav_title') }}</h3>
					<ul class="mt-4 space-y-2.5 text-sm">
						<li v-for="item in navItems" :key="item.to">
							<TLink :to="item.to" class="text-sand40 transition-colors hover:text-white">
								{{ item.label }}
							</TLink>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="font-serif text-base font-semibold text-white">{{ t('footer.contact_title') }}</h3>
					<ul class="mt-4 space-y-3 text-sm text-sand40">
						<li class="flex items-start gap-2.5">
							<Icon name="map_pin" :size="16" class="mt-0.5 shrink-0 text-terracotta40" />
							<span>{{ contactInfo.address }}<br />{{ contactInfo.postal_code }} {{ contactInfo.city }}</span>
						</li>
						<li class="flex items-start gap-2.5">
							<Icon name="phone" :size="16" class="mt-0.5 shrink-0 text-terracotta40" />
							<a :href="`tel:${contactInfo.phone}`" class="hover:text-white">{{ contactInfo.phone }}</a>
						</li>
						<li class="flex items-start gap-2.5">
							<Icon name="mail" :size="16" class="mt-0.5 shrink-0 text-terracotta40" />
							<a :href="`mailto:${contactInfo.email}`" class="hover:text-white">{{ contactInfo.email }}</a>
						</li>
						<li class="flex items-start gap-2.5">
							<Icon name="clock" :size="16" class="mt-0.5 shrink-0 text-terracotta40" />
							<span>{{ t('contact.info.hours_value') }}</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="flex flex-col items-center justify-between gap-3 border-t border-sand80 py-6 text-xs text-sand60 sm:flex-row">
				<p>© {{ year }} EPC Rovinj. {{ t('footer.rights') }}</p>
				<p class="inline-flex items-center gap-1.5">
					<Icon name="heart" :size="12" class="text-terracotta40" />
					{{ t('footer.made_with') }}
				</p>
			</div>
		</Container>
	</footer>
</template>
