<script lang="ts" setup>
const { t } = useI18n();

definePageMeta({
	name: 'prayer',
});

defineI18nRoute({
	paths: {
		hr: '/molitvene-potrebe',
		en: '/prayer-requests',
	},
});

useSeoMeta({
	title: t('nav.prayer'),
});
</script>

<template>
	<PageStub :eyebrow="t('nav.prayer')" :title="t('nav.prayer')" />
</template>
