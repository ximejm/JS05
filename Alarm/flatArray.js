function flatArray(arr) {
    var Array1 = [];

    function flatten(arr) {
        arr.forEach(function(element) {
            if (Array.isArray(element)) {
                flatten(element); 
        } else {
                Array1.push(element); 
        }
        });
    }   
    flatten(arr);

    return Array1;
}

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
let Array2 = Array1(multiDimension);

console.log(Array2); 
