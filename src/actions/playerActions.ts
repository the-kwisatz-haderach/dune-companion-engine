import { createAction, PayloadActionCreator } from '@reduxjs/toolkit'
import { AllianceRequest } from '../models/alliance'
import { Factions } from '../models/faction'
import { Conditions } from '../models/game'
import { PlayerActionType, PlayerActionPayload } from './types'

const createPlayerAction = <T = {}>(
  type: PlayerActionType
): PayloadActionCreator<PlayerActionPayload<T>, PlayerActionType> =>
  createAction<PlayerActionPayload<T>, PlayerActionType>(type)

export const createGame = createAction<{ gameId: string }>(
  PlayerActionType.CREATE_GAME
)

export const setConditions = createPlayerAction<Conditions>(
  PlayerActionType.SET_CONDITIONS
)

export const setPlayerOrder = createPlayerAction<{ playerOrder: string[] }>(
  PlayerActionType.SET_PLAYER_ORDER
)

export const selectFaction = createPlayerAction<{ faction: Factions }>(
  PlayerActionType.SELECT_FACTION
)

export const startGame = createPlayerAction(PlayerActionType.START_GAME)

export const requestAlliance = createPlayerAction<AllianceRequest>(
  PlayerActionType.REQUEST_ALLIANCE
)

export const confirmAlliance = createPlayerAction<AllianceRequest>(
  PlayerActionType.CONFIRM_ALLIANCE
)

export const joinGame = createPlayerAction<{
  name: string
  gameId: string
}>(PlayerActionType.JOIN_GAME)

export const leaveGame = createPlayerAction(PlayerActionType.LEAVE_GAME)

const playerActions = {
  [PlayerActionType.SET_PLAYER_ORDER]: setPlayerOrder,
  [PlayerActionType.SELECT_FACTION]: selectFaction,
  [PlayerActionType.SET_CONDITIONS]: setConditions,
  [PlayerActionType.REQUEST_ALLIANCE]: requestAlliance,
  [PlayerActionType.START_GAME]: startGame,
  [PlayerActionType.CONFIRM_ALLIANCE]: confirmAlliance,
  [PlayerActionType.JOIN_GAME]: joinGame,
  [PlayerActionType.LEAVE_GAME]: leaveGame,
  [PlayerActionType.CREATE_GAME]: createGame
}

export type PlayerAction = typeof playerActions[keyof typeof playerActions]

export default playerActions
