<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFire, faPlus, faBoltLightning, faGear, faPoo } from '@fortawesome/free-solid-svg-icons';

library.add(faFire, faPlus, faBoltLightning, faGear, faPoo);

import SideBarIcon from "@/components/SideBarIcon.vue";
</script>

<template>
  <div
      class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-gray-300 text-2xl justify-center items-center shadow-2xl">
    <SideBarIcon><FontAwesomeIcon :icon="['fas', 'fire']" size="2x" /></SideBarIcon>
    <SideBarIcon><FontAwesomeIcon :icon="['fas', 'plus']" size="2x" /></SideBarIcon>
    <SideBarIcon><FontAwesomeIcon :icon="['fas', 'bolt-lightning']" size="2x" /></SideBarIcon>
    <SideBarIcon><FontAwesomeIcon :icon="['fas', 'gear']" size="2x" /></SideBarIcon>
    <SideBarIcon><FontAwesomeIcon :icon="['fas', 'poo']" size="2x" /></SideBarIcon>
  </div>
</template>

<style scoped>

</style>