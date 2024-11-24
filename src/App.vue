<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
    <TabsMenu v-if="showTabs" />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import TabsMenu from '@/components/TabsMenu.vue';

// Get the current route
const route = useRoute();

// Define routes where tabs should not be displayed
const authRoutes = ['/', '/login'];

// Use computed property to control the visibility of TabsMenu
const showTabs = computed(() => {
  return !authRoutes.includes(route.path);
});
</script>
