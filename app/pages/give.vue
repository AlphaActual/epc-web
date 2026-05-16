<script lang="ts" setup>
const { t } = useI18n();

definePageMeta({
	name: 'give',
});

defineI18nRoute({
	paths: {
		hr: '/doniraj',
		en: '/give',
	},
});

useSeoMeta({
	title: t('nav.give'),
});
</script>

<template>
	<PageStub :eyebrow="t('nav.give')" :title="t('nav.give')" />
</template>
