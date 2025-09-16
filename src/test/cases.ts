import { solutionP1, solutionP2 } from "..";

export const testCasesArrP1 = [
  {
    desc: "Move forward correctly",
    exc: solutionP1(0, 0, "NORTH", "F"),
    toBe: "(0, 1) NORTH",
  },
  {
    desc: "Move backward correctly",
    exc: solutionP1(0, 0, "NORTH", "B"),
    toBe: "(0, -1) NORTH",
  },
  {
    desc: "Rotate left correctly",
    exc: solutionP1(0, 0, "NORTH", "L"),
    toBe: "(0, 0) WEST",
  },
  {
    desc: "Rotate right correctly",
    exc: solutionP1(0, 0, "NORTH", "R"),
    toBe: "(0, 0) EAST",
  },
  {
    desc: "Execute multiple commands",
    exc: solutionP1(4, 2, "EAST", "FLFFFRFLB"),
    toBe: "(6, 4) NORTH",
  },
];

export const testCasesArrP2 = [
  {
    desc: "Stop before obstacle and report STOPPED",
    exc: solutionP2(0, 0, "EAST", "FF", [[2, 0]]),
    toBe: "(1, 0) EAST STOPPED",
  },
  {
    desc: "Navigate until obstacle and stop",
    exc: solutionP2(0, 0, "NORTH", "FFF", [[0, 2]]),
    toBe: "(0, 1) NORTH STOPPED",
  },
  {
    desc: "Continue if no obstacle in path",
    exc: solutionP2(0, 0, "NORTH", "FF", [[5, 5]]),
    toBe: "(0, 2) NORTH",
  },
];
