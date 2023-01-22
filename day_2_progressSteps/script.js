const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  if (currentActive === circles.length) return update()
  currentActive++
  update()
})


prev.addEventListener('click', () => {
  if (currentActive === 1) return update()
  currentActive--
  update()
})

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const active = document.querySelectorAll('.active')

  const width = `${(active.length - 1) / (circles.length - 1) * 100}%`
  progress.style.width = width

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
  }
}