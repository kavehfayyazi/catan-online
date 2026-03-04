import { GameState } from "../../../models/GameState";
import { ValidationResult } from "../../../models/Validation";

export function validateUpgradeCity(
  state: GameState,
  playerId: string,
  vertexId: string
): ValidationResult {
  const building = state.board.vertices[vertexId].building;

  if (!building)
    return { valid: false, error: "No settlement here" };

  if (building.playerId !== playerId)
    return { valid: false, error: "You do not own this settlement" };

  if (building.type !== "SETTLEMENT")
    return { valid: false, error: "Already a city" };

  return { valid: true };
}