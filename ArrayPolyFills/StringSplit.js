String.prototype.customSplit = function (separator) {
    let output = [];
    let string = this;
    let i =0;
    let j =i+1;

    while(i<j && j<=string.length){
        if(string[j] === separator){
            output.push(string.slice(i,j));
            i=j+1;
            j=j+2;
        }   
        else{
            j++;
        }
    } 
    output.push(string.slice(i,j));
    return output;  
}


const str = 'Hello World Test';

const arr = str.customSplit(' ');

console.log(arr); // Output: ["Hello", "World"]