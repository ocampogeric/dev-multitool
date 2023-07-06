<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-center text-grey-darken-3">Welcome to Dev Multitool</h1>
      </v-col>
      <v-col cols="6">
        <p class="text-center">Work in progress...</p>

        <p class="text-center">
          You can try: 
          <v-btn :to="{name: 'base64tool'}" variant="plain" class="text-decoration-underline">
            B64 Tools
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
