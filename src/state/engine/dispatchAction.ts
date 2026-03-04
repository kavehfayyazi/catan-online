import { GameState } from "../../models/GameState"
import { GameAction } from "../../models/GameAction"

import { validateBuildRoad } from "../rules/placement/validateBuildRoad"
import { validateBuildSettlement } from "../rules/placement/validateBuildSettlement"
import { validateUpgradeCity } from "../rules/placement/validateUpgradeCity"

import { validateBuyDevelopmentCard } from "../rules/development/validateBuyDevelopmentCard"
import { validatePlayKnight } from "../rules/development/validatePlayKnight"

import { validateRollDice } from "../rules/phase/validateRollDice"
import { validateEndTurn } from "../rules/phase/validateEndTurn"

import { validateBankTrade } from "../rules/trade/validateBankTrade"
import { validatePlayerTrade } from "../rules/trade/validatePlayerTrade"
import { validatePortTrade } from "../rules/trade/validatePortTrade"

import { applyBuildRoad } from "../actions/build/applyBuildRoad"
import { applyBuildSettlement } from "../actions/build/applyBuildSettlement"
import { applyUpgradeCity } from "../actions/build/applyUpgradeCity"

import { applyBuyDevelopmentCard } from "../actions/development/applyBuyDevelopmentCard"
import { applyPlayKnight } from "../actions/development/applyPlayKnight"

import { applyRollDice } from "../actions/turn/applyRollDice"
import { applyEndTurn } from "../actions/turn/applyEndTurn"

import { applyBankTrade } from "../actions/trade/applyBankTrade"
import { applyPlayerTrade } from "../actions/trade/applyPlayerTrade"


import { updateLargestArmy } from "../actions/scoring/updateLargestArmy"
import { updateLongestRoad } from "../actions/scoring/updateLongestRoad"
import { checkWinCondition } from "../actions/scoring/checkWinCondition"

export function dispatchAction(
  state: GameState,
  action: GameAction
): GameState {
  let nextState = state

  switch (action.type) {
    case "ROLL_DICE": {
      const validation = validateRollDice(state, action.playerId)
      if (!validation.valid) throw new Error(validation.error)

      nextState = applyRollDice(state, action.diceValue)
      break
    }

    case "END_TURN": {
      const validation = validateEndTurn(state, action.playerId)
      if (!validation.valid) throw new Error(validation.error)

      nextState = applyEndTurn(state)
      break
    }

    case "BUILD_ROAD": {
      const validation = validateBuildRoad(state, action.playerId, action.edgeId)
      if (!validation.valid) throw new Error(validation.error)

      nextState = applyBuildRoad(state, action.playerId, action.edgeId)
      nextState = updateLongestRoad(nextState)
      break
    }

    case "BUILD_SETTLEMENT": {
      const validation = validateBuildSettlement(state, action.playerId, action.vertexId)
      if (!validation.valid) throw new Error(validation.error)

      nextState = applyBuildSettlement(state, action.playerId, action.vertexId)
      break
    }

    case "UPGRADE_CITY": {
      const validation = validateUpgradeCity(state, action.playerId, action.vertexId)
      if (!validation.valid) throw new Error(validation.error)

      nextState = applyUpgradeCity(state, action.playerId, action.vertexId)
      break
    }

    case "BUY_DEV_CARD": {
      const validation = validateBuyDevelopmentCard(state, action.playerId)
      if (!validation.valid) throw new Error(validation.error)

      nextState = applyBuyDevelopmentCard(state, action.playerId)
      break
    }

    case "PLAY_KNIGHT": {
      const validation = validatePlayKnight(state, action.playerId)
      if (!validation.valid) throw new Error(validation.error)

      nextState = applyPlayKnight(state, action.playerId, action.tileId)
      nextState = updateLargestArmy(nextState)
      break
    }

    case "BANK_TRADE": {
      const validation = validateBankTrade(
        state,
        action.playerId,
        action.giveResource,
        action.giveAmount,
        action.receiveResource
      )

      if (!validation.valid) throw new Error(validation.error)

      nextState = applyBankTrade(
        state,
        action.playerId,
        action.giveResource,
        action.giveAmount,
        action.receiveResource
      )

      break
    }

    case "PORT_TRADE": {

      const validation = validatePortTrade(
        state,
        action.playerId,
        action.giveResource,
        action.giveAmount,
        action.receiveResource
      )
    
      if (!validation.valid) throw new Error(validation.error)
    
      nextState = applyBankTrade(
        state,
        action.playerId,
        action.giveResource,
        action.giveAmount,
        action.receiveResource
      )
    
      break
    }

    case "PLAYER_TRADE": {

      const validation = validatePlayerTrade(
        state,
        action.fromPlayerId,
        action.toPlayerId,
        action.offer,
        action.request
      )
    
      if (!validation.valid) throw new Error(validation.error)
    
      nextState = applyPlayerTrade(
        state,
        action.fromPlayerId,
        action.toPlayerId,
        action.offer,
        action.request
      )
    
      break
    }

    default:
      throw new Error("Unknown action")
  }

  let winner = checkWinCondition(nextState)

  if (winner) {
    console.log(`Player ${winner} wins`)
  }

  return nextState
}