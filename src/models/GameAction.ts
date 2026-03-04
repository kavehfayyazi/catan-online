import { ResourceType } from "./Resources"

export type ResourceBundle = Record<ResourceType, number>

export type GameAction =
  | { type: "ROLL_DICE"; playerId: string; diceValue: number }
  | { type: "END_TURN"; playerId: string }

  | { type: "BUILD_ROAD"; playerId: string; edgeId: string }
  | { type: "BUILD_SETTLEMENT"; playerId: string; vertexId: string }
  | { type: "UPGRADE_CITY"; playerId: string; vertexId: string }

  | { type: "BUY_DEV_CARD"; playerId: string }
  | { type: "PLAY_KNIGHT"; playerId: string; tileId: string }

  | {
      type: "BANK_TRADE"
      playerId: string
      giveResource: ResourceType
      giveAmount: number
      receiveResource: ResourceType
    }

  | {
      type: "PORT_TRADE"
      playerId: string
      giveResource: ResourceType
      giveAmount: number
      receiveResource: ResourceType
    }

  | {
      type: "PLAYER_TRADE"
      fromPlayerId: string
      toPlayerId: string
      offer: ResourceBundle
      request: ResourceBundle
    }