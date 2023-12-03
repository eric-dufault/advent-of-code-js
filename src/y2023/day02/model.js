'use strict';

export class GameRound {
  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  getPower() {
    return this.red * this.green * this.blue;
  }
}

export class Game {
  #id;
  #fewestPossibleCubesGameRound;

  constructor(id) {
    this.#id = id;
    this.gameRounds = [];
  }

  get id() {
    return this.#id;
  }

  addGameRound(gameRound) {
    this.gameRounds.push(gameRound);
  }

  isPossible(redLimit = 12, greenLimit = 13, blueLimit = 14) {
    return !this.#isNotPossible(redLimit, greenLimit, blueLimit);
  }

  #isNotPossible(redLimit = 12, greenLimit = 13, blueLimit = 14) {
    return this.gameRounds.some(gr => 
      gr.red > redLimit || gr.green > greenLimit || gr.blue > blueLimit
    );
  }

  getFewestPossibleCubesGameRound() {
    if (!this.#fewestPossibleCubesGameRound) {
      this.#fewestPossibleCubesGameRound = new GameRound(
        this.#findMax('red') ?? 0,
        this.#findMax('green') ?? 0,
        this.#findMax('blue') ?? 0
      );
    }
    return this.#fewestPossibleCubesGameRound;
  }

  #findMax(property) {
    return Math.max(...(this.gameRounds.flatMap(gr => gr[property])));
  }
}