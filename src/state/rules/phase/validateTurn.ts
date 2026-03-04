import { GameState } from "../../../models/GameState";
import { ValidationResult } from "../../../models/Validation";

export function validateTurn(
  state: GameState, 
  playerId: string
): ValidationResult {
  if (state.currentTurnPlayerId !== playerId)
    return { valid: false, error: "Not your turn" }

  return { valid: true }
}