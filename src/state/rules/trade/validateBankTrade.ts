import { GameState } from "../../../models/GameState"
import { ValidationResult } from "../../../models/Validation"

export function validateBankTrade(
  state: GameState,
  playerId: string,
  giveResource: string,
  giveAmount: number,
  receiveResource: string
): ValidationResult {
  const player = state.players.find(p => p.playerId === playerId)

  if (!player)
    return { valid: false, error: "Player not found" }

  if (state.phase !== "TRADE")
    return { valid: false, error: "Not in trade phase" }

  if (giveResource === receiveResource)
    return { valid: false, error: "Cannot trade for same resource" }

  if (player.resources[giveResource] < giveAmount)
    return { valid: false, error: "Not enough resources" }

  if (giveAmount != 4)
    return { valid: false, error: "Bank trade is 4:1" }

  return { valid: true }
}