let name= prompt("Input your name:", "");
let age = +prompt("Input your age:", "");

while (true){

if (name === "" ||  isNaN(Number(age))) {
    alert("WRONG");
    name= prompt("Input your name:", name);
    age = +prompt("Input your age:", "");
}

else {
    if (age < 18){
        alert("You are not allowed to visit this website")
    }
    else if (age <= 22){
        if (confirm(`Are you sure you want to continue?`)){
            alert(`Welcome ${name}`)
        }
        else{
            alert("You are not allowed to visit this website")

        }
    }
    else{
        alert(`Welcome ${name}`)
    }
    break
}
}


// let calculator = {
//     first: 0,
//     second: 0,
//
//     read: function () {
//         this.first = +prompt("input first number");
//         console.log(this.first);
//         this.second = +prompt("input second number");
//         console.log(this.second);
//     },
//     sum: function () {
//         return this.first + this.second
//     },
//     mul: function () {
//         return this.first * this.second
//     },
// };
//
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );