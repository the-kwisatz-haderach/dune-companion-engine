import { PlayerActionType } from '../actions/types'
import { Player } from './player'

export type Play = Record<Player['id'], PlayerActionType[]>
