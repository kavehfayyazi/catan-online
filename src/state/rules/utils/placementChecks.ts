import { Board } from "../../../models/Board";
import { getAdjacentVertices, getEdgesFromVertex } from "../../graph/adjacency";

export function isVertexEmpty(
  board: Board,
  vertexId: string
): boolean {
  return board.vertices[vertexId].building === null;
}

export function hasAdjacentBuilding(
  board: Board,
  vertexId: string
): boolean {
  return getAdjacentVertices(board, vertexId).some(v => v.building !== null);
}

export function hasRoad(
  board: Board,
  edgeId: string
): boolean {
  return board.edges[edgeId].road !== null;
}

export function isVertexOwnedByPlayer(
  board: Board,
  vertexId: string,
  playerId: string
): boolean {
  const building = board.vertices[vertexId].building;
  return building?.playerId === playerId;
}

export function isVertexConnectedToPlayerRoad(
  board: Board,
  vertexId: string,
  playerId: string
): boolean {
  return getEdgesFromVertex(board, vertexId).some(
    e => e.road?.playerId === playerId
  );
}

export function isEdgeConnectedToPlayerNetwork(
  board: Board,
  edgeId: string,
  playerId: string
): boolean {
  const edge = board.edges[edgeId]
  const vertexA = board.vertices[edge.vertexA]
  const vertexB = board.vertices[edge.vertexB]

  if (vertexA.building?.playerId === playerId) return true
  if (vertexB.building?.playerId === playerId) return true

  const edgesA = getEdgesFromVertex(board, edge.vertexA)
  const edgesB = getEdgesFromVertex(board, edge.vertexB)

  return (
    edgesA.some(e => e.road?.playerId === playerId) ||
    edgesB.some(e => e.road?.playerId === playerId)
  )
}