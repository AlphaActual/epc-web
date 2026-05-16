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
			isScrolled || isOpen ? 'bg-sand00/95 backdrop-blur-md shadow-layer-1' : 'bg-sand05',
		]"
	>
		<Container size="xl">
			<div class="flex h-16 items-center justify-between lg:h-20">
				<TLink to="index" class="group flex items-center gap-2.5" :aria-label="t('church.name')">
					<span class="inline-flex size-9 items-center justify-center rounded-full bg-terracotta60 text-white">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M12 2L9 9 2 9.5l5.5 4.8L6 22l6-3.5L18 22l-1.5-7.7L22 9.5 15 9z" />
						</svg>
					</span>
					<span class="flex flex-col leading-tight">
						<span class="font-serif text-lg font-bold text-sand100">EPC Rovinj</span>
						<span class="text-xs font-medium text-terracotta60">{{ t('church.tagline') }}</span>
					</span>
				</TLink>

				<nav class="hidden items-center gap-1 lg:flex" :aria-label="t('nav.home')">
					<TLink
						v-for="item in navItems"
						:key="item.key"
						:to="item.to"
						:class="[
							'rounded-md px-3 py-2 text-sm font-medium transition-colors',
							isActive(item.to)
								? 'text-terracotta60'
								: 'text-sand80 hover:text-sand100 hover:bg-sand10',
						]"
					>
						{{ item.label }}
					</TLink>
				</nav>

				<div class="flex items-center gap-3">
					<LanguageSwitcher class="hidden sm:flex" />
					<Button to="contact" variant="primary" size="sm" class="hidden md:inline-flex">
						{{ t('common.contact_us') }}
					</Button>
					<button
						type="button"
						class="inline-flex size-10 items-center justify-center rounded-md text-sand100 hover:bg-sand10 lg:hidden"
						:aria-label="isOpen ? t('common.close_menu') : t('common.open_menu')"
						:aria-expanded="isOpen"
						@click="isOpen = !isOpen"
					>
						<Icon :name="isOpen ? 'close' : 'menu'" :size="22" />
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
								'rounded-md px-3 py-3 text-base font-medium transition-colors',
								isActive(item.to) ? 'text-terracotta60 bg-terracotta05' : 'text-sand100 hover:bg-sand10',
							]"
						>
							{{ item.label }}
						</TLink>
						<div class="mt-3 flex items-center justify-between border-t border-sand20 pt-4">
							<LanguageSwitcher />
							<Button to="contact" variant="primary" size="sm">
								{{ t('common.contact_us') }}
							</Button>
						</div>
					</nav>
				</Container>
			</div>
		</Transition>
	</header>
</template>
