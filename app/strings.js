exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var count = 0;
    var result = '';
    for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
        if (count < amount) {
          result += str[i];
        }
      } else {
        count = 0;
        result += str[i];
      }
    }
    return result;
  },

  wordWrap: function(str, cols) {
    var formatedString = '',
      wordsArray = [];


    wordsArray = str.split(' ');

    formatedString = wordsArray[0];

    for (var i = 1; i < wordsArray.length; i++) {
      if (wordsArray[i].length > cols) {
        formatedString += '\n' + wordsArray[i];
      } else {
        // eslint-disable-next-line no-lonely-if
        if (formatedString.length + wordsArray[i].length > cols) {
          formatedString += '\n' + wordsArray[i];
        } else {
          formatedString += ' ' + wordsArray[i];
        }
      }
    }

    return formatedString;
  },

  reverseString: function(str) {
    // eslint-disable-next-line newline-per-chained-call
    return str.split('').reverse().join('');
  }
};
