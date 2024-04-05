import { defineStore } from "pinia"
import { ref } from "vue"
import { useMapStore } from "./map"

export const usePlayerStore = defineStore("player", () => {
  const { isWall } = useMapStore()
  const player = ref({
    x: 1,
    y: 1,
  })

  function movePlayerToLeft() {
    if (isWall({ x: player.value.x - 1, y: player.value.y })) {
      return
    }
    player.value.x--
  }
  function movePlayerToRight() {
    if (isWall({ x: player.value.x + 1, y: player.value.y })) {
      return
    }
    player.value.x++
  }
  function movePlayerToUp() {
    if (isWall({ x: player.value.x, y: player.value.y - 1 })) {
      return
    }
    player.value.y--
  }
  function movePlayerToDown() {
    if (isWall({ x: player.value.x, y: player.value.y + 1 })) {
      return
    }
    player.value.y++
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown,
  }
})
