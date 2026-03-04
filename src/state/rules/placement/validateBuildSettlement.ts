import { GameState } from "../../../models/GameState";
import { ValidationResult } from "../../../models/Validation";
import { isVertexEmpty, hasAdjacentBuilding, isVertexConnectedToPlayerRoad } from "../utils/placementChecks";
import { hasResources } from "../resources/hasResources";
import { BUILD_COSTS } from "../resources/buildCosts";

export function validateBuildSettlement(
  state: GameState,
  playerId: string,
  vertexId: string
): ValidationResult {
  const board = state.board

  if (state.turn.playerId !== playerId)
    return { valid: false, error: "Not your turn" }

  if (state.phase !== "SETUP" && state.phase !== "BUILD")
      return { valid: false, error: "Cannot build road in this phase" }

  if (!isVertexEmpty(board, vertexId))
    return { valid: false, error: "Vertex already occupied" }

  if (hasAdjacentBuilding(board, vertexId))
    return { valid: false, error: "Too close to another settlement" }

  if (state.phase !== "SETUP" && !isVertexConnectedToPlayerRoad(board, vertexId, playerId))
    return { valid: false, error: "Settlement must connect to your road" }

  const player = state.players.find(p => p.playerId === playerId)

  if (!player)
      return { valid: false, error: "Player not found" }

  if (!hasResources(player, BUILD_COSTS.ROAD))
      return { valid: false, error: "Not enough resources" }


  return { valid: true }
}