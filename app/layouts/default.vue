<script lang="ts" setup>
const url = useRequestURL();
const config = useRuntimeConfig();
const img = useImage();
const { t } = useI18n();

const i18nHead = useLocaleHead();

useHead({
	...i18nHead.value,
});

useSeoMeta({
	titleTemplate: titleChunk => (titleChunk ? `${titleChunk} | ${config.public.appName}` : t('seo.title')),
	ogTitle: t('seo.title'),
	description: t('seo.description'),
	ogDescription: t('seo.description'),
	ogImage: url.origin + img('/img/og-image.jpg'),
});

useSchemaOrg([
	defineWebSite({
		name: config.public.appName,
		description: t('seo.description'),
	}),

	defineOrganization({
		name: t('church.full_name'),
		logo: img('/img/logo.png'),
	}),
]);
</script>

<template>
	<div class="flex min-h-screen flex-col bg-bg">
		<LayoutHeader />
		<main class="flex-1">
			<NuxtPage />
		</main>
		<LayoutFooter />
		<PaletteSwitcher />
	</div>
</template>
