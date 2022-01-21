import { WORDS } from '../constants/wordlist'
import ParkMiller from 'park-miller';

const msInDay = 86400000
const shuffle = (array: any[], random: () => number) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641013200000
  const pm = new ParkMiller(epochMs);
  const random = () => pm.floatInRange(0, 1)
  const words = WORDS.slice()
  shuffle(words, random)
  const now = Date.now()
  const index = Math.floor((now - epochMs) / msInDay)
  return {
    solution: words[index].toUpperCase(),
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
