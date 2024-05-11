function highestNumber () { 
    var numbers = []; 

    for (var i=0; i<10; i++) {
        var numbers = parseFloat.prompr("Please, enter 10 numbers" + (i + 1) +  ":");
    }
}

var highestNumber = Math.max.apply(null,numbers);
console.log("The highest number is" + highestNumber); 
