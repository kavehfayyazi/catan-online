import { GameState } from "../../../models/GameState"

export function applyBankTrade(
  state: GameState,
  playerId: string,
  giveResource: string,
  giveAmount: number,
  receiveResource: string
): GameState {
  const next = structuredClone(state)
  const player = next.players.find(p => p.playerId === playerId)!

  player.resources[giveResource] -= giveAmount
  player.resources[receiveResource] += 1

  return next
}