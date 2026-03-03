import { Board, Tile, Vertex, Edge } from "../../models/Board";

export function getEdgesFromVertex(
  board: Board,
  vertexId: string
): Edge[] {
  return Object.values(board.edges).filter(
    e => e.vertexA === vertexId || e.vertexB === vertexId
  );
}

export function getAdjacentVertices(
  board: Board,
  vertexId: string
): Vertex[] {
  return getEdgesFromVertex(board, vertexId).map(edge => {
    const other =
      edge.vertexA === vertexId
        ? edge.vertexB
        : edge.vertexA;
    return board.vertices[other];
  });
}

export function getEdgesForPlayer(
  board: Board,
  playerId: string
): Edge[] {
  return Object.values(board.edges).filter(
    e => e.road?.playerId === playerId
  );
}

export function getVerticesForPlayer(
  board: Board,
  playerId: string
): Vertex[] {
  return Object.values(board.vertices).filter(
    v => v.building?.playerId === playerId
  );
}

export function getVerticesForTile(
  board: Board,
  tileId: string
): Vertex[] {
  return Object.values(board.vertices).filter(
    v => v.adjacentTileIds.includes(tileId)
  );
}

export function getTilesForVertex(
  board: Board,
  vertexId: string
): Tile[] {
  return board.vertices[vertexId].adjacentTileIds.map(
    tileId => board.tiles[tileId]
  );
}

export function getConnectedRoadEdgesFromVertex(
  board: Board,
  vertexId: string,
  playerId: string
): Edge[] {
  return getEdgesFromVertex(board, vertexId).filter(
    e => e.road?.playerId === playerId
  );
}