function calculateValue(value) {
  return new Function('return ' + value)
}

export default calculateValue