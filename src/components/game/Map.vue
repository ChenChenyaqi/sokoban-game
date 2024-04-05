<template>
  <div class="flex flex-col">
    <div class="flex" v-for="(row, i) in map">
      <div v-for="(col, j) in row">
        <template v-if="map[i][j] === MapTile.WALL">
          <img :src="wallImg" width="60px" />
        </template>
        <template v-else>
          <img :src="floorImg" width="60px" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import floorImg from "@/assets/floor.png"
import wallImg from "@/assets/wall.png"
import { useMapStore, MapTile } from "@/store/map"

const { map } = useMapStore()
</script>

<style scoped></style>
