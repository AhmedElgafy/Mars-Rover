type Directions = "NORTH" | "EAST" | "SOUTH" | "WEST";
type MOVES = "F" | "B" | "L" | "R";
const dirArr: Directions[] = ["EAST", "SOUTH", "WEST", "NORTH"];
interface ResI {
  x: number;
  y: number;
  dir: Directions;
}
const getNewDir = (curDir: number, to: Omit<MOVES, "F" | "B">) => {
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
const getCurDirIndex = (curDirString: Directions) => {
  return dirArr.findIndex((ele) => ele == curDirString);
};
const mover = (
  x: number,
  y: number,
  move: Omit<MOVES, "L" | "R">,
  dir: Directions
) => {
  if (dir == "NORTH") {
    if (move == "F") {
      return [x, y + 1];
    } else {
      return [x, y - 1];
    }
  } else if (dir == "SOUTH") {
    if (move == "F") {
      return [x, y - 1];
    } else {
      return [x, y + 1];
    }
  } else if (dir == "EAST") {
    if (move == "F") {
      return [x + 1, y];
    } else {
      return [x - 1, y];
    }
  } else if (dir == "WEST") {
    if (move == "F") {
      return [x - 1, y];
    } else {
      return [x + 1, y];
    }
  }
};

const solution = (x: number, y: number, dir: Directions, commands: string) => {
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
// console.log(solution(4, 2, "EAST", "FLFFFRFLB"));
const obstaclesZone = (coordinates: [number, number][]) => {
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
    return minX <= x && x <= maxX && minY <= y && y <= maxY;
  };
};
const isNotSafe = obstaclesZone([
  [1, 4],
  [3, 5],
  [7, 4],
]);
console.log(isNotSafe(3, 5));
