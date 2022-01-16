// .map()
Array.prototype.myMap = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
};

// .filter()
Array.prototype.myFilter = function (callback, context) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};
