import { GameState } from "../../../models/GameState"

export function applyEndTurn(
  state: GameState
): GameState {
  const next = structuredClone(state)

  const currentIndex = next.players.findIndex(
    p => p.playerId === next.turn.playerId
  )

  const nextPlayer = next.players[
    (currentIndex + 1) % next.players.length
  ]

  next.turn = {
    playerId: nextPlayer.playerId,
    hasRolled: false,
    diceValue: null,
    devCardPlayed: false
  }

  next.phase = "ROLL"

  return next
}