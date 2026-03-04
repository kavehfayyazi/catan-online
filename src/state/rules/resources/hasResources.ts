import { Player } from "../../../models/Player"

export function hasResources(
  player: Player,
  cost: Record<string, number>
): boolean {
  for (const resource in cost)
    if (player.resources[resource] < cost[resource])
      return false

  return true
}