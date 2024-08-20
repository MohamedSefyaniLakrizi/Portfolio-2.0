<template>
  <NuxtLink :to="props.link">
    <div
      class="relative w-full rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 ease-in-out">
      <img :src="props.image" :alt="props.alt" class="w-full rounded-xl" />
      <div
        class="absolute rounded-b-xl bottom-0 bg-white bg-opacity-80 w-full h-[80px]">
        <div class="p-3 relative w-full">
          <h5 class="md:text-lg font-semibold">{{ props.title }}</h5>
          <p class="text-sm md:text-base">{{ props.description }}</p>
          <div
            class="absolute right-3 top-3 opacity-0 -translate-x-[20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-in-out">
            <i class="pi pi-arrow-right" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps<{
    link: string;
    title: string;
    description: string;
    image: string;
    alt: string;
  }>();
</script>
