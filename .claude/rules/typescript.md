# TypeScript Conventions

## Type location

All shared types live in `@types/` as `.d.ts` files. Do not inline types that are used across multiple files.

## Import paths

- Use the `~~` alias for type imports (resolves to workspace root):
  ```ts
  import type { ButtonVariant } from '~~/@types/button'
  ```
- Use `~/` for runtime imports (composables, utils, etc.)
- **Always use absolute paths** — never relative paths like `'./button'`

## Import style

Always `import type` for types — never value-import a type:
```ts
// ✅
import type { User } from '~~/@types/user'
// ❌
import { User } from '~~/@types/user'
```

## API response types

**Never map/transform API response shapes to fit existing interfaces.** When API field names or types don't match, update the type interfaces in `@types/` to reflect the actual API response:

```ts
// ✅ Update the interface to match the API
interface User {
  first_name: string  // matches API snake_case field
}

// ❌ Don't write mapping/conversion code
const user = computed(() => ({
  firstName: apiUser.value.first_name,
}))
```
