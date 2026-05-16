<script lang="ts" setup>
const config = useRuntimeConfig();
const { t } = useI18n();
const { versions } = useNuxtApp();

useSeoMeta({
	title: t('seo.title'),
});
</script>

<template>
	<div>
		<h1>{{ config.public.appName }}</h1>

		<h2>
			Nuxt version: <code>{{ versions.nuxt }}</code>
		</h2>

		<h2>
			Vue version: <code>{{ versions.vue }}</code>
		</h2>

		<Image src="/img/logo.png" />
	</div>
</template>
