import { GameState } from "../../../models/GameState"
import { ResourceType } from "../../../models/Resources"

export function applyPlayerTrade(
  state: GameState,
  fromPlayerId: string,
  toPlayerId: string,
  offer: Record<ResourceType, number>,
  request: Record<ResourceType, number>
): GameState {
  const next = structuredClone(state)

  const fromPlayer = next.players.find(p => p.playerId === fromPlayerId)!
  const toPlayer = next.players.find(p => p.playerId === toPlayerId)!

  for (const resource in offer) {
    const amount = offer[resource]

    fromPlayer.resources[resource] -= amount
    toPlayer.resources[resource] += amount
  }

  for (const resource in request) {
    const amount = request[resource]

    toPlayer.resources[resource] -= amount
    fromPlayer.resources[resource] += amount
  }

  return next
}