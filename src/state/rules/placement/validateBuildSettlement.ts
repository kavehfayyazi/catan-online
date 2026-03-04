import { GameState } from "../../../models/GameState";
import { ValidationResult } from "../../../models/Validation";
import {
  isVertexEmpty,
  hasAdjacentBuilding,
  isVertexConnectedToPlayerRoad
} from "../utils/placementChecks";

export function validateBuildSettlement(
  state: GameState,
  playerId: string,
  vertexId: string
): ValidationResult {
  const board = state.board

  if (!isVertexEmpty(board, vertexId))
    return { valid: false, error: "Vertex already occupied" }

  if (hasAdjacentBuilding(board, vertexId))
    return { valid: false, error: "Too close to another settlement" }

  if (state.phase !== "SETUP" && !isVertexConnectedToPlayerRoad(board, vertexId, playerId))
    return { valid: false, error: "Settlement must connect to your road" }

  return { valid: true }
}