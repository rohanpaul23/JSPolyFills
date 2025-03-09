Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function (...innerArgs) {
        return fn.apply(context, args.concat(innerArgs));
    }
}