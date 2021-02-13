import gameReducer from '..'
import { initialGameState } from '../../models/game'

describe('gameReducer', () => {
  test('invalid action', () => {
    expect(gameReducer(initialGameState, {} as any)).toEqual(initialGameState)
  })
})
