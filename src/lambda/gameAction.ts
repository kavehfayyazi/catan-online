import { dispatchAction } from "../state/engine/dispatchAction"

export const handler = async (event: any) => {
  const body = JSON.parse(event.body)

  const { action, game, payload } = body

  try {
    const updatedGame = dispatchAction(game, action, payload)

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        game: updatedGame
      })
    }

  } catch (err: any) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        error: err.message
      })
    }
  }
}