export type DevelopmentCardType =
  | "KNIGHT"
  | "VICTORY_POINT"
  | "ROAD_BUILDING"
  | "YEAR_OF_PLENTY"
  | "MONOPOLY"

export interface DevelopmentCard {
  type: DevelopmentCardType
  isNew: boolean // TODO: Do I need this?
}