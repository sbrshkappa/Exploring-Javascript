/*
    ---- Bind -----
    The bind functionality is meant to return a function that can be borrowed from a class 
    and used with an argument that's not a part of that class.
*/
Function.prototype.newBind = function (...args) {
    let obj = this,
        params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}

let user = {
    fName: 'Sabareesh',
    lName: 'Kappagantu'
};

let printSentence = function (country) {
    console.log("I am " + this.fName + " " + this.lName + ", and I'm a citizen of " + country);
}

let boundPrintSentence = printSentence.newBind(user);
boundPrintSentence("the World");