import { createPinia, setActivePinia } from "pinia"
import { it, expect, describe, beforeEach } from "vitest"
import { useMove } from "../player"
import { usePlayerStore } from "@/store/player"
import { useMapStore } from "@/store/map"

describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it("should", () => {
    const { setupMap } = useMapStore()
    setupMap([
      [2, 2, 2],
      [2, 2, 2],
    ])
    const { player } = usePlayerStore()
    player.x = 1
    player.y = 1
    useMove()
    window.dispatchEvent(new KeyboardEvent("keydown", { code: "ArrowLeft" }))
    expect(player.x).toBe(0)
  })
})
