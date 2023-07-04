<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const goToBase64 = () => {
  router.push({ name: 'base64tool'})
}
</script>

<template>
  <v-container>
    <v-layout>
      <v-app-bar :elevation="1">
        <v-app-bar-title>DevMultitool</v-app-bar-title>

        <v-spacer></v-spacer>
        <v-btn :to="{name: 'base64tool'}" variant="text">
          B64 Tools
        </v-btn>
        <v-btn :to="{name: 'home'}" variant="text">
          Home
        </v-btn>
        
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col align-self="start">
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-container>
</template>

<style scoped>
</style>
