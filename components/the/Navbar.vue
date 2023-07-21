<template>
  <nav class="p-3 bg-[#008069]">
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
            What everyone's saying about Niall
          </h1>
          <h2 class="text-gray-200 text-sm">
            The Senior Full Stack Software Engineer
          </h2>
        </div>
      </div>
      <div class="flex text-white space-x-2 items-center">
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
    </div>
  </nav>
</template>
