function regexVar() {
    
    const re = new RegExp('^([aeiou]).+\\1$')
    // ^ : It matches any string with p at the beginning of it.
    // + : It matches any string containing one or more p's.

    // . : a single character


    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}



const re = regexVar();
const s = "aba"

console.log(re.test(s));
