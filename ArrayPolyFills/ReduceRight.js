Array.prototype.customReduceRight = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = this.length-1; i >= 0; i--) {
        if (accumulator !== undefined) {
            accumulator = callback(accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}