import { GameState } from "../../../models/GameState";
import { ValidationResult } from "../../../models/Validation";

export function validateEndTurn(
  state: GameState,
  playerId: string
): ValidationResult {
  if (state.turn.playerId !== playerId)
    return { valid: false, error: "Not your turn" }

  if (state.phase == "ROLL")
    return { valid: false, error: "Must roll dice before ending turn" }

  return { valid: true };
}