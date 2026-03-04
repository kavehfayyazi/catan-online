import { GameState } from "../../../models/GameState";
import { ValidationResult } from "../../../models/Validation";

export function validateMoveRobber(
  state: GameState,
  tileId: string
): ValidationResult {
  if (state.board.robberTileId === tileId)
    return { valid: false, error: "Robber is already on this tile" }

  return { valid: true }
}