import { GameState } from "../../../models/GameState";
import { ValidationResult } from "../../../models/Validation";

export function validateRollDice(
  state: GameState,
  playerId: string
): ValidationResult {
  if (state.turn.playerId !== playerId)
    return { valid: false, error: "Not your turn" }

  if (state.phase !== "ROLL")
    return { valid: false, error: "Dice already rolled this turn" }

  return { valid: true }
}