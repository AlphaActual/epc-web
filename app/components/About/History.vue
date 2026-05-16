<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
	<Section spacing="md">
		<Container size="lg">
			<div class="grid items-start gap-12 lg:grid-cols-3">
				<h2 class="font-serif text-3xl font-semibold leading-tight text-sand100 sm:text-4xl">
					{{ t('about.history.title') }}
				</h2>
				<div class="space-y-5 text-base leading-relaxed text-sand80 lg:col-span-2">
					<p>{{ t('about.history.body_1') }}</p>
					<p>{{ t('about.history.body_2') }}</p>
					<p>{{ t('about.history.body_3') }}</p>
				</div>
			</div>
		</Container>
	</Section>
</template>
