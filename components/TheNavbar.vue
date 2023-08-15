<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { EllipsisVerticalIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const mobileMenuOpen = ref(false);
</script>

<template>
  <nav class="p-3 bg-primary">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex space-x-3">
        <nuxt-img
          src="/img/me.jpg"
          class="rounded-full h-14 my-auto"
          width="56"
          height="56"
        />
        <div class="flex flex-col gap-y-0.5 my-auto">
          <h1 class="text-white text-xl font-base">
            What They Say About Niall
          </h1>
          <h2 class="text-gray-200 text-sm">
            Sustainability Communication Expert and Fullstack Software Engineer
          </h2>
        </div>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <EllipsisVerticalIcon class="h-7 w-7" aria-hidden="true" />
        </button>
      </div>
      <div class="text-white space-x-2 items-center hidden lg:flex">
        <a href="https://linkedin.com/in/niallquirke" target="_blank"
          ><IconLinkedIn class="h-7" /></a
        ><a href="https://github.com/niallquirke" target="_blank"
          ><IconGithub class="h-9" /></a
        ><a href="https://instagram.com/niallquirke" target="_blank"
          ><IconInstagram class="h-9" /></a
        ><a href="mailto:quirkeniall@gmail.com" target="_blank"
          ><IconEmail class="h-9"
        /></a>
      </div>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 overflow-y-auto bg-white px-6 py-6 w-20 ring-1 ring-gray-900/10"
        >
          <div class="flex items-center justify-center">
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-black"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div
            class="flex flex-col space-y-6 py-6 mt-6 text-black items-center"
          >
            <a href="https://linkedin.com/in/niallquirke" target="_blank"
              ><IconLinkedIn class="h-9 m-1" /></a
            ><a href="https://github.com/niallquirke" target="_blank"
              ><IconGithub class="h-11" /></a
            ><a href="https://instagram.com/niallquirke" target="_blank"
              ><IconInstagram class="h-11" /></a
            ><a href="mailto:quirkeniall@gmail.com" target="_blank"
              ><IconEmail class="h-11"
            /></a>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  </nav>
</template>
