<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" width="60px" />
  </div>
</template>

<script setup lang="ts">
import keeperImg from "@/assets/keeper.png"
import { useMove, usePosition } from "./player"

useMove()
const { position } = usePosition()
</script>

<style scoped></style>
