<script setup lang="ts">
import { Testimonial } from "../types/Testimonial";
import { PropType } from "vue";

defineProps({
  testimonial: {
    type: Object as PropType<Testimonial>,
    required: true,
  },
});
</script>

<template>
  <div class="mt-8 flex">
    <a :href="testimonial.linkedin" target="_blank">
      <nuxt-img
        :src="testimonial.image"
        width="48"
        height="48"
        class="rounded-full h-12 drop-shadow"
    /></a>
    <div class="ml-2 bg-white rounded-md drop-shadow p-3">
      <div class="flex justify-between mb-2">
        <span class="text-base text-[#06cf9c]">~ {{ testimonial.name }}</span
        ><a href="https://vyra.com" class="text-gray-400 hover:text-gray-300">{{
          testimonial.company
        }}</a>
      </div>
      <p class="text-base">{{ testimonial.comment }}</p>
      <div class="border-t w-full border-gray-200 my-3"></div>
      <p class="text-gray-400 text-sm">
        {{ testimonial.details }}
      </p>
    </div>
  </div>
</template>
