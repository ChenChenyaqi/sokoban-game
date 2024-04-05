import { usePlayerStore } from "@/store/player"
import { computed, onMounted, onUnmounted } from "vue"

export function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown,
  } = usePlayerStore()

  function handleKeydown(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowLeft":
        movePlayerToLeft()
        break
      case "ArrowRight":
        movePlayerToRight()
        break
      case "ArrowUp":
        movePlayerToUp()
        break
      case "ArrowDown":
        movePlayerToDown()
        break
      default:
        break
    }
  }

  onMounted(() => {
    window.addEventListener("keydown", handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown)
  })
}

export function usePosition() {
  const { player } = usePlayerStore()

  const STEP = 60
  const position = computed(() => ({
    left: player.x * STEP + "px",
    top: player.y * STEP + "px",
  }))

  return {
    position,
  }
}
