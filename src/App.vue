<template>
  <div class="bg-red-200">sokoban {{ map }}</div>
</template>

<script setup lang="ts">
import { useMapStore } from "./store/map"
const { map } = useMapStore()
</script>
<style scoped></style>
