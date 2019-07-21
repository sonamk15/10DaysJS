var factorial = function (n) {
    if (n == 1) {
        return 1
    }
    var smallAns = factorial(n - 1)
    return smallAns * n
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}