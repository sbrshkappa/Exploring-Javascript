/*

#JSInterviewQuestion

Write a console.log method that will append the current timestamp to the end of log each time
console.log("Hello World");
Hello World ...TimeStamp

*/


let cLog = console.log.bind(console);

console.log = function(){

    var args = Array.prototype.slice.call(arguments, 0);
    var timeStamp = function(){
        return new Date();
    }
    args.push(timeStamp());
    cLog(...args);
}

console.log("Hello World");
console.log("Test", "Second", "Multiple arguments");
console.log(new Date());