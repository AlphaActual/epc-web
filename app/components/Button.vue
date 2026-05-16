<script setup lang="ts">
import type { ButtonSize, ButtonVariant } from '~~/@types/ui';

const props = defineProps({
	variant: { type: String as () => ButtonVariant, default: 'primary' },
	size: { type: String as () => ButtonSize, default: 'md' },
	to: { type: String, default: null },
	href: { type: String, default: null },
	external: { type: Boolean, default: false },
	type: { type: String, default: 'button' },
	disabled: { type: Boolean, default: false },
	ariaLabel: { type: String, default: null },
});

const variantClasses: Record<ButtonVariant, string> = {
	primary: 'bg-terracotta60 text-white hover:bg-terracotta80 active:bg-terracotta100 shadow-layer-1',
	secondary: 'bg-olive60 text-white hover:bg-olive80 active:bg-olive100 shadow-layer-1',
	ghost: 'bg-transparent text-terracotta60 hover:bg-terracotta05',
	outline: 'bg-transparent text-sand100 border border-sand20 hover:bg-sand10 hover:border-sand40',
};

const sizeClasses: Record<ButtonSize, string> = {
	sm: 'text-sm px-4 py-2 rounded-md gap-1.5',
	md: 'text-base px-5 py-2.5 rounded-lg gap-2',
	lg: 'text-base px-6 py-3.5 rounded-lg gap-2 font-semibold',
};

const baseClasses =
	'inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta60 focus-visible:ring-offset-2 focus-visible:ring-offset-sand05 disabled:opacity-50 disabled:pointer-events-none';

const classes = computed(() => [baseClasses, variantClasses[props.variant], sizeClasses[props.size]]);
</script>

<template>
	<TLink v-if="to" :to="to" :external="external" :class="classes" :aria-label="ariaLabel">
		<slot />
	</TLink>
	<a v-else-if="href" :href="href" :target="external ? '_blank' : undefined" :rel="external ? 'noopener noreferrer' : undefined" :class="classes" :aria-label="ariaLabel">
		<slot />
	</a>
	<button v-else :type="(type as 'button' | 'submit' | 'reset')" :disabled="disabled" :class="classes" :aria-label="ariaLabel">
		<slot />
	</button>
</template>
