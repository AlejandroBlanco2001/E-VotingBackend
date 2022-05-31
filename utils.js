function splitArray(array,size){
    let chunked = [];  
    Array.from(
        { length: Math.ceil(array.length / size) }, (val, i) => {
            chunked.push(array.slice(i * size, i * size + size).map((item) => item.numerodocu));
        }
    );
    return chunked
}

module.exports = splitArray