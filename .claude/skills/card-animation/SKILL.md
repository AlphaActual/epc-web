---
name: card-animation
description: Use when adding scroll-triggered animations — to cards/grids/swiper slides OR to a single element (hero image, badge, callout). Covers the `v-in-viewport` directive, the `fadeUp50` / `fadeUp5` / `fadeFromRight50` / `fadeOpacity` / `fadeOpacityScale` classes, per-index `transitionDelay` stagger, and the choice between same-element, per-card, and parent-level viewport observers. **MUST ask the user which observer scope they want before animating non-swiper grids.**
---

# Scroll-Triggered Animations

Scroll-triggered animations in this project use the `v-in-viewport` directive together with prebuilt classes from `app/assets/css/animations.css`. The directive adds a class to the host element when it enters the viewport; the animation class then flips to its target state via a CSS rule.

Every fade class has **two CSS selectors**: a same-element variant (`.fadeX.in-viewport`) and a descendant variant (`.in-viewport-parent .fadeX`). Which selector matches depends on the directive's `classNames` option, which determines the scoping pattern.

There are **three scoping patterns**:

| Pattern | Directive value | What gets `v-in-viewport` | What carries the fade class | When to use |
|---|---|---|---|---|
| **Same-element** | `v-in-viewport.once` (no value, defaults to `in-viewport`) | The element being animated | Same element | Single element (hero image, banner, single callout). No wrapper needed. |
| **Per-card** | `v-in-viewport.once="{ classNames: 'in-viewport-parent' }"` on each card wrapper | Each card's outer wrapper | An inner descendant of that wrapper | Cards in a grid that may span multiple rows; each animates independently when it scrolls into view. |
| **Parent** | `v-in-viewport.once="{ classNames: 'in-viewport-parent' }"` on the grid/swiper container | The container | Each card (descendant) | All cards animate together with stagger when the container enters view. |

## CRITICAL: ask before animating non-swiper grids

When animating cards in a **non-swiper** layout (grid, flex row, list), you do **not** know which scoping the user wants. Always ask first:

> Should each card animate as it enters the viewport (per-card observer), or should they all animate together when the grid enters view (parent observer with stagger)?

For **swiper layouts**, do not ask — always use the parent pattern (see [Swiper layouts](#swiper-layouts) below).
For **single-element animations**, do not ask — use the same-element pattern (see [Single-element animations](#single-element-animations) below).

---

## Animation classes

From `app/assets/css/animations.css`:

| Class | Initial state | Duration baked in? |
|---|---|---|
| `fadeUp5` | `translateY(5px)` + opacity 0 | Yes — 600ms |
| `fadeUp50` | `translateY(50px)` + opacity 0 | Yes — 600ms |
| `fadeFromRight50` | `translateX(50px)` + opacity 0 | **No** — must add `transition-[opacity,transform]! duration-500` |
| `fadeFromLeft100` | `translateX(-100px)` + opacity 0 | Yes — 600ms |
| `fadeOpacity` | opacity 0 | **No** — must add `transition-opacity duration-Xxx` |
| `fadeOpacityScale` | opacity 0 + `scale(0.95)` | Yes — 600ms |

If a class has its own duration, you don't need to add `transition-* duration-*`. If it doesn't (`fadeFromRight50` and `fadeOpacity`), add it explicitly on the same element. Always verify against `app/assets/css/animations.css` — the file is the source of truth.

Picking a class:
- Single hero/banner image → `fadeOpacityScale` (subtle zoom-in feels good for media).
- Cards / list items → `fadeUp50` for a noticeable rise, `fadeUp5` for a gentle nudge (good inside swipers so it doesn't fight the slide transform).
- Section headings or copy → `fadeOpacity` if you want presence without movement.

---

## Stagger formula

```ts
:style="{ transitionDelay: `${(i + 1) * 100}ms` }"
```

`100ms` per index is the default cadence used elsewhere in the project (e.g. `Navigation.vue`). Adjust if the user requests a different feel.

---

## Single-element animations

For one element (a hero image, a banner, a callout), put `v-in-viewport.once` and the fade class on the **same element**. The directive's default `classNames` is `in-viewport`, and every fade class has a same-element variant (`.fadeOpacityScale.in-viewport`, `.fadeUp50.in-viewport`, etc.) — so no wrapper is needed.

```vue
<Image
  v-if="data.image"
  v-in-viewport.once
  :src="data.image.url"
  alt="..."
  class="fadeOpacityScale aspect-8/3 w-full rounded-xl object-cover"
/>
```

Notes:
- Do **not** pass `{ classNames: 'in-viewport-parent' }` here. That's the descendant pattern — it would put `in-viewport-parent` on the same element as the fade class, and the descendant CSS rule (`.in-viewport-parent .fadeX`) would never match.
- Works on Vue components too (e.g. `<Image>`) — directives forward to the component's root element when it has a single root.
- For `fadeFromRight50` (no built-in duration), add `transition-[opacity,transform]! duration-500` on the same element. For `fadeOpacity`, add `transition-opacity duration-Xxx`.

**Transform conflicts.** Most fade classes set `transform` in their initial/final state (`fadeUp50`, `fadeOpacityScale`, `fadeFromRight50`, etc.). If the element you want to animate also carries a positioning transform (e.g. `translate-x-250`), the fade class will override it. Wrap the element: outer wrapper keeps the positioning transform; inner wrapper gets `v-in-viewport` + the fade class. The two transforms now live on different elements and don't fight. `fadeOpacity` is the only class that doesn't touch transform — use it when you want to keep the existing transform untouched and combine with continuous CSS animations like `animate-[spin_…_infinite]`.

---

## Pattern A — per-card observer

Each card has its own `v-in-viewport`. Cards animate independently as they enter the viewport. Use `.once` so the animation does not replay on re-scroll.

```vue
<div class="grid grid-cols-... gap-...">
  <div
    v-for="(card, i) in items"
    :key="card.id"
    v-in-viewport.once="{ classNames: 'in-viewport-parent' }"
    class="h-full w-full"
  >
    <div
      class="fadeUp50 h-full w-full"
      :style="{ transitionDelay: `${(i + 1) * 100}ms` }"
    >
      <CardX :card="card" />
    </div>
  </div>
</div>
```

Two wrappers are required:
- **Outer** — receives `in-viewport-parent` from the directive. Plain `h-full w-full` so the grid item sizing works.
- **Inner** — carries the `fadeUp*` class and the `transitionDelay` style. Must be a *descendant* of the element with `in-viewport-parent`, never the same element (the CSS selector is descendant: `.in-viewport-parent .fadeUp50`).

---

## Pattern B — parent observer (cohesive stagger)

`v-in-viewport` lives on the grid container. When the container enters the viewport, every descendant `fadeUp*` triggers; per-index `transitionDelay` produces the stagger.

```vue
<div
  v-in-viewport.once="{ classNames: 'in-viewport-parent' }"
  class="grid grid-cols-... gap-..."
>
  <div
    v-for="(card, i) in items"
    :key="card.id"
    class="fadeUp50 h-full w-full"
    :style="{ transitionDelay: `${(i + 1) * 100}ms` }"
  >
    <CardX :card="card" />
  </div>
</div>
```

Only one wrapper per card here.

---

## Swiper layouts

**Always use the parent pattern.** Do not put `v-in-viewport` on individual `swiper-slide`s — slides translated off-screen by Swiper still report as in-viewport (IntersectionObserver does not respect Swiper's overflow clipping), and per-slide observers fire all at once anyway.

Wrap `<SwiperPrimary>` (or whichever Swiper wrapper is used) in a `<div v-in-viewport.once>`. If `SwiperPrimary` carries dynamic responsive `hidden` classes (e.g. `hidden md:hidden xl:hidden`), **move those classes onto the wrapper** so the observer never fires on a 0-height container.

```vue
<div
  v-in-viewport.once="{ classNames: 'in-viewport-parent' }"
  :class="[{ hidden: ..., 'md:hidden': ..., 'xl:hidden': ... }]"
>
  <SwiperPrimary ...>
    <swiper-slide v-for="(card, i) in items" :key="card.id" class="...">
      <div
        class="fadeUp5 h-full w-full"
        :style="{ transitionDelay: `${(i + 1) * 100}ms` }"
      >
        <CardX :card="card" />
      </div>
    </swiper-slide>
  </SwiperPrimary>
</div>
```

Swiper-specific notes:
- The animation only plays the first time the swiper enters view. Slides swiped into view later will not re-animate. This is acceptable — it matches the `.once` modifier intent.
- Use a subtler class like `fadeUp5` for swiper slides to avoid clashing with the slide transform.

---

## Reference examples in the codebase

- `app/components/Block/Hero/BlockHeroPrimary.vue` — Single-element pattern with `fadeOpacityScale` on a hero image.
- `app/components/Block/BlockBenefits.vue` — Pattern B (parent observer) on a static grid.
- `app/components/Block/BlockCardsPrimary.vue` — Swiper wrapped with parent observer; static grid below uses Pattern A (per-card).
- `app/components/Block/BlockAboutUsNumbers.vue` / `BlockGrid.vue` — Pattern A on a non-swiper grid.
- `app/components/Navigation.vue` — Pattern A with `fadeFromRight50` (note the explicit `transition-[opacity,transform]! duration-500` since that class has no built-in duration).

---

## Checklist before finishing

- [ ] **Single element?** Put `v-in-viewport.once` (no value) and the fade class on the same element. Do not use `in-viewport-parent`.
- [ ] **Card grid (non-swiper)?** Did you ask the user per-card vs parent?
- [ ] **Swiper?** Wrap `<SwiperPrimary>` and move any responsive `hidden` classes onto the wrapper. No per-slide observers.
- [ ] Used `.once` modifier so animations don't replay on re-scroll.
- [ ] Used a class that has a built-in duration, **or** added `transition-[opacity,transform]! duration-Xxx` on the same element (`fadeFromRight50` is the only class without one).
- [ ] When using `in-viewport-parent`: the element with the fade class is a *descendant* of the element with the directive, never the same element.
- [ ] When using the same-element pattern: the directive has no `classNames` value (defaults to `in-viewport`).
- [ ] Preserved the existing `h-full` / `w-full` chain so sizing inside grid/swiper is unaffected.
