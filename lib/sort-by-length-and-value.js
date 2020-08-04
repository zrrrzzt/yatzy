const sum = arr => {
  return arr.reduce((accumulator, current) => {
    accumulator += current.value()
    return accumulator
  }, 0)
}

const sortByLengthAndValue = (a, b) => {
  if (a.length > b.length) {
    return -1
  }
  if (a.length < b.length) {
    return 1
  }
  if (sum(a) > sum(b)) {
    return -1
  }
  if (sum(a) < sum(b)) {
    return 1
  }
}

export default sortByLengthAndValue
