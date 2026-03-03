import { GameState } from "../../models/GameState"

import { createGame } from "../actions/game/createGame"
// TODO: Add rest of imports

export type ActionPayload = Record<string, any>

export function dispatchAction(
  game: GameState | null,
  action: string,
  payload: ActionPayload
): GameState {

  switch (action) {
    case "CREATE_GAME":
      return createGame(payload.gameId)
    
    // TODO: Fill in rest of actions

    default:
      throw new Error(`Unknown action: ${action}`)
  }
}