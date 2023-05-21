
//you can put export in front of the const to export it, if you use this method then you don't have to write the final export code
// the above export is called named export

const isArrayEmpty = (arr) => {
    if (arr !== undefined && arr !== null && arr.length > 0){
      return false;  
    }

    return true;
}


const dumplogs = (message) => {
    console.log(message);

    // this code send the result to a tool for tracking
}

export {isArrayEmpty, dumplogs}