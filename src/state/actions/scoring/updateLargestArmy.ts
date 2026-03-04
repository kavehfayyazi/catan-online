import { GameState } from "../../../models/GameState"

export function updateLargestArmy(
  state: GameState
): GameState {
  const next = structuredClone(state)

  let owner = next.largestArmyOwner
  let ownerSize = owner
    ? next.players.find(p => p.playerId === owner)!.knightsPlayed
    : 2

  for (const player of next.players)
    if (player.knightsPlayed >= 3 && player.knightsPlayed > ownerSize) {
      owner = player.playerId
      ownerSize = player.knightsPlayed
    }

  next.largestArmyOwner = owner

  return next
}