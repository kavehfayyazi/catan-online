import { GameState } from "../../../models/GameState"
import { ValidationResult } from "../../../models/Validation"
import { ResourceType } from "../../../models/Resources"

export function validatePortTrade(
  state: GameState,
  playerId: string,
  giveResource: ResourceType,
  giveAmount: number,
  receiveResource: ResourceType
): ValidationResult {
  if (state.phase !== "TRADE")
    return { valid: false, error: "Not in trade phase" }

  if (giveResource === receiveResource)
    return { valid: false, error: "Cannot trade same resource" }

  const player = state.players.find(p => p.playerId === playerId)

  if (!player)
    return { valid: false, error: "Invalid player" }

  // TODO: Validate Ratio

  if (player.resources[giveResource] < giveAmount)
    return { valid: false, error: "Not enough resources" }

  return { valid: true }
}