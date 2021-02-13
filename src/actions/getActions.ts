import { playerActions } from '.'
import { Game } from '../models/game'
import { Phases } from '../models/phase'
import { Player } from '../models/player'
import { PlayerActionType } from './types'

export default function getPlayerActions(
  player: Player,
  game: Game
): PlayerActionType[] {
  const { currentTurn, currentPhase } = game
  const actions: PlayerActionType[] = []

  if (currentTurn === 0) {
    actions.push(PlayerActionType.SELECT_FACTION)
    if (player.isAdmin) {
      actions.push(
        PlayerActionType.START_GAME,
        PlayerActionType.SET_PLAYER_ORDER
      )
    }
    return actions
  }

  switch (currentPhase) {
    case Phases.STORM:
      return []
  }

  return actions
}
