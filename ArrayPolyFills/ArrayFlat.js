Array.prototype.customFlat = function(depth = 1) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && depth > 0) {
            result.push(...this[i].customFlat(depth - 1));
        } else {
            result.push(this[i]);
        }
    }
    return result;
}

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat());  // Existing Flat [1, 2, 3, 4, [5, 6]]
console.log(arr.customFlat()); // Custom Flat [1, 2, 3, 4, [5, 6]]
console.log(arr.customFlat(1)); // Custom Flat [1, 2, 3, 4, [5, 6]]