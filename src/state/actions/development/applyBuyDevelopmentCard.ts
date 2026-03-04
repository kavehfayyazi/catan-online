import { GameState } from "../../../models/GameState"
import { BUILD_COSTS } from "../../rules/resources/buildCosts"

export function applyBuyDevelopmentCard(
  state: GameState,
  playerId: string
): GameState {
  const next = structuredClone(state)
  const player = next.players.find(p => p.playerId === playerId)!

  const card = next.developmentDeck.pop()

  player.resources.SHEEP -= BUILD_COSTS.DEVELOPMENT_CARD.SHEEP
  player.resources.WHEAT -= BUILD_COSTS.DEVELOPMENT_CARD.WHEAT
  player.resources.ORE -= BUILD_COSTS.DEVELOPMENT_CARD.ORE

  if (card) player.developmentCards.push({ type: card, isNew: true })

  return next
}