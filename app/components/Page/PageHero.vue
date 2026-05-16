<script setup lang="ts">
defineProps({
	eyebrow: { type: String, required: true },
	title: { type: String, required: true },
	subtitle: { type: String, default: null },
});
</script>

<template>
	<section class="relative overflow-hidden bg-sand05 pb-12 pt-16 sm:pb-16 sm:pt-24">
		<div class="absolute inset-0 -z-10">
			<div class="absolute -top-32 right-1/4 size-72 rounded-full bg-terracotta20 blur-3xl opacity-40" />
			<div class="absolute -bottom-32 left-1/4 size-72 rounded-full bg-olive20 blur-3xl opacity-40" />
		</div>

		<Container size="lg">
			<div class="max-w-3xl">
				<p class="text-sm font-semibold uppercase tracking-wider text-terracotta60">{{ eyebrow }}</p>
				<h1 class="mt-3 font-serif text-4xl font-bold leading-[1.1] text-sand100 sm:text-5xl lg:text-6xl">
					{{ title }}
				</h1>
				<p v-if="subtitle" class="mt-5 text-lg leading-relaxed text-sand80">
					{{ subtitle }}
				</p>
			</div>
		</Container>
	</section>
</template>
