import { createReducer, compose } from '@reduxjs/toolkit'
import { initialGameState } from '../models/game'
import playerActionBuilder from './playerActionBuilder'
import engineActionBuilder from './engineActionBuilder'

const gameReducer = createReducer(
  initialGameState,
  compose(engineActionBuilder, playerActionBuilder)
)

export default gameReducer
