import { GameState, Phase } from "../../../models/GameState";
import { ValidationResult } from "../../../models/Validation";

export function validatePhase(
  state: GameState, 
  allowedPhases: Phase[]
): ValidationResult {
  if (!allowedPhases.includes(state.phase))
    return { valid: false, error: "Action not allowed in this phase" }

  return { valid: true }
}