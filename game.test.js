// what is the code that I wish I had
// first thing I want it to do
//start small - bottom up

import * as score from "./game.js";
import { describe, test, expect } from "vitest"; // inbuilt methods from vitest

test("tests setup working", () => {
  expect(true).toBeTruthy();
});

//describe("scoreFrame", () => {
test("should score a gutterball", () => {
  //Arrange
  const frames = [[0, 0]];
  const expectedOutput = 0;

  //Act
  const actualOutput = score.frameScore(frames);

  //Assert - what you want the function to do
  expect(actualOutput).toBe(expectedOutput);
});

test("should score a simple frame", () => {
  //Arrange
  const frames = [[6, 2]];
  const expectedOutput = 8;

  //Act
  const actualOutput = score.frameScore(frames);

  //Assert
  expect(actualOutput).toBe(expectedOutput);
});

test("should score a spare", () => {
  //Arrange
  const frames = [
    [9, 1],
    [6, 3],
  ];
  const expectedOutput = 25;

  //Act
  const actualOutput = score.frameScore(frames);

  //Assert
  expect(actualOutput).toBe(expectedOutput);
});

//Only went up to spare in bowling kata
// test("should score a strike", () => {
//   const frames = [[10, 0],[5, 2]];
//   const expectedOutput =

//   const actualOutput = score.frameScore(frames);

//   expect(actualOutput).toBe(expectedOutput);
// });

//describe("scoreGame", () => {
test("should score a simple game", () => {
  const frames = [
    [2, 0],
    [4, 2],
    [6, 0],
    [2, 4],
    [1, 5],
    [7, 0],
    [5, 2],
    [7, 0],
    [2, 6],
    [8, 1],
  ];
  const expectedOutput = 64;
  const actualOutput = score.frameScore(frames);

  expect(actualOutput).toBe(expectedOutput);
});
test("should score a spare game", () => {
  const frames = [
    [6, 1],
    [4, 0],
    [6, 4],
    [2, 7],
    [3, 5],
    [5, 0],
    [5, 5],
    [0, 0],
    [1, 6],
    [7, 2],
  ];
  const expectedOutput = 71;
  const actualOutput = score.frameScore(frames);

  expect(actualOutput).toBe(expectedOutput);
});
