import { createAction } from '@reduxjs/toolkit'
import { Game } from '../models/game'
import { EngineActionType } from './types'

export const incrementTurn = createAction(EngineActionType.INCREMENT_TURN)

export const incrementPhase = createAction(EngineActionType.INCREMENT_PHASE)

export const updateGame = createAction<{ game: Game }>(
  EngineActionType.UPDATE_GAME
)

const engineActions = {
  [EngineActionType.INCREMENT_PHASE]: incrementPhase,
  [EngineActionType.INCREMENT_TURN]: incrementTurn,
  [EngineActionType.UPDATE_GAME]: updateGame
}

export default engineActions
