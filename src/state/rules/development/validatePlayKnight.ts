import { GameState } from "../../../models/GameState";
import { ValidationResult } from "../../../models/Validation";

// TODO: Add validation for not playing the same development card
export function validatePlayKnight(
  state: GameState,
  playerId: string
): ValidationResult {
  const player = state.players[playerId];

  if (!player.devCards.includes("KNIGHT"))
    return { valid: false, error: "No knight card available" }

  if (state.turn.devCardPlayed)
    return { valid: false, error: "Development card already played this turn" }

  return { valid: true };
}