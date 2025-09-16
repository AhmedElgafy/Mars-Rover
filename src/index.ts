import { getCurDirIndex, getNewDir, mover, obstaclesZone } from "./functions";
import { Directions, MOVES, ResI } from "./types";


///////////////////////////////// PART 1 //////////////////////////////
export const solutionP1 = (
  x: number,
  y: number,
  dir: Directions,
  commands: string
) => {
  const commandsArr = commands.split("") as MOVES[];
  let curDirIndex = getCurDirIndex(dir);
  const res: ResI = { x: x, y: y, dir: dir };
  commandsArr.forEach((command) => {
    if (command == "L" || command == "R") {
      let newDir = getNewDir(curDirIndex, command);
      res.dir = newDir.dir;
      curDirIndex = newDir.index;
    }
    if (command == "F" || command == "B") {
      const newValues = mover(res.x, res.y, command, res.dir);
      if (newValues) {
        res.x = newValues[0];
        res.y = newValues[1];
      }
    }
    console.log(res);
  });
  return `(${res.x}, ${res.y}) ${res.dir}`;
};


///////////////////////////////// PART 2 //////////////////////////////
export const solutionP2 = (
  x: number,
  y: number,
  dir: Directions,
  commands: string,
  coordinates: [number, number][]
) => {
  const commandsArr = commands.split("") as MOVES[];
  const isNotSafe = obstaclesZone(coordinates);
  let curDirIndex = getCurDirIndex(dir);
  const res: ResI = { x: x, y: y, dir: dir };
  for (let i = 0; i < commandsArr.length; i++) {
    const command = commands[i];
    if (command == "L" || command == "R") {
      let newDir = getNewDir(curDirIndex, command);
      res.dir = newDir.dir;
      curDirIndex = newDir.index;
    }
    if (command == "F" || command == "B") {
      const newValues = mover(res.x, res.y, command, res.dir);
      if (newValues) {
        if (isNotSafe(newValues[0], newValues[1])) {
          return `(${res.x}, ${res.y}) ${res.dir} STOPPED`;
        }
        res.x = newValues[0];
        res.y = newValues[1];
      }
    }
  }
  return `(${res.x}, ${res.y}) ${res.dir}`;
};
