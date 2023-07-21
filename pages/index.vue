<script setup lang="ts">
import { testimonials } from "../data";
</script>

<template>
  <div
    style="
      height: 100dvh;
      background-image: url(&quot;/img/whatsapp-bg.png&quot;);
    "
  >
    <TheNavbar />
    <div class="max-w-2xl mx-auto">
      <Bubble v-for="testimonial in testimonials" :testimonial="testimonial" />
      <Bubble v-for="testimonial in testimonials" :testimonial="testimonial" />
      <Bubble v-for="testimonial in testimonials" :testimonial="testimonial" />
      <Bubble v-for="testimonial in testimonials" :testimonial="testimonial" />
    </div>
  </div>
</template>
