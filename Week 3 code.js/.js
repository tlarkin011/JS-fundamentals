var value = [3, 9, 23, 64, 2, 8, 28, 93]
function difference(value){
const [first] = value;
console.log(value);
var reverse = value.reverse();
console.log(value)
const [last] = reverse;
return last - first;
}
console.log(difference(value))
value.push(182)
console.log(value)
