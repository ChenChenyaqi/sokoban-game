import { it, expect, describe, beforeEach } from "vitest"
import { usePlayerStore } from "../player"
import { createPinia, setActivePinia } from "pinia"
import { useMapStore } from "../map"

describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe("normal move", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ])
    })
    it("should move to left", () => {
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(0)
      expect(player.y).toBe(1)
    })

    it("should move to right", () => {
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(2)
      expect(player.y).toBe(1)
    })

    it("should move to up", () => {
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToUp()
      expect(player.x).toBe(1)
      expect(player.y).toBe(0)
    })

    it("should move to down", () => {
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToDown()
      expect(player.x).toBe(1)
      expect(player.y).toBe(2)
    })
  })

  describe("collision wall", () => {
    beforeEach(() => {
      const map = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ]
      const { setupMap } = useMapStore()
      setupMap(map)
    })
    it("should not move to left when collision a wall", () => {
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(1)
    })

    it("should not move to right when collision a wall", () => {
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 3
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(3)
    })

    it("should not move to up when collision a wall", () => {
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToUp()
      expect(player.y).toBe(1)
    })

    it("should not move to down when collision a wall", () => {
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 3
      movePlayerToDown()
      expect(player.y).toBe(3)
    })
  })
})
