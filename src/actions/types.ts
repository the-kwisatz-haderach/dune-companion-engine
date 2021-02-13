import { Game } from '../models/game'
import { Player } from '../models/player'

export enum EngineActionType {
  INCREMENT_TURN = 'INCREMENT_TURN',
  INCREMENT_PHASE = 'INCREMENT_PHASE',
  PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
  UPDATE_GAME = 'UPDATE_GAME'
}

export enum PlayerActionType {
  CREATE_GAME = 'CREATE_GAME',
  JOIN_GAME = 'JOIN_GAME',
  LEAVE_GAME = 'LEAVE_GAME',
  SET_CONDITIONS = 'SET_CONDITIONS',
  SET_PLAYER_ORDER = 'SET_PLAYER_ORDER',
  START_GAME = 'START_GAME',
  SELECT_FACTION = 'SELECT_FACTION',
  REQUEST_ALLIANCE = 'REQUEST_ALLIANCE',
  CONFIRM_ALLIANCE = 'CONFIRM_ALLIANCE'
}

export type PlayerActionPayload<T = {}> = T & {
  playerId: Player['id']
  gameId: Game['id']
}