Array.prototype.mapPolyfill = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }
    return result;
}

const doubler = (x) => x * 2;
const arr = [1, 2, 3, 4];
console.log(arr.map(doubler));  // Existing Map[2, 4, 6, 8] 
console.log(arr.mapPolyfill(doubler)); //  Custom Map[2, 4, 6, 8]