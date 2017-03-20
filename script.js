var visited = document.getElementById('visited')
var toggle = document.getElementById('toggle')

var visitedValue = window.localStorage.getItem('visitedValue')
var dayFlag = window.localStorage.getItem('dayFlag')

var changeTheme = function () {
  dayFlag = !dayFlag
  if (dayFlag) {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  } else {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  }
  window.localStorage.setItem('dayFlag', dayFlag)
}

toggle.addEventListener('click', changeTheme)

if (visitedValue === null) {
  visitedValue = 1
  visited.textContent = visitedValue + ' time'
  window.localStorage.setItem('visitedValue', visitedValue)
} else {
  visitedValue = parseInt(visitedValue) + 1
  visited.textContent = visitedValue + ' times'
  window.localStorage.setItem('visitedValue', visitedValue)
}

if (dayFlag === null) {
  dayFlag = true
  window.localStorage.setItem('dayFlag', dayFlag)
} else {
  dayFlag = !(dayFlag === 'true')
  changeTheme()
}
