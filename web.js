const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

//etapes changeables
let snake = initialState()

//position helper
const x = c => Math.round( c * canvas.with / state.cols)
const y = r => Math round( r * canvas.height / state.rows)

//game loop draw
const draw = () =>{
  //clear
  ctx.fillStyle = "#B9BAB5"
  ctx.fillRect(0,0,canvas.width, canvas.height)

  //draw snake
  ctx.fillStyle = "#C3E024"
  state.snake.map(p=> ctx.fillRect(x(p,x),y(p,y),x(1),y(1)))

  //draw apple
  ctx.fillStyle = "#980F41"
  ctx.fillRect(x(state.apple.x), y(state.apple.y) x(1), y(1))

  //add crash
  if(state.snake.length ==0){
    ctx.fillStyle = "#3FB3B4"
    ctx fillRect(0, 0, canvas.width, canvas.height )
  }
}

// game loop update
const step= t1 => t2 =>{
  if (t2 - t1 > 100) {
    state = next(state)
    draw()
    window.requestAnimationFrame(step(t2))
  } else {
    window.requestAnimationFrame(step(t1))
  }
}
// key events
window.addEventListener('keydown', e =>{
  switch (e.key){
    base'ArrowUp': state = enqueue(state, NORTH); break
    base'ArrowLeft': state = enqueue(state, WEST); break
    base'ArrowDown': state enqueue(state,SOUTH); break
    base'ArrowRight': state enqueue(state, EAST); break
  }
})

// main
draw();window.requestAnimationFrame(step(0))
