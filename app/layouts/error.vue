<script lang="ts" setup>
const error = useError().value;
const config = useRuntimeConfig();
const { t } = useI18n();

useSeoMeta({
	title: 'Error | ' + config.public.appName,
	ogTitle: 'Error | ' + config.public.appName,
});
</script>

<template>
	<div class="flex min-h-screen flex-col bg-sand05">
		<LayoutHeader />
		<main class="flex flex-1 items-center justify-center px-5 py-20">
			<div v-if="error" class="text-center">
				<p class="font-serif text-7xl font-bold text-terracotta60">
					{{ 'status' in error ? error.status : '500' }}
				</p>
				<h1 class="mt-4 font-serif text-2xl font-semibold text-sand100">
					{{ error.statusText || error.message }}
				</h1>
				<Button to="index" variant="primary" size="md" class="mt-8">
					{{ t('nav.home') }}
				</Button>
			</div>
		</main>
		<LayoutFooter />
	</div>
</template>
