import { GameState } from "../../../models/GameState"

export function applyRollDice(
  state: GameState,
  diceValue: number
): GameState {
  const next = structuredClone(state)

  next.turn.hasRolled = true
  next.turn.diceValue = diceValue

  if (diceValue === 7) {
    next.phase = "ROBBER"
  }

  return next
}