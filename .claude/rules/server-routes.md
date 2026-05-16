# Server Route Conventions

## BFF pattern

- All external API calls must originate from `server/api/**` Nitro routes — never from `app/`
- Server utilities in `server/utils/` handle the actual fetch calls to external APIs
- Nitro routes call server utils; they do not fetch external APIs directly

## Error handling

Catch errors from external APIs and rethrow with `createError`:

```ts
try {
  return await fetchSomeExternalApi(params)
} catch (err: unknown) {
  const error = err as { statusCode?: number; statusMessage?: string; data?: unknown }
  throw createError({
    statusCode: error.statusCode ?? 500,
    statusMessage: error.statusMessage ?? 'Internal Server Error',
    data: error.data,
  })
}
```

## Mutating requests

On the client side, use `$csrfFetch` (from `useNuxtApp()`) for all POST/PUT/PATCH/DELETE requests to Nitro routes.
