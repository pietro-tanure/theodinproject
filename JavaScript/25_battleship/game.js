export class Ship {
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

export class Gameboard {
  id = 2
  shipList = {}
  miss = 0

  constructor(height = 8, width = null) {
    if (width == null)
      width = height
    this.board = Array.from({ length: height }, () => Array(width).fill(0));
  }

  placeShip(initSquare, endSquare) {
    let [x1, y1] = initSquare
    let [x2, y2] = endSquare
    let dy = x1 - x2
    let dx = y1 - y2

    if (dx != 0 && dy != 0)
      throw Error('Ship must not be diagonal')

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

    this.shipList[this.id] = new Ship(Math.max(Math.abs(dx), Math.abs(dy)) + 1)
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

export class Player {
  constructor(type = 'person') {
    this.type = type
    this.board = new Gameboard
  }
}
