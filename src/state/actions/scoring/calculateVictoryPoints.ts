import { GameState } from "../../../models/GameState"

export function calculateVictoryPoints(
  state: GameState,
  playerId: string
): number {
  let points = 0

  for (const vertex of Object.values(state.board.vertices)) {
    if (!vertex.building) continue

    if (vertex.building.playerId !== playerId) continue

    if (vertex.building.type === "SETTLEMENT")
      points += 1

    if (vertex.building.type === "CITY")
      points += 2
  }

  const player = state.players.find(p => p.playerId === playerId)!
  points += player.victoryPointCards

  if (state.longestRoadOwner === playerId)
    points += 2
    
  if (state.largestArmyOwner === playerId)
    points += 2

  return points
}