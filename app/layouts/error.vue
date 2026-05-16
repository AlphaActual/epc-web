<script lang="ts" setup>
const error = useError().value;
const config = useRuntimeConfig();

useSeoMeta({
	title: 'Error | ' + config.public.appName,
	ogTitle: 'Error | ' + config.public.appName,
});
</script>

<template>
	<div class="error-wrap">
		<Header />

		<main class="error-wrap__main">
			<div v-if="error">
				<h1>{{ 'status' in error ? error.status : 'Unknown' }}: {{ error.statusText }}</h1>
			</div>
		</main>

		<Footer />
	</div>
</template>
