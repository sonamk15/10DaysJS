s = "javascript"
function vowelsAndConsonants(s) {
    var vovel = ''
    var consonet = ''
    for (const i of s){
       
        if (i == "a"|| i == "e"||i == "i"||i == "o"||i == "u") {
            vovel+=i
        }else{
            consonet+=i
        }
    }
    for (let i = 0; i < vovel.length; i++){
        console.log(vovel[i])
    }
    for (let i = 0; i < consonet.length; i++) {
        console.log(consonet[i])
    }
    
}
vowelsAndConsonants(s)