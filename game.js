
//helps to keep code simple

/*export function scoreFrame(arr) {
    return arr[0] + arr[1]
}*/

// function for scoring bowling frames
export function scoreFrames(frames){

    //create a variable to store totalscore
    let totalScore = 0
    
    //calculate score from each frame
    frames.forEach((frame, i) => {
      let frameScore = frame[0] + frame[1] 
    // if a spare is bowled calculate score
    if (isGutterball(frame))
        frameScore = frame[0] + frame[1]
    
    if (isSpare(frame)) {
      frameScore = frame[0] + frame[1] + frames[i + 1][0]
     }
    totalScore += frameScore
    })
    
    return totalScore
    }
    
    function isSpare(frame) {
      if (frame[0] === 10) return false
      return frame[0] + frame[1] ===10
    
    }

    function isGutterball(frame) {
        return frame[0] + frame[1] === 0
    }