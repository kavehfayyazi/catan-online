import { GameState } from "../../../models/GameState"
import { ValidationResult } from "../../../models/Validation"
import { ResourceType } from "../../../models/Resources"

export function validatePlayerTrade(
  state: GameState,
  fromPlayerId: string,
  toPlayerId: string,
  offer: Record<ResourceType, number>,
  request: Record<ResourceType, number>
): ValidationResult {
  if (state.phase !== "TRADE")
    return { valid: false, error: "Trades only allowed during trade phase" }

  const fromPlayer = state.players.find(p => p.playerId === fromPlayerId)
  const toPlayer = state.players.find(p => p.playerId === toPlayerId)

  if (!fromPlayer || !toPlayer)
    return { valid: false, error: "Invalid players" }

  // validate offering player resources
  for (const resource in offer) {
    const amount = offer[resource]
    if (fromPlayer.resources[resource] < amount)
      return { valid: false, error: "Offering player lacks resources" }
  }

  // validate requested player resources
  for (const resource in request) {
    const amount = request[resource]
    if (toPlayer.resources[resource] < amount)
      return { valid: false, error: "Target player lacks resources" }
  }

  return { valid: true }
}