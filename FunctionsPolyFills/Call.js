Function.prototype.myCall  = function (context, ...args) {
    context = context || window;
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}