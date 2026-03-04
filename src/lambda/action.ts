import { dispatchAction } from "../state/engine/dispatchAction"

export const handler = async (event: any) => {
  const body = JSON.parse(event.body)

  const { game, action } = body

  try {
    const updatedGame = dispatchAction(game, action)

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