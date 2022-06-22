// 1 a.
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
console.log(difference(value))
// 1 b.
let average = 0 
for(var i = 0; i < value.length; i++){
    average += value[i]
} let total = average / value.length 
console.log(total)

// 2 a.
let names = ['Sam', 'Tommy', 'Tim', 'Buck', 'Bob']
function find(the_array){
let nameString = "";
    for(let i = 0; i < the_array.length; i++){
        console.log(the_array[i])
        nameString += the_array[i];
        console.log(nameString)
        
        
    } return nameString.length / the_array.length;         
}
console.log(find(names))

// 2 b.
    let allNames = ""
    
    for(let i = 0; i < names.length; i++){
    allNames += names[i] + " "} 
    console.log(allNames.toString())
// 3.
console.log(names[names.length - 1])
// 4.
console.log(names[0])

// 5. 
let nameLengths = [3, 5, 3, 4, 3]
//   I am not totally sure what the point of the loop is if I have already solved for the name lengths serval times and its logged? 
// 6.
function sum(math){

    let total = 0;
    
    for (var i in math) {
    
      total += math[i];}
    
      return total
    
    }
    
console.log(sum(nameLengths))

// 7.
function kylo(word, n){
    return word.repeat(n)

}console.log(kylo("hello", 6))

// 8. 
function fullName(firstName, lastName){
    return firstName + " " + lastName
}console.log(fullName("Trevor", "Larkin"))


newArray = [100, 200]
// 9. 
function bigNumber(a){
    total = 0 
    for (let i in a) { 
        total += a[i]
    }
    if( total >= 100){
    return true}
    else { return false}
}console.log(bigNumber(nameLengths))
console.log(bigNumber(newArray))

// 10. 
function normal(value){ 
    average = 0
    for(var i = 0; i < value.length; i++){
    average += value[i]
} let total = average / value.length 
return total }
console.log(normal(newArray))

// 11. 
function bigDog(a, b){
let average = 0
    for(var i = 0; i < a.length; i++){
        average += a[i]
    } let firstTotal = average / a.length 
              for(var i = 0; i < b.length; i++){
            average += b[i]
          } let secondTotal = average / b.length 
   if(firstTotal >= secondTotal){
    return true
   } else{return false}     
} console.log(bigDog(nameLengths, newArray))

// 12. 
let isHotOutside = true
function willBuyDrink(isHotOutside, moneyInpocket){
  
    if(isHotOutside == true && moneyInpocket >= 10.50){return true}
    else{ return false}
};
console.log(willBuyDrink(isHotOutside, 2.00))

// 13. 
function isDogFat(weight, breed){
    if(weight >= 120 && breed != "Great Dane"){
        return " Thats a fat dog"
    } else{ return "Maybe a little fat"}

}console.log(isDogFat(125, "Great Dane"))
// This function helps detrmine if your dog is fat or just a little fat.  It calculates the outcome based on the weight and breed input of the dog. 