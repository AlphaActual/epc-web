<script setup lang="ts">
defineProps({
	eyebrow: { type: String, required: true },
	title: { type: String, required: true },
});

const { t } = useI18n();
</script>

<template>
	<div>
		<PageHero :eyebrow="eyebrow" :title="title" />
		<Section spacing="md">
			<Container size="md">
				<div class="rounded-2xl border border-dashed border-sand20 bg-sand00 px-8 py-16 text-center">
					<span class="inline-flex size-16 items-center justify-center rounded-full bg-terracotta05">
						<Icon name="clock" :size="28" class="text-terracotta60" />
					</span>
					<h2 class="mt-6 font-serif text-2xl font-semibold text-sand100">{{ t('common.coming_soon') }}</h2>
					<p class="mx-auto mt-3 max-w-md text-base leading-relaxed text-sand60">
						{{ t('common.coming_soon_body') }}
					</p>
					<div class="mt-8">
						<Button to="contact" variant="primary" size="md">
							{{ t('common.contact_us') }}
							<Icon name="arrow_right" :size="14" />
						</Button>
					</div>
				</div>
			</Container>
		</Section>
	</div>
</template>
