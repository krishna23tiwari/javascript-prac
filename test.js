function createArray(length, callback) {
    return callback(Array.from({ length }, (_, i) => i + 1));
  }
  console.log(createArray(5, arr => arr));