<script lang="ts" setup>
import type { NuxtLinkProps } from '#app';

type TLinkProps = Pick<NuxtLinkProps, 'external' | 'target' | 'to'>;

const localePath = useLocalePath();

const props = defineProps<TLinkProps>();

const isExternal = props.external ?? false;

const to = computed(() => (!isExternal && props.to ? localePath(props.to) : props.to));

const target = isExternal ? '_blank' : (props.target ?? undefined);
</script>

<template>
	<NuxtLink v-bind="props" :to="to" :target="target">
		<slot />
	</NuxtLink>
</template>
