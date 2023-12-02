'use strict';

import fs from 'fs';
import path from 'path';
import { getTwoDigitNumber as getTwoDigitNumberA } from './partA.js';
import { getTwoDigitNumber as getTwoDigitNumberB } from './partB.js';

const fileLines = fs.readFileSync(path.resolve('../../../resources/y2023/day01/input.txt'), 'utf-8').trim().split("\n");

const partOneResult = fileLines.map(getTwoDigitNumberA).reduce((a,b) => a + b, 0);
console.log(partOneResult);

const partTwoResult = fileLines.map(getTwoDigitNumberB).reduce((a,b) => a + b, 0);
console.log(partTwoResult);