Array.prototype.customFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

const isEven = (x) => x % 2 === 0;
const arr = [1, 2, 3, 4];
console.log(arr.filter(isEven));  // Existing Filter[2, 4]
console.log(arr.customFilter(isEven)); // Custom Filter[2, 4]
