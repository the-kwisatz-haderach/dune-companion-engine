export type Auction = {
  awaitingConfirmation: string[]
  currentRound: number
  participants: string[]
  rounds: AuctionRound[]
  results: AuctionRoundResult[]
  isDone: boolean
}

export type AuctionRound = {
  currentBidder: string
  bids: AuctionBid[]
  passingOnBidding: string[]
}

export type AuctionRoundResult = {
  winner: string
  winningBid: number
}

export type AuctionBid = {
  bidder: string
  amount: number
}

export function createAuctionRound(initialBidderId: string): AuctionRound {
  return {
    currentBidder: initialBidderId,
    passingOnBidding: [],
    bids: []
  }
}

export default function createAuction(playerIds: string[]): Auction {
  return {
    awaitingConfirmation: playerIds,
    currentRound: 0,
    participants: [],
    rounds: [],
    results: [],
    isDone: false
  }
}
