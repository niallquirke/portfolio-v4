<script setup lang="ts">
import { testimonials } from "../data";
</script>

<template>
  <div
    style="
      height: 100%;
      background-image: url(&quot;/img/whatsapp-bg.png&quot;);
      background-repeat: repeat;
    "
  >
    <TheNavbar />
    <div class="max-w-2xl mx-auto">
      <Bubble v-for="testimonial in testimonials" :testimonial="testimonial" />
    </div>
  </div>
</template>
