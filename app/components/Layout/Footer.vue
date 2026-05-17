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
	<footer class="relative isolate overflow-hidden bg-terracotta100 text-sand20">
		<div class="grain absolute inset-0 opacity-40" aria-hidden="true" />

		<Container size="xl" class="relative">
			<!-- Top masthead row -->
			<div class="flex flex-col gap-6 border-b border-sand80/60 py-10 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p class="font-mono text-xs uppercase tracking-[0.22em] text-sand40">— {{ t('church.full_name') }}</p>
					<p class="mt-4 font-display text-5xl leading-none text-sand00 sm:text-6xl lg:text-7xl">
						{{ t('church.tagline') }}<span class="text-terracotta40">.</span>
					</p>
				</div>
				<div class="font-mono text-xs uppercase tracking-[0.22em] text-sand40">
					<span>EST. MMIX · ROVINJ · HR</span>
				</div>
			</div>

			<div class="grid gap-12 py-16 lg:grid-cols-12">
				<div class="lg:col-span-5">
					<p class="max-w-md text-sm leading-relaxed text-sand40">{{ t('footer.about_blurb') }}</p>

					<div class="mt-8 flex items-center gap-3">
						<a
							v-for="s in socialLinks"
							:key="s.platform"
							:href="s.url"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex size-10 items-center justify-center border border-sand80 text-sand20 transition-colors hover:border-terracotta40 hover:text-terracotta40"
							:aria-label="s.platform"
						>
							<Icon :name="s.platform" :size="16" />
						</a>
					</div>
				</div>

				<div class="lg:col-span-3">
					<h3 class="eyebrow text-sand60">{{ t('footer.nav_title') }}</h3>
					<ul class="mt-6 space-y-3">
						<li v-for="item in navItems" :key="item.to">
							<TLink :to="item.to" class="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-sand20 transition-colors hover:text-terracotta40">
								<span class="opacity-0 transition-opacity group-hover:opacity-100">→</span>
								{{ item.label }}
							</TLink>
						</li>
					</ul>
				</div>

				<div class="lg:col-span-4">
					<h3 class="eyebrow text-sand60">{{ t('footer.contact_title') }}</h3>
					<ul class="mt-6 space-y-4 text-sm">
						<li>
							<div class="font-mono text-[10px] uppercase tracking-[0.18em] text-sand60">{{ t('contact.info.address_label') }}</div>
							<div class="mt-1.5 text-sand20">
								{{ contactInfo.address }}<br />
								{{ contactInfo.postal_code }} {{ contactInfo.city }}
							</div>
						</li>
						<li>
							<div class="font-mono text-[10px] uppercase tracking-[0.18em] text-sand60">{{ t('contact.info.phone_label') }}</div>
							<a :href="`tel:${contactInfo.phone}`" class="mt-1.5 inline-block tabular text-sand20 hover:text-terracotta40">{{ contactInfo.phone }}</a>
						</li>
						<li>
							<div class="font-mono text-[10px] uppercase tracking-[0.18em] text-sand60">{{ t('contact.info.email_label') }}</div>
							<a :href="`mailto:${contactInfo.email}`" class="mt-1.5 inline-block text-sand20 hover:text-terracotta40">{{ contactInfo.email }}</a>
						</li>
						<li>
							<div class="font-mono text-[10px] uppercase tracking-[0.18em] text-sand60">{{ t('contact.info.hours_label') }}</div>
							<div class="mt-1.5 text-sand20">{{ t('contact.info.hours_value') }}</div>
						</li>
					</ul>
				</div>
			</div>

			<div class="flex flex-col items-start justify-between gap-3 border-t border-sand80/60 py-6 font-mono text-[10px] uppercase tracking-[0.18em] text-sand60 sm:flex-row sm:items-center">
				<p>© {{ year }} EPC ROVINJ · {{ t('footer.rights') }}</p>
				<p class="inline-flex items-center gap-2">
					<Icon name="heart" :size="10" class="text-terracotta40" />
					{{ t('footer.made_with') }}
				</p>
			</div>
		</Container>
	</footer>
</template>
