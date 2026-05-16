# Vue Component Conventions

## Script setup

- Always use `<script setup lang="ts">` — no Options API
- Do **not** manually import `ref`, `computed`, `useRoute`, etc. — Nuxt auto-imports them
- Do **not** manually import components in templates — Nuxt auto-imports them

## Props & bindings

- Prefer `defineModel` over `defineProps` + `defineEmits` for two-way bindings
- Use `defineProps({})` object syntax, not `defineProps<Type>()` generic syntax:
  ```ts
  // ✅
  const props = defineProps({ label: { type: String, required: true } })
  // ❌
  const props = defineProps<{ label: string }>()
  ```

## Component usage

- **Buttons**: use `<Button>` unless the use case doesn't fit
- **Links**: use `<TLink :to="route-name">`
- **Images**: use `<Image>` with alt text (use an i18n key if the word varies by language)
- **Teleport**: always `to="#teleports"` to avoid hydration problems
- **v-html**: always add `class="rich-body"` when using `v-html`

## Styling

- **Tailwind classes only** — no `<style>` blocks, no hardcoded hex/px values
- If custom CSS is unavoidable, add to `app/assets/css/` and import via `tailwind.css`
- Design tokens:
  - Colors: `secondary80` (primary red), `gray100` / `gray30` (text / border)
  - Shadows: `shadow-layer-*`
  - Square elements: `size-{value}` instead of `w-{value} h-{value}`

## Accessibility

- Use semantic HTML elements (`<button>`, `<a>`, `<form>`, `<nav>`)
- All buttons must have appropriate `aria-*` attributes
- `<Icon>` SVGs must have `aria-hidden="true"`
