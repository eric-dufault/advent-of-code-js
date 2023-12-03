'use strict';

import fs from 'fs';
import path from 'path';

const parseGame = function(line) {
  const firstParts = line.split(':');

  const game = {
    id: parseInt(firstParts[0].trim().split(' ')[1]),
    gameRounds: []
  };
  
  const rounds = firstParts[1].trim().split(';');
  for (const round of rounds) {
    const cubes = round.trim().split(',');

    const gameRound = {red: 0, green: 0, blue: 0};
    for (let i = 0; i < cubes.length; i++) {
      const cubeParts = cubes[i].trim().split(' ');

      gameRound[cubeParts[1]] = parseInt(cubeParts[0]);
    }
    game.gameRounds.push(gameRound);
  }

  return game;
};

const gamePossible = function(game, redLimit = 12, greenLimit = 13, blueLimit = 14) {
  const gameNotPossible = game.gameRounds.some(gr => gr.red > redLimit || gr.green > greenLimit || gr.blue > blueLimit);
  return !gameNotPossible;
};

const getFewestPossibleCubesGameRound = function(game) {
  return {
    red: Math.max(...(game.gameRounds.flatMap(gr => gr.red))),
    green: Math.max(...(game.gameRounds.flatMap(gr => gr.green))),
    blue: Math.max(...(game.gameRounds.flatMap(gr => gr.blue))),
  }
};


const fileLines = fs.readFileSync(path.resolve('../../../resources/y2023/day02/input.txt'), 'utf-8').trim().split("\n");
const games = fileLines.map(parseGame);

const idSum = games.filter(g => gamePossible(g)).map(g => g.id).reduce((acc, cur) => acc + cur, 0);
console.log(idSum);

const powerSum = games.map(getFewestPossibleCubesGameRound).map(gr => gr.red * gr.green * gr.blue).reduce((acc, cur) => acc + cur, 0);
console.log(powerSum);
