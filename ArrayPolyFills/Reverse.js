Array.prototype.customReverse = function () {
    let i = 0;
    let j = this.length - 1;

    while(i<j){
        let temp = this[j];
        this[j] = this[i];
        this[i] = temp;
        i++;
        j--;
    }
    return this
}