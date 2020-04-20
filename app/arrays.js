exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {

    return arr.indexOf(item);
  },

  sum: function(arr) {
    var aux = 0;

    for (var i = 0; i < arr.length; i++){
      if (Number.isNaN(arr[i]) || arr[i] !== 0){
        aux += arr[i];
      }
    }
    return aux;
  },

  remove: function(arr, item) {

    for (var i = 0; i < arr.length; i++){
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len = arr.length;

    for (i = 0; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var results = [];
    var arrSorted = arr.sort();

    for (var i = 0; i < arrSorted.length; i++) {
      if (arrSorted[i] === arrSorted[i + 1]) {
        if (results[results.length - 1] !== arrSorted[i]){
          results.push(arrSorted[i]);
        }
      }
    }
    return results;
  },

  square: function(arr) {
    var results = [];

    for (var i = 0; i < arr.length; i++) {
      results.push(arr[i] * arr[i]);
    }
    return results;
  },

  findAllOccurrences: function(arr, target) {
    var results = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        results.push(i);
      }
    }
    return results;
  }
};
