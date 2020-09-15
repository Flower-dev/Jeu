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
