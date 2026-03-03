export type ResourceType = 
  | "WOOD"
  | "BRICK"
  | "SHEEP"
  | "WHEAT"
  | "ORE"
  | "DESERT"

export type Resources = Record<ResourceType, number>;