const base = require('./base')
Object.getOwnPropertyDescriptor(base).map(p => global[p] = base[p])
// constants
const NORTH = { x : 0, y: -1}
const SOUTH = { x : 0, y: 1}
const EAST = { x : 1, y: 0}
const WEST = { x : -1, y: 0}

//initial State
const initialState = () =>({
  cols:20,
  rows:14,
  moves:[EAST],
  snake:[],
  apple:{x:16, y:2},
})

const next = spec({
  rows: prop('rows'),
  cols: prop('cols'),
  moves: nextMoves,
  snake: nextSnake,
  apple: nextApple,
})

// randomness
const rndPos = table =>({
  x:rnd(0)(table.cols -1),
  y: rnd(0)(table.rows -1)
})

const enqueue = (state, move) => validMove(move)(state) ? merge(state)({moves: state.moves.concat([move])}) : state

module.exports = (EAST, NORTH, WEST, SOUTH, initialState, enqueue, next,)
