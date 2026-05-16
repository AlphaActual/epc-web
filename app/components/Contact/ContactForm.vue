<script setup lang="ts">
const { t } = useI18n();

const formData = ref({
	name: '',
	email: '',
	subject: '',
	message: '',
});

const isSubmitted = ref(false);

function handleSubmit() {
	// TODO* wire up to Nitro /api/contact route when Sanity backend is connected
	isSubmitted.value = true;
}
</script>

<template>
	<div class="rounded-2xl bg-sand00 p-6 shadow-layer-1 sm:p-8">
		<h3 class="font-serif text-2xl font-semibold text-sand100">{{ t('contact.form.title') }}</h3>

		<form v-if="!isSubmitted" novalidate class="mt-6 space-y-4" @submit.prevent="handleSubmit">
			<div class="grid gap-4 sm:grid-cols-2">
				<label class="block">
					<span class="text-sm font-medium text-sand80">{{ t('contact.form.name') }}</span>
					<input
						v-model="formData.name"
						type="text"
						required
						class="mt-1.5 w-full rounded-lg border border-sand20 bg-sand05 px-4 py-2.5 text-sm text-sand100 focus:border-terracotta60 focus:outline-none focus:ring-2 focus:ring-terracotta20"
					/>
				</label>
				<label class="block">
					<span class="text-sm font-medium text-sand80">{{ t('contact.form.email') }}</span>
					<input
						v-model="formData.email"
						type="email"
						required
						class="mt-1.5 w-full rounded-lg border border-sand20 bg-sand05 px-4 py-2.5 text-sm text-sand100 focus:border-terracotta60 focus:outline-none focus:ring-2 focus:ring-terracotta20"
					/>
				</label>
			</div>

			<label class="block">
				<span class="text-sm font-medium text-sand80">{{ t('contact.form.subject') }}</span>
				<input
					v-model="formData.subject"
					type="text"
					class="mt-1.5 w-full rounded-lg border border-sand20 bg-sand05 px-4 py-2.5 text-sm text-sand100 focus:border-terracotta60 focus:outline-none focus:ring-2 focus:ring-terracotta20"
				/>
			</label>

			<label class="block">
				<span class="text-sm font-medium text-sand80">{{ t('contact.form.message') }}</span>
				<textarea
					v-model="formData.message"
					rows="5"
					required
					:placeholder="t('contact.form.placeholder_message')"
					class="mt-1.5 w-full resize-y rounded-lg border border-sand20 bg-sand05 px-4 py-2.5 text-sm text-sand100 placeholder:text-sand60 focus:border-terracotta60 focus:outline-none focus:ring-2 focus:ring-terracotta20"
				/>
			</label>

			<Button type="submit" variant="primary" size="md">
				{{ t('contact.form.submit') }}
				<Icon name="arrow_right" :size="14" />
			</Button>
		</form>

		<div v-else class="mt-8 rounded-xl border border-olive20 bg-olive05 p-6 text-center">
			<p class="font-serif text-lg font-semibold text-olive80">
				✓ {{ t('common.send') }}
			</p>
			<p class="mt-2 text-sm text-sand80">{{ formData.email }}</p>
		</div>
	</div>
</template>
