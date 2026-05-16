<script setup lang="ts">
import { contactInfo } from '~/data/contact';

const { t } = useI18n();

const items = computed(() => [
	{
		icon: 'map_pin' as const,
		label: t('contact.info.address_label'),
		value: `${contactInfo.address}, ${contactInfo.postal_code} ${contactInfo.city}`,
		href: contactInfo.map_url,
		external: true,
	},
	{
		icon: 'phone' as const,
		label: t('contact.info.phone_label'),
		value: contactInfo.phone,
		href: `tel:${contactInfo.phone}`,
		external: false,
	},
	{
		icon: 'mail' as const,
		label: t('contact.info.email_label'),
		value: contactInfo.email,
		href: `mailto:${contactInfo.email}`,
		external: false,
	},
	{
		icon: 'clock' as const,
		label: t('contact.info.hours_label'),
		value: t('contact.info.hours_value'),
		href: null,
		external: false,
	},
]);
</script>

<template>
	<ul class="space-y-4">
		<li
			v-for="item in items"
			:key="item.label"
			class="flex items-start gap-4 rounded-2xl bg-sand00 p-5 shadow-layer-1"
		>
			<span class="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-terracotta05 text-terracotta80">
				<Icon :name="item.icon" :size="20" />
			</span>
			<div class="flex flex-col">
				<p class="text-xs font-semibold uppercase tracking-wider text-sand60">{{ item.label }}</p>
				<a
					v-if="item.href"
					:href="item.href"
					:target="item.external ? '_blank' : undefined"
					:rel="item.external ? 'noopener noreferrer' : undefined"
					class="mt-1 text-base font-medium text-sand100 hover:text-terracotta60"
				>
					{{ item.value }}
				</a>
				<p v-else class="mt-1 text-base font-medium text-sand100">{{ item.value }}</p>
			</div>
		</li>
	</ul>
</template>
