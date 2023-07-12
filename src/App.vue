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
        <v-btn icon="mdi-home" :to="{name: 'home'}">
          
        </v-btn>
        <v-btn icon="mdi-github" href="https://github.com/ocampogeric/dev-multitool" target="_blank">
        </v-btn>
        
      </v-app-bar>
      <v-main id="content-wrap">
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
  <v-layout>
        <v-row fluid justify="center" no-gutters class="bg-black" id="footer">
          <v-btn variant="plain" prepend-icon="mdi-twitter" href="https://twitter.com/ocampogeric" target="_blank">
            @ocampogeric
          </v-btn>
          
        </v-row>
    </v-layout>
</template>

<style scoped>
</style>
