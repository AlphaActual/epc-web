<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();

const isOpen = ref(false);
const isScrolled = ref(false);

const navItems = computed(() => [
	{ key: 'home', label: t('nav.home'), to: 'index' },
	{ key: 'about', label: t('nav.about'), to: 'about' },
	{ key: 'services', label: t('nav.services'), to: 'services' },
	{ key: 'sermons', label: t('nav.sermons'), to: 'sermons' },
	{ key: 'ministries', label: t('nav.ministries'), to: 'ministries' },
	{ key: 'contact', label: t('nav.contact'), to: 'contact' },
]);

function isActive(name: string) {
	const current = (route.name as string | undefined) ?? '';
	if (name === 'index') return current === 'index' || /^index__/.test(current);
	return current === name || current.startsWith(`${name}__`);
}

watch(() => route.fullPath, () => {
	isOpen.value = false;
});

function handleScroll() {
	isScrolled.value = window.scrollY > 8;
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll, { passive: true });
	handleScroll();
});

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll);
});

watch(isOpen, val => {
	if (typeof document === 'undefined') return;
	document.body.style.overflow = val ? 'hidden' : '';
});
</script>

<template>
	<header
		:class="[
			'sticky top-0 z-40 transition-all duration-200',
			isScrolled || isOpen
				? 'bg-sand00/95 border-b border-sand20 backdrop-blur-md'
				: 'bg-sand05 border-b border-sand20/60',
		]"
	>
		<Container size="xl">
			<div class="flex h-16 items-center justify-between lg:h-20">
				<TLink to="index" class="group flex items-center gap-3" :aria-label="t('church.name')">
					<Image
						src="/img/epc-rovinj-logo.jpeg"
						:alt="t('church.name')"
						class="h-10 w-auto mix-blend-multiply lg:h-11"
						priority
					/>
					<div class="hidden flex-col leading-tight lg:flex">
						<span class="font-display text-lg text-sand100">{{ t('church.name') }}</span>
						<span class="font-mono text-[10px] uppercase tracking-[0.18em] text-sand60">EST. MMIX · ROVINJ</span>
					</div>
				</TLink>

				<nav class="hidden items-center gap-1 lg:flex" :aria-label="t('nav.home')">
					<TLink
						v-for="item in navItems"
						:key="item.key"
						:to="item.to"
						:class="[
							'relative px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors',
							isActive(item.to)
								? 'text-terracotta80'
								: 'text-sand80 hover:text-sand100',
						]"
					>
						<span
							v-if="isActive(item.to)"
							class="absolute inset-x-3 -bottom-px h-px bg-terracotta60"
							aria-hidden="true"
						/>
						{{ item.label }}
					</TLink>
				</nav>

				<div class="flex items-center gap-3">
					<LanguageSwitcher class="hidden sm:flex" />
					<button
						type="button"
						class="inline-flex size-10 items-center justify-center border border-sand20 text-sand100 transition-colors hover:bg-sand10 lg:hidden"
						:aria-label="isOpen ? t('common.close_menu') : t('common.open_menu')"
						:aria-expanded="isOpen"
						@click="isOpen = !isOpen"
					>
						<Icon :name="isOpen ? 'close' : 'menu'" :size="20" />
					</button>
				</div>
			</div>
		</Container>

		<Transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="opacity-0 -translate-y-2"
			enter-to-class="opacity-100 translate-y-0"
			leave-active-class="transition duration-150 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div v-if="isOpen" class="border-t border-sand20 bg-sand00 lg:hidden">
				<Container size="xl">
					<nav class="flex flex-col py-4">
						<TLink
							v-for="item in navItems"
							:key="item.key"
							:to="item.to"
							:class="[
								'border-b border-sand20 px-1 py-4 font-mono text-sm uppercase tracking-[0.16em] transition-colors',
								isActive(item.to) ? 'text-terracotta80' : 'text-sand100 hover:text-terracotta60',
							]"
						>
							{{ item.label }}
						</TLink>
						<div class="mt-4 flex items-center justify-between">
							<LanguageSwitcher />
						</div>
					</nav>
				</Container>
			</div>
		</Transition>
	</header>
</template>
