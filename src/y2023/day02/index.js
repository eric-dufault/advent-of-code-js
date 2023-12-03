'use strict';

import fs from 'fs';
import path from 'path';
import {Game, GameRound} from './model.js';

const parseGame = function(line) {
  const firstParts = line.split(':');

  const game = new Game(parseInt(firstParts[0].trim().split(' ')[1]));
  
  const rounds = firstParts[1].trim().split(';');
  for (const round of rounds) {
    const cubes = round.trim().split(',');

    const gameRound = new GameRound(0, 0, 0);
    for (let i = 0; i < cubes.length; i++) {
      const cubeParts = cubes[i].trim().split(' ');

      gameRound[cubeParts[1]] = parseInt(cubeParts[0]);
    }
    game.addGameRound(gameRound);
  }

  return game;
};

const fileLines = fs.readFileSync(path.resolve('../../../resources/y2023/day02/input.txt'), 'utf-8').trim().split("\n");
const games = fileLines.map(parseGame);

const idSum = games.filter(g => g.isPossible()).map(g => g.id).reduce((acc, cur) => acc + cur, 0);
console.log(idSum);

const powerSum = games.map(g => g.getFewestPossibleCubesGameRound()).map(gr => gr.getPower()).reduce((acc, cur) => acc + cur, 0);
console.log(powerSum);
