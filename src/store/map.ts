import { defineStore } from "pinia"

export enum MapTile {
  WALL = 1,
  FLOOR = 2,
}

type Map = MapTile[][]

type Position = {
  x: number
  y: number
}

export const useMapStore = defineStore("map", () => {
  const map = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ]

  function setupMap(newMap: Map) {
    map.splice(0, map.length, ...newMap)
  }

  function isWall({ x, y }: Position) {
    return map[x][y] === MapTile.WALL
  }

  return {
    map,
    setupMap,
    isWall,
  }
})
