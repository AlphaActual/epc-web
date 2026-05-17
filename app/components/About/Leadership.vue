<script setup lang="ts">
import { leadership } from '~/data/leadership';

const { t } = useI18n();

function initials(name: string) {
	return name
		.split(' ')
		.map(p => p[0])
		.slice(0, 2)
		.join('')
		.toUpperCase();
}
</script>

<template>
	<Section spacing="lg">
		<Container size="xl">
			<div class="flex items-center gap-4 section-no text-sand60">
				<span>§ IV</span>
				<span class="block h-px w-16 bg-sand40" />
				<span class="eyebrow">{{ t('about.leadership.title') }}</span>
			</div>

			<div class="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
				<div class="max-w-2xl">
					<h2 class="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] tracking-tight text-sand100">
						{{ t('about.leadership.title') }}
					</h2>
					<p class="mt-6 max-w-xl text-lg leading-relaxed text-sand80">
						{{ t('about.leadership.subtitle') }}
					</p>
				</div>
			</div>

			<div class="mt-14 grid gap-px bg-sand20 sm:grid-cols-2 lg:grid-cols-4">
				<article
					v-for="(member, idx) in leadership"
					:key="member.id"
					class="group relative flex flex-col bg-sand00 transition-colors hover:bg-sand10"
				>
					<div class="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-terracotta100 text-terracotta40">
						<div class="grain absolute inset-0 opacity-60" aria-hidden="true" />
						<span class="font-display text-7xl tracking-tight">{{ initials(member.name) }}</span>
						<div class="absolute left-4 top-4 inline-flex items-center gap-2 bg-sand00/95 px-2.5 py-1 backdrop-blur-sm">
							<span class="font-mono text-xs font-medium text-sand100 tabular">{{ String(idx + 1).padStart(2, '0') }}</span>
						</div>
					</div>
					<div class="flex flex-1 flex-col gap-2 p-6">
						<p class="eyebrow text-terracotta80">{{ t(member.role_key) }}</p>
						<h3 class="font-display text-2xl leading-tight text-sand100">{{ member.name }}</h3>
						<p class="mt-2 text-sm leading-relaxed text-sand60">{{ t(member.bio_key) }}</p>
					</div>
				</article>
			</div>
		</Container>
	</Section>
</template>
