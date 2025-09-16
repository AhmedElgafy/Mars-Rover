export type Directions = "NORTH" | "EAST" | "SOUTH" | "WEST";
export type MOVES = "F" | "B" | "L" | "R";
export interface ResI {
  x: number;
  y: number;
  dir: Directions;
}