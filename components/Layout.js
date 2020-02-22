const LabelTypes = {
  T: 'triangle',
  S: 'square',
  R: 'circle',
  A: 'a',
  B: 'b',
  C: 'c'
}

const Colors = {
  W: 'white',
  B: 'black'
}

function contains (str, matches) {
  for (let i = 0; i < matches.length; ++i) {
    if (str.includes(matches[i])) { return matches[i] }
  }
  return null
}

class Intersection {
  constructor (color, label) {
    this.color = color
    this.label = label
  }
}

class Layout {
  constructor (rows, message = '') {
    this.message = message
    this.transformedTable = []
    for (let i = 0; i < rows.length; ++i) {
      const row = []
      const columns = rows[i].split(' ')
      for (let j = 0; j < columns.length; ++j) {
        row.push(new Intersection(this.getColor(columns[j]), this.getLabel(columns[j])))
      }
      this.transformedTable.push(row)
    }
  }

  getLength () {
    return this.transformedTable.length
  }

  getTransformed () {
    return this.transformedTable
  }

  getColor (cell) {
    return Colors[contains(cell, Object.keys(Colors))]
  }

  getLabel (cell) {
    return LabelTypes[contains(cell, Object.keys(LabelTypes))]
  }

  getStones () {
    const stones = []
    for (let i = 0; i < this.transformedTable.length; ++i) {
      for (let j = 0; j < this.transformedTable[i].length; ++j) {
        if (this.transformedTable[i][j].color) {
          stones.push({
            x: i,
            y: j,
            color: this.transformedTable[i][j].color
          })
        }
      }
    }
    return stones
  }

  getLabels () {
    const labels = []
    for (let i = 0; i < this.transformedTable.length; ++i) {
      for (let j = 0; j < this.transformedTable[i].length; ++j) {
        if (this.transformedTable[i][j].label) {
          labels.push({
            x: i,
            y: j,
            label: this.transformedTable[i][j].label
          })
        }
      }
    }
    return labels
  }
}

export default Layout
