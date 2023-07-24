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
  <div class="mt-8 flex px-3">
    <a :href="testimonial.linkedin" target="_blank" class="flex-none">
      <nuxt-img
        v-if="testimonial.image"
        :src="testimonial.image"
        width=""
        sizes="sm:48"
        class="rounded-full h-8 w-8 sm:h-12 sm:w-12 drop-shadow bg-white" />
      <IconProfile
        v-else
        class="h-8 w-8 sm:h-12 sm:w-12 drop-shadow text-blue-500"
    /></a>
    <div class="ml-2 bg-white rounded-md drop-shadow p-3">
      <div class="flex justify-between mb-3">
        <span>
          <a
            :href="testimonial.linkedin"
            target="_blank"
            class="text-base text-secondary"
            >~ {{ testimonial.name }}</a
          ><span v-if="testimonial.title" class="text-gray-400 ml-1"
            >({{ testimonial.title }})</span
          ></span
        ><a
          :href="testimonial.companyLink"
          target="_blank"
          class="text-gray-400 hover:text-gray-300"
          >{{ testimonial.company }}</a
        >
      </div>
      <p class="text-base">{{ testimonial.comment }}</p>
      <div class="border-t border-gray-200 my-3"></div>
      <p class="text-gray-400 text-sm">
        {{ testimonial.details }}
      </p>
    </div>
  </div>
</template>
