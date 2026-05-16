<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
	<Section spacing="lg">
		<Container size="lg">
			<div class="grid items-start gap-12 lg:grid-cols-5">
				<div class="lg:col-span-2">
					<SectionHeading :eyebrow="t('home.beliefs_intro.eyebrow')" :title="t('home.beliefs_intro.title')" />
				</div>

				<div class="lg:col-span-3 lg:pt-12">
					<p class="text-lg leading-relaxed text-sand80">
						{{ t('home.beliefs_intro.body') }}
					</p>
					<div class="mt-8">
						<Button to="about" variant="ghost" size="md">
							{{ t('home.beliefs_intro.cta') }}
							<Icon name="arrow_right" :size="14" />
						</Button>
					</div>
				</div>
			</div>
		</Container>
	</Section>
</template>
