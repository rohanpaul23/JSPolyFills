Array.prototype.customFlatMap = function (callback) {   
   let newArray = [];
    for (let i = 0; i < this.length; i++) {
        let result = callback(this[i], i, this);
        if (Array.isArray(result)) {
            newArray = newArray.concat(result);
        } else {
            newArray.push(result);
        }
    }
   return newArray;
}
