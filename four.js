const products = [
    {name:"Laptop", price: 120000},
    {name:"Mobile", price: 70000},
    {name:"Laptop Bag", price: 20000},
    {name:"Watch", price: 20000},
    {name:"Mobile Charger", price: 1500},
];

function minAndmaxAmount(products){
    let maxProduct = products[0];
    let minProduct = products[0];
    for (let i = 0; i < products.length; i++) {
        if(products[i].price > maxProduct.price){
            maxProduct = products[i];
        }
        if (products[i].price < minProduct.price) {
            minProduct = products[i];
        }
        
    }
    console.log("the product with maximum price:");
    console.log(maxProduct);
    console.log("the product with minimum price:");
    console.log(minProduct);
}
minAndmaxAmount(products)
