function isPalindrome(str) {

    var withoutStr = str.toLowerCase().replace(/[^a-zA-Z]/g, " ");
    return withoutStr === withoutStr.split('').reverse().join('');
}

function checkPalindrome() {
    var input = prompt("Please, enter a word to know that is palindrome or not:");
    if (isPalindrome(input)) {
        console.log("'" + input + "' is a palindrome.");
    } else {
        console.log("'" + input + "' is not a palindrome.");
    }
}
checkPalindrome();
