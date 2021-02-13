import { playerActions } from '../../actions'
import gameReducer from '../'
import factions from '../../library/factions'
import { Factions } from '../../models/faction'
import { initialGameState } from '../../models/game'
import { playerFixture } from './__fixtures__'

describe('playerActions', () => {
  test('setConditions', () => {
    expect(
      gameReducer(
        initialGameState,
        playerActions.SET_CONDITIONS({
          gameId: 'test',
          playerId: 'test',
          maxPlayers: 4,
          maxTurns: 5,
          advancedMode: true
        })
      )
    ).toEqual({
      ...initialGameState,
      conditions: {
        maxPlayers: 4,
        maxTurns: 5,
        advancedMode: true
      }
    })
  })
  test('requestAlliance', () => {
    expect(
      gameReducer(
        {
          ...initialGameState,
          allianceRequests: []
        },
        playerActions.REQUEST_ALLIANCE({
          gameId: 'test',
          playerId: 'test',
          requester: 'atreides',
          responder: 'fremen'
        })
      )
    ).toEqual({
      ...initialGameState,
      allianceRequests: [{ requester: 'atreides', responder: 'fremen' }]
    })
  })
  test('setPlayerOrder', () => {
    expect(
      gameReducer(
        {
          ...initialGameState,
          playerOrder: ['three', 'two', 'one']
        },
        playerActions.SET_PLAYER_ORDER({
          gameId: 'test',
          playerId: 'test',
          playerOrder: ['one', 'two', 'three']
        })
      )
    ).toEqual({
      ...initialGameState,
      playerOrder: ['one', 'two', 'three']
    })
  })
  test('selectFaction', () => {
    expect(
      gameReducer(
        {
          ...initialGameState,
          players: {
            test: {
              ...playerFixture,
              faction: Factions.BENE_GESSERIT
            }
          }
        },
        playerActions.SELECT_FACTION({
          gameId: 'test',
          playerId: 'test',
          faction: Factions.EMPEROR
        })
      )
    ).toEqual({
      ...initialGameState,
      players: {
        test: {
          ...playerFixture,
          faction: Factions.EMPEROR
        }
      }
    })
  })
  test('joinGame', () => {
    expect(
      gameReducer(
        initialGameState,
        playerActions.JOIN_GAME({
          playerId: 'test',
          name: 'paul',
          gameId: 'test'
        })
      )
    ).toEqual({
      ...initialGameState,
      players: {
        test: {
          id: 'test',
          isAdmin: false,
          name: 'paul',
          faction: null,
          spice: 0,
          treacheryCards: 0
        }
      }
    })
  })
  test('leaveGame', () => {
    expect(
      gameReducer(
        {
          ...initialGameState,
          awaitingAction: ['test'],
          players: {
            test: {
              id: 'test',
              isAdmin: false,
              name: 'paul',
              faction: null,
              spice: 0,
              treacheryCards: 0
            }
          },
          allianceRequests: [{ requester: 'test', responder: 'someone' }],
          alliances: [{ players: ['test', 'other', 'third'] }],
          playerOrder: ['test', 'other', 'third']
        },
        playerActions.LEAVE_GAME({ playerId: 'test', gameId: 'test' })
      )
    ).toEqual({
      ...initialGameState,
      players: {},
      awaitingAction: [],
      allianceRequests: [],
      alliances: [{ players: ['other', 'third'] }],
      playerOrder: ['other', 'third']
    })
  })
  test('startGame', () => {
    expect(
      gameReducer(
        {
          ...initialGameState,
          players: {
            harkonnen: {
              ...playerFixture,
              faction: Factions.HOUSE_HARKONNEN,
              spice: 0,
              treacheryCards: 0
            },
            atreides: {
              ...playerFixture,
              faction: Factions.HOUSE_ATREIDES,
              spice: 0,
              treacheryCards: 0
            }
          }
        },
        playerActions.START_GAME()
      )
    ).toEqual({
      ...initialGameState,
      currentTurn: 1,
      players: {
        harkonnen: {
          ...playerFixture,
          faction: Factions.HOUSE_HARKONNEN,
          spice: factions[Factions.HOUSE_HARKONNEN].startingSpice,
          treacheryCards: factions[Factions.HOUSE_HARKONNEN].startingItems
        },
        atreides: {
          ...playerFixture,
          faction: Factions.HOUSE_ATREIDES,
          spice: factions[Factions.HOUSE_ATREIDES].startingSpice,
          treacheryCards: factions[Factions.HOUSE_ATREIDES].startingItems
        }
      }
    })
  })
})
