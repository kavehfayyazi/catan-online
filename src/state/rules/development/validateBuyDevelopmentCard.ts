import { GameState } from "../../../models/GameState"
import { ValidationResult } from "../../../models/Validation"
import { BUILD_COSTS } from "../resources/buildCosts"
import { hasResources } from "../resources/hasResources"

export function validateBuyDevelopmentCard(
  state: GameState,
  playerId: string
): ValidationResult {
  if (state.turn.playerId !== playerId)
    return { valid: false, error: "Not your turn" }

  if (state.phase !== "BUILD")
    return { valid: false, error: "Cannot buy development card in this phase" }

  if (state.developmentDeck.length === 0)
    return { valid: false, error: "Development deck is empty" }

  const player = state.players.find(p => p.playerId === playerId)

  if (!player)
    return { valid: false, error: "Player not found" }

  if (!hasResources(player, BUILD_COSTS.DEVELOPMENT_CARD))
    return { valid: false, error: "Not enough resources" }

  return { valid: true }
}