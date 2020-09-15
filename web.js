let snake = initialState()


const step= t1 => t2 =>{
  if (t2 - t1 > 100) {
    state = next(state)
    draw()
    window.requestAnimationFrame(step(t2))
  } else {
    window.requestAnimationFrame(step(t1))
  }
}

draw();window.requestAnimationFrame(step(0))
