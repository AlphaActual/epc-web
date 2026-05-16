<script setup lang="ts">
import { sermons } from '~/data/sermons';

const { t } = useI18n();

const latestSermons = computed(() => sermons.slice(0, 3));
</script>

<template>
	<Section tone="sand" spacing="lg">
		<Container size="xl">
			<div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
				<SectionHeading :eyebrow="t('home.latest_sermons.eyebrow')" :title="t('home.latest_sermons.title')" />
				<Button to="sermons" variant="outline" size="md" class="hidden sm:inline-flex">
					{{ t('home.latest_sermons.view_all') }}
					<Icon name="arrow_right" :size="14" />
				</Button>
			</div>

			<div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<SermonCard v-for="sermon in latestSermons" :key="sermon.id" :sermon="sermon" />
			</div>

			<div class="mt-8 flex sm:hidden">
				<Button to="sermons" variant="outline" size="md">
					{{ t('home.latest_sermons.view_all') }}
					<Icon name="arrow_right" :size="14" />
				</Button>
			</div>
		</Container>
	</Section>
</template>
