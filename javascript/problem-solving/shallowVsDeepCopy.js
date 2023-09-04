function print(){
    console.log("print")
}

let a = [1,23,3, {name: 'bayshakhe'}, print];
let b = Array.from([...a, [1,8,9]]);
b[3].name = "rasel"
b[1] = 0

console.log(a)
console.log(b)