const textInput = document.querySelector("#text-input");
const result = document.querySelector("#result");

const isPalindrome = () => {

    const cleanWord = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = cleanWord.split('').reverse().join('');

    if (textInput.value === "") {
        alert("Please input a value");
        return;
    }

    return cleanWord === reversedWord ? result.innerText = `${textInput.value} is a palindrome` : result.innerText = `${textInput.value} is not a palindrome`;
}