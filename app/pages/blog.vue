<script lang="ts" setup>
const { t } = useI18n();

definePageMeta({
	name: 'blog',
});

defineI18nRoute({
	paths: {
		hr: '/blog',
		en: '/blog',
	},
});

useSeoMeta({
	title: t('nav.blog'),
});
</script>

<template>
	<PageStub eyebrow="Blog" :title="t('nav.blog')" />
</template>
