Js questions
1. "https://www.hackerrank.com/challenges/js10-hello-world/problem"

solution==>
/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
**/

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable)
    // Write a line of code that prints parameterVariable to stdout using console.log:
    
}


function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}