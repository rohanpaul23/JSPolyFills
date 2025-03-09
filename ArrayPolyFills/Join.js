Array.prototype.customJoin = function (separator = ',') {
    let string = '';
    for (let i = 0; i < this.length; i++) {
        string += this[i];
        if (i !== this.length - 1) {
            string += separator;
        }
    }
    return string;
}