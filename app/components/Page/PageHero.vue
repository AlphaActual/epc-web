<script setup lang="ts">
defineProps({
	eyebrow: { type: String, required: true },
	title: { type: String, required: true },
	subtitle: { type: String, default: null },
	number: { type: String, default: null },
});
</script>

<template>
	<section class="relative isolate overflow-hidden bg-sand05">
		<div class="grain absolute inset-0 opacity-40" aria-hidden="true" />

		<Container size="xl" class="relative">
			<div class="flex items-center justify-between gap-4 border-b border-sand20 py-4 text-sand60">
				<div class="flex items-center gap-3 eyebrow">
					<span class="block h-px w-8 bg-sand40" aria-hidden="true" />
					<span>{{ eyebrow }}</span>
				</div>
				<div class="eyebrow text-sand60">
					<span class="hidden sm:inline">EST. MMIX</span>
					<span class="text-sand40 mx-2 hidden sm:inline" aria-hidden="true">·</span>
					<span>{{ number ?? 'VOL. I' }}</span>
				</div>
			</div>

			<div class="grid gap-10 py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
				<div class="lg:col-span-9">
					<h1 class="font-display text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.98] tracking-tight text-sand100">
						{{ title }}
					</h1>
					<p v-if="subtitle" class="mt-8 max-w-2xl border-l-2 border-terracotta60 pl-5 text-lg leading-relaxed text-sand80 sm:text-xl">
						{{ subtitle }}
					</p>
				</div>
			</div>
		</Container>
	</section>
</template>
