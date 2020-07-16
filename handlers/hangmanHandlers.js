const { words } = require('../data/words');

// write your handlers here...

function findWord(id) {
    return words.find(word => word.id == id);
}

function handleWord(req, res) {
    const wordId = req.params.id;
    const word = findWord(wordId)

    res.status(200).json({ status: 200, word})
}

function handleGameWord(req, res) {

    const rando = Math.floor(Math.random() * 10);
    const randoK = rando + 1000;
    const randomWord = findWord(randoK)
    delete randomWord.word;

    res.status(200).json({status: 200, randomWord});
}

function guess(req, res){
    const foundWordId = req.params.id;
    const guessedLetter = req.params.guess;
    const foundWord = findWord(foundWordId).word;
  
console.log(foundWordId);
console.log(guessedLetter);
console.log(foundWord);

    let foundWordArray = [];
  
    for (i = 0; i < foundWord.length; i++) {
      if (foundWord[i] === guessedLetter) {
        foundWordArray[i] = true;
      } else {
        foundWordArray[i] = false;
      }
    }
    res.status(200).json(foundWordArray);
  }

module.exports = { handleWord, handleGameWord, guess};