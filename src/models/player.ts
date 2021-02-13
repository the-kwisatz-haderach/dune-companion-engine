import { Factions } from './faction'

export type Player = {
  id: string
  isAdmin: boolean
  faction: Factions | null
  name: string
  spice: number
  treacheryCards: number
}

export default function createPlayer({
  id,
  name,
  isAdmin = false
}: {
  id: string
  name: string
  isAdmin?: boolean
}): Player {
  return {
    id,
    name,
    isAdmin,
    faction: null,
    spice: 0,
    treacheryCards: 0
  }
}
