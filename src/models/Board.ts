import { ResourceType } from "./Resources";
import { BuildingType } from "./Building";
import { PortType } from "./Port";

// q and r are axial coordinates: https://www.redblobgames.com/grids/hexagons/
export interface Tile {
  tileId: string
  q: number
  r: number
  resource: ResourceType
  numberToken: number | null // null for desert
  hasRobber: boolean
}

export interface Vertex {
  vertexId: string
  adjacentTileIds: string[]

  building:
    | null
    | {
        playerId: string;
        type: BuildingType;
      }

  port?: PortType
}

export interface Edge {
  edgeId: string
  vertexA: string
  vertexB: string

  road:
    | null
    | {
        playerId: string
      }
}

export interface Board {
  tiles: Record<string, Tile>
  vertices: Record<string, Vertex>
  edges: Record<string, Edge>
  robberTileId: string
}