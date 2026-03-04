import { GameState } from "../../../models/GameState"

export function applyPlayKnight(
  state: GameState,
  playerId: string,
  tileId: string
): GameState {
  const next = structuredClone(state)
  const player = next.players.find(p => p.playerId === playerId)!

  player.developmentCards.splice(player.developmentCards.map(e => e.type).indexOf("KNIGHT"), 1)

  next.board.robberTileId = tileId
  next.turn.devCardPlayed = true

  player.knightsPlayed += 1

  return next
}