{
  function countWordOccurrences(sentence: string, word: string): number {
    const lowercasedSentence = sentence.toLowerCase();
    const lowercasedWord = word.toLowerCase();
    const wordArray = lowercasedSentence.split(" ");
    const count = wordArray.filter((value) => value === lowercasedWord).length;
    return count;
  }
}
