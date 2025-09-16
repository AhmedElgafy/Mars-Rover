import { dirArr } from "./const";
import { MOVES, Directions } from "./types";

export const getNewDir = (curDir: number, to: Omit<MOVES, "F" | "B">) => {
  let newIndex = curDir;
  if (to == "L") {
    newIndex--;
    if (newIndex < 0) newIndex = 3;
  } else {
    newIndex++;
  }
  return {
    index: newIndex,
    dir: dirArr[newIndex % 4],
  };
};

export const getCurDirIndex = (curDirString: Directions) => {
  return dirArr.findIndex((ele) => ele == curDirString);
};

export const mover = (
  x: number,
  y: number,
  move: Omit<MOVES, "L" | "R">,
  dir: Directions
) => {
  const deltas: Record<Directions, [number, number]> = {
    NORTH: [0, 1],
    SOUTH: [0, -1],
    EAST: [1, 0],
    WEST: [-1, 0],
  };
  const [dx, dy] = deltas[dir];
  return move === "F" ? [x + dx, y + dy] : [x - dx, y - dy];
};

export const obstaclesZone = (coordinates: [number, number][]) => {
  let maxX = coordinates[0][0];
  let minX = coordinates[0][0];
  let minY = coordinates[0][1];
  let maxY = coordinates[0][1];
  coordinates.forEach((coordinate) => {
    if (coordinate[0] < minX) {
      minX = coordinate[0];
    }
    if (coordinate[0] > maxX) {
      maxX = coordinate[0];
    }
    if (coordinate[1] < minY) {
      minY = coordinate[1];
    }
    if (coordinate[1] > maxY) {
      maxY = coordinate[1];
    }
  });
  return function (x: number, y: number): boolean {
    console.log(`x:${x}, y:${y}`);
    return minX <= x && x <= maxX && minY <= y && y <= maxY;
  };
};
