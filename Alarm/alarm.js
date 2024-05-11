function alarm () { 
    let seconds = parseInt.prompt("How many seconds you need until yo have to do homework?"); 
}
setTimeout(function() {
    alert("It's time to do homewrok");
}, seconds*1000); 

console.log = ("It has passed" + seconds + "you have to do homework"); 