<template>
  <main class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
    <!-- Nav -->
    <nav class="border-b border-white/10 px-6 py-4">
      <div class="mx-auto flex max-w-6xl items-center justify-between">
        <span class="text-xl font-bold tracking-tight text-blue-400">EPC Web</span>
        <div class="flex gap-6 text-sm text-slate-400">
          <a href="#features" class="transition hover:text-white">Features</a>
          <a href="#contact" class="transition hover:text-white">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-6 py-28 text-center">
      <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
        <span class="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
        Now live
      </div>
      <h1 class="mt-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
        Welcome to
        <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">EPC Web</span>
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
        A modern web application built with Nuxt 3 and Tailwind CSS — fast, flexible, and ready to scale.
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#features"
          class="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Get started
        </a>
        <a
          href="https://nuxt.com/docs"
          target="_blank"
          rel="noopener"
          class="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:border-white/40 hover:bg-white/5"
        >
          Read the docs
        </a>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="mx-auto max-w-6xl px-6 py-20">
      <h2 class="mb-12 text-center text-3xl font-bold">What's included</h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/40 hover:bg-white/10"
        >
          <div class="mb-4 text-3xl">{{ feature.icon }}</div>
          <h3 class="mb-2 text-lg font-semibold">{{ feature.title }}</h3>
          <p class="text-sm text-slate-400">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
      Built with Nuxt 3 &amp; Tailwind CSS &mdash; {{ new Date().getFullYear() }}
    </footer>
  </main>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '⚡',
    title: 'Nuxt 3',
    description: 'File-based routing, auto-imports, and server-side rendering out of the box.',
  },
  {
    icon: '🎨',
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid, consistent UI development.',
  },
  {
    icon: '🔷',
    title: 'TypeScript',
    description: 'Full type safety across components, composables, and configuration.',
  },
  {
    icon: '📦',
    title: 'Auto-imports',
    description: 'Components and composables are imported automatically — no boilerplate.',
  },
  {
    icon: '🚀',
    title: 'Production-ready',
    description: 'Optimised builds with code splitting and tree shaking enabled by default.',
  },
  {
    icon: '🛠️',
    title: 'Dev tools',
    description: 'Nuxt DevTools integrated for inspecting components, routes, and performance.',
  },
]
</script>
