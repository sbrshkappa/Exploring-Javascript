/*
Write an override for the map method that will also take another obj and use it's context
[1,2,3].map(function(item, index, arr){    return `context:: ${this.id } item:: ${item}`}, { id: 1 })
*/

Array.prototype.myMap = function(cb, obj){
    let result = [];
    const newThis = [...this];
    for(let i = 0; i < newThis.length; i++){
        result.push(cb.call(obj, newThis[i], i, newThis));
    }
    return result;
}

console.log([1,2,3].myMap(function(item, index, arr){   
        //arr.push(7);
        return `context:: ${this.id } item:: ${item}`
    }, { id: 1 }));