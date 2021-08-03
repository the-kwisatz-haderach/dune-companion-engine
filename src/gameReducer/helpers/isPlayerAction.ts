import { AnyAction } from '@reduxjs/toolkit'
import playerActions from '../../actions/playerActions'
import { PlayerActionType } from '../../models/actions'

export type PlayerAction = ReturnType<
  typeof playerActions[keyof typeof playerActions]
>

const isPlayerAction = (
  action: AnyAction
): action is typeof playerActions[keyof typeof playerActions] =>
  Object.values(PlayerActionType).includes(action.type)

export default isPlayerAction
