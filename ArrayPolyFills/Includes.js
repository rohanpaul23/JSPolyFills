Array.prototype.customIncludes = function (arg){
    let array = [...this];
    for(let i=0; i<array.length; i++){
        if(array[i] === arg){
            return true;
        }
    }
    return false;
}