export type ResourceType = 
  | "WOOD"
  | "BRICK"
  | "SHEEP"
  | "WHEAT"
  | "ORE"

export type Resources = Record<ResourceType, number>;