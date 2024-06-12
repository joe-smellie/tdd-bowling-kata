
//helps to keep code simple



const frames = [
    [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
  ]
// function for scoring bowling frames
export function frameScore(frames){

//create a variable to store totalscore
let totalScore = 0

//calculate score from each frame
frames.forEach((frame, i) => {
  let frameScore = frame[0] + frame[1] 
// if a spare is bowled calculate score
 if (isSpare(frame)) {
  frameScore = frame[0] + frame[1] + frames[i + 1][0]
 }
totalScore += frameScore
})

console.log(totalScore)
return totalScore
}

function isSpare(frame) {
  if (frame[0] === 10) return false
  return frame[0] + frame[1] ===10

}