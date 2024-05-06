// what is the code that I wish I had
// first thing I want it to do
//start small - bottom up


import { scoreFrame } from './game.js'
import { describe, test, expect } from 'vitest' // inbuilt methods from vitest

describe('scoreFrame', () => {
    test('should score a gutterball', () => {
    //Arrange
    const frame = [0, 0]
    const expectedOutput = 0 

    //Act
    const actualOutput = scoreFrame(frame)

    //Assert - what you want the function to do
    expect(actualOutput).toBe(expectedOutput)
    })

    test('should score a simple frame', () => {
    //Arrange
   /* const frame =[6, 2]
    const expectedOutput = 8

    //Act
    const actualOutput = scoreFrame(frame)

    //Assert
    expect(actualOutput).toBe(expectedOutput)*/
    expect(scoreFrame([3, 2])).toBe(5)
    expect(scoreFrame([7, 1])).toBe(8)
    expect(scoreFrame([1, 3])).toBe(4)
    })

    test('should score a spare'), () => {
        //Arrange
        const frame = [5, 5]

        //Act
        const actualOutput = scoreFrame(frame)

        //Assert
        expect(actualOutput).toBe(expectedOutput)
    }
    
    test('should score a strike'), () => {
        const frame = [10, 0]

        const actualOutput = scoreFrame(frame)

        expect(actualOutput).toBe(expectedOutput)
    }
})

describe('scoreGame', () => {
    test.todo('should score a simple game')
    test.todo('should score a spare game')
})

