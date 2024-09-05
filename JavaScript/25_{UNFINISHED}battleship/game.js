class Ship {
  sunk = false;
  hit = 0;

  constructor(length) {
    this.length = length
  }

  gotHit(p) {
    this.hit++;
    if (this.hit >= this.length)
      this.sunk = true
  }
}

class Gameboard {
  id = 2
  shipList = {}
  shipSizes = {}
  miss = 0

  constructor(height = 8, width = null, sizes = { 5: 1, 4: 1, 3: 2, 2: 2 }) {
    if (width == null)
      width = height
    this.board = Array.from({ length: height }, () => Array(width).fill(0));
    this.sizes = sizes
    for (let key in sizes) {
      this.shipSizes[key] = []
    }
  }

  addShip(list) {
    let coordinates1 = [Math.floor(list[0] / boardSize), list[0] % boardSize]
    let coordinates2 = [Math.floor(list[1] / boardSize), list[1] % boardSize]

    this.placeShip(coordinates1, coordinates2)
  }

  placeShip(initSquare, endSquare) {
    let [x1, y1] = initSquare
    let [x2, y2] = endSquare
    let dy = x1 - x2
    let dx = y1 - y2

    if (dx != 0 && dy != 0)
      throw Error('Ship must not be diagonal')

    let length = Math.max(Math.abs(dx), Math.abs(dy)) + 1

    if (!(length in this.sizes)) {
      throw Error(`Can only create ships of size ${Object.keys(sizes)}`)
    }

    if (this.shipSizes[length]?.length == this.sizes[length]) {
      throw Error(`Can't create more ships of size ${length}`)
    }

    if (x1 <= x2) {
      for (let i = x1; i <= x2; i++) {
        if (y1 <= y2) {
          for (let j = y1; j <= y2; j++) {
            this.board[i][j] = this.id;
          }
        } else {
          for (let j = y1; j >= y2; j--) {
            this.board[i][j] = this.id;
          }
        }
      }
    } else {
      for (let i = x1; i >= x2; i--) {
        if (y1 <= y2) {
          for (let j = y1; j <= y2; j++) {
            this.board[i][j] = this.id;
          }
        } else {
          for (let j = y1; j >= y2; j--) {
            this.board[i][j] = this.id;
          }
        }
      }
    }

    this.shipList[this.id] = new Ship(length)
    this.shipSizes[length].push(this.id)
    this.id++
    return 1
  }

  receiveAttack(square) {
    let squareId = this.board[square[0]][square[1]]
    if (squareId >= 2) {
      this.shipList[squareId].gotHit()
      let sunk = this.shipList[squareId].sunk
      this.board[square[0]][square[1]] = -this.board[square[0]][square[1]]
      return sunk ? 'Sunk ship' : 'Hit'
    }
    else if (squareId >= 2) {
      this.board[square[0]][square[1]] = -1
      this.miss++
      return 'Miss'
    }
    else
      throw Error("Can't shoot same place twice")
  }

  allSunk() {
    let all = true
    for (let i in this.shipList) {
      all *= this.shipList[i].sunk
    }
    return 1 ? true : false
  }
}

class Player {
  constructor(type = 'person') {
    this.type = type
    this.board = new Gameboard
  }
}
