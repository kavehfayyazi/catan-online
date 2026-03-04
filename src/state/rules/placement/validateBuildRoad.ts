import { GameState } from "../../../models/GameState";
import { ValidationResult } from "../../../models/Validation";
import { hasRoad, isEdgeConnectedToPlayerNetwork } from "../utils/placementChecks";
import { hasResources } from "../resources/hasResources";
import { BUILD_COSTS } from "../resources/buildCosts";

export function validateBuildRoad(
  state: GameState,
  playerId: string,
  edgeId: string
): ValidationResult {
  const board = state.board
  
  if (state.turn.playerId !== playerId)
    return { valid: false, error: "Not your turn" }

  if (state.phase !== "BUILD")
      return { valid: false, error: "Cannot build road in this phase" }

  if (hasRoad(board, edgeId))
      return { valid: false, error: "Road already exists here" }

  if (!isEdgeConnectedToPlayerNetwork(board, edgeId, playerId))
      return { valid: false, error: "Road must connect to your network" }

  const player = state.players.find(p => p.playerId === playerId)

  if (!player)
      return { valid: false, error: "Player not found" }

  if (!hasResources(player, BUILD_COSTS.ROAD))
      return { valid: false, error: "Not enough resources" }

  return { valid: true }
}