import { defineStore } from "pinia"
import { ref } from "vue"

export const usePlayerStore = defineStore("player", () => {
  const player = ref({
    x: 1,
    y: 1,
  })

  function movePlayerToLeft() {
    player.value.x--
  }
  function movePlayerToRight() {
    player.value.x++
  }
  function movePlayerToUp() {
    player.value.y--
  }
  function movePlayerToDown() {
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
