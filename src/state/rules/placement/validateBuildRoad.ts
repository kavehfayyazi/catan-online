import { GameState } from "../../../models/GameState";
import { ValidationResult } from "../../../models/Validation";
import {
  hasRoad,
  isEdgeConnectedToPlayerNetwork
} from "../utils/placementChecks";

export function validateBuildRoad(
  state: GameState,
  playerId: string,
  edgeId: string
): ValidationResult {
  const board = state.board

  if (hasRoad(board, edgeId))
    return { valid: false, error: "Road already exists here" }

  if (!isEdgeConnectedToPlayerNetwork(board, edgeId, playerId))
    return { valid: false, error: "Road must connect to your network" }

  return { valid: true }
}