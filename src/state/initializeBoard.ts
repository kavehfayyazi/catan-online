import { Tile, Vertex, Edge } from "../models/Board"
import { ResourceType } from "../models/Resources"

type Axial = { q: number; r: number }

// Generate radius-3 axial coordinates
function generateRadius3Coords(): Axial[] {
  const coords: Axial[] = []

  for (let q = -3; q <= 3; q++) {
    for (let r = -3; r <= 3; r++) {
      const s = -q - r
      if (Math.abs(s) <= 3) {
        coords.push({ q, r })
      }
    }
  }

  return coords
}

// Example board layout from CATAN's website
const RESOURCE_LAYOUT: ResourceType[] = [
  "ORE", "SHEEP", "WOOD",
  "WHEAT", "BRICK", "SHEEP", "BRICK",
  "WHEAT", "WOOD", "DESERT", "WOOD", "ORE",
  "WOOD", "ORE", "WHEAT", "SHEEP",
  "BRICK", "WHEAT", "SHEEP"
]

// -1 for desert
const NUMBER_LAYOUT = [
  10, 2, 9,
  12, 6, 4, 10,
  9, 11, -1, 3, 8,
  8, 3, 4, 5,
  5, 6, 11
]

export function initializeBoard() {
  const coords = generateRadius3Coords()

  const tiles: Record<string, Tile> = {}
  const vertices: Record<string, Vertex> = {}
  const edges: Record<string, Edge> = {}

  let robberTileId = ""

  // ---- Create Tiles ----
  coords.forEach((coord, i) => {
    const tileId = `T${i}`
    const resource = RESOURCE_LAYOUT[i]
    const numberLayout = NUMBER_LAYOUT[i]    
    const numberToken = numberLayout > 0 ? numberLayout : null // null represents desert

    if (resource === "DESERT")
      robberTileId = tileId

    tiles[tileId] = {
      tileId,
      q: coord.q,
      r: coord.r,
      resource,
      numberToken,
      hasRobber: resource === "DESERT"
    }
  })
  
  // TODO: Generate Vertices and Edges

  return {
    tiles,
    vertices,
    edges,
    robberTileId
  }
}