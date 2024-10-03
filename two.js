function calculateTotalCartValue(){
 let total = 0;
 for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];  
 }
 return total;
}
let value=calculateTotalCartValue(125,20,30);
console.log("Your cart value is:" +value);

