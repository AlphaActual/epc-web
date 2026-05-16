# Form Validation

Uses Zod schemas + `FormInput` components. See `app/components/Form/FormRegister.vue` for a full reference example.

## Schema & types

```ts
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  first_name: z.string().min(1),
})

type FormData = z.infer<typeof schema>
```

## Form state

```ts
const formData = ref<FormData>({ email: '', first_name: '' })
const formErrorData = ref<Partial<Record<keyof FormData, string>>>({})
const apiErrorData = ref<ApiErrorData | null>(null)
```

## Template

```html
<form novalidate @submit.prevent="handleSubmit">
  <FormInput
    v-model="formData.email"
    v-model:error-msg="formErrorData.email"
    type="email"
    :label="t('form.email')"
  />
  <Button type="submit">{{ t('form.submit') }}</Button>
</form>
```

- Always `novalidate` and `@submit.prevent` on `<form>`
- Bind field errors with `v-model:error-msg`
- Dropdowns: use `Multiselect` from `@vueform/multiselect`

## Submit handler

```ts
async function handleSubmit() {
  formErrorData.value = {}
  apiErrorData.value = null

  const result = schema.safeParse(formData.value)
  if (!result.success) {
    result.error.issues.forEach(issue => {
      const key = issue.path[0] as keyof FormData
      if (!formErrorData.value[key]) formErrorData.value[key] = issue.message
    })
    return
  }

  try {
    const { $csrfFetch } = useNuxtApp()
    await $csrfFetch('/api/...', { method: 'POST', body: result.data })
  } catch (err) {
    const errorTyped = err as { data?: unknown }
    const apiError = useApiErrorData(errorTyped?.data)
    apiErrorData.value = apiError

    if (apiError?.errors) {
      Object.entries(apiError.errors).forEach(([field, messages]) => {
        const key = field as keyof FormData
        formErrorData.value[key] = Array.isArray(messages) ? messages[0] : messages
      })
    }
  }
}
```

## Error display

```html
<p v-if="Object.keys(formErrorData).length">{{ t('form.validation_error') }}</p>
<CmsErrorsToast :error-data="apiErrorData" />
```
