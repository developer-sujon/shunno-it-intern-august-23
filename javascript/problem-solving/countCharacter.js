//count the characters
//input - string "shunno" output - {s:2, h:1, u: 1, n:2, o:1}
//input - string "sh unn o" output - {s:2, h:1, u: 1, n:2, o:1, spaces:2}
//input - string "s9h&unn o" - {s:2, h:1, u: 1, n:2, o:1, spaces:1,skip:2}

function countChar(data) {
    const output = {}

    for (var i = 0; i <= data.length - 1; i++) {
        // console.log([data[i]])
        if (data[i] == ' ') {
            output.spaces = (output[data[i]] || 0) + 1
        }
        else{
            output[data[i]] = (output[data[i]] || 0) + 1
        }
        // console.log(output[i])
    }

    return output
}
console.log(countChar("shunno"))
console.log(countChar("sh unn o"))
console.log(countChar("s9h&unn o"))


