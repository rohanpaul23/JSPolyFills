Array.prototype.customConcat = function () {
    let newArray = [...this];
    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            newArray.push(...arguments[i]);
        } else {
            newArray.push(arguments[i]);
        }
    }
    return newArray;
}

const arguments = [1, 2, 3, 4, 5];
const array = [6, 7, 8, 9, 10];
const result = arguments.customConcat(array);
console.log("result",result)