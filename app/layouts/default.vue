<script lang="ts" setup>
const url = useRequestURL();
const config = useRuntimeConfig();
const img = useImage();
const { t } = useI18n();

const i18nHead = useLocaleHead();

useHead({
	...i18nHead.value
});

useSeoMeta({
	titleTemplate: titleChunk => (titleChunk ? `${titleChunk} | ${config.public.appName}` : config.public.appName),
	ogTitle: t('seo.title') + ' | ' + config.public.appName,
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
		name: config.public.appName,
		logo: img('/img/logo.png'),
	}),
]);

</script>

<template>
	<div>
		
		<NuxtPage />
		
	</div>
</template>
