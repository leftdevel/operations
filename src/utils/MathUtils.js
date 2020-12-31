export function shuffle(inputArray) {
  const outputArray = [...inputArray];
  let currentIndex = outputArray.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = outputArray[currentIndex];
    outputArray[currentIndex] = outputArray[randomIndex];
    outputArray[randomIndex] = temporaryValue;
  }

  return outputArray;
}

/**
 * Min and max included
 */
export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  shuffle,
  randomIntFromInterval,
};
