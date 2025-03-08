// The find() method returns the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

Array.prototype.customFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
}



const isEven = (x) => x % 2 === 0;
const arr = [1, 2, 3, 4];
console.log(arr.find(isEven));  // Existing Find undefined
console.log(arr.customFind(isEven)); // Custom Find undefined
