//Object Manipulations -> 

/* 1. Reading all keys from an object
       
        a) for..in statement
        b) Object.keys() method
*/

var tv = {
    "Name" : "Samsung TV",
    "Price": 40000.33,
    "Stock":true,
}

for(var property in tv){
    console.log(`${property}`);
}

// First Way
/*op ->
Name
Price
Stock
*/

// Second Way
console.log(Object.keys(tv));            //[ 'Name', 'Price', 'Stock' ]

// Third Way

Object.keys(tv).map(function(key){
    console.log(key);
})

/*op ->
Name
Price
Stock
*/

/*2. How to read all keys and values?

        a) for..in
        b) Object.keys()
*/

var tv = {
    "Name" : "Samsung",
    "Price": 40000.33,
    "Stock" :false,
}

Object.keys(tv).map(function(key){
    console.log(`${key}:${tv[key]}`);
})

/*op ->
Name:Samsung
Price:40000.33
Stock:false
*/

/*3. How to remove any specified key?
A. By using JavaScript "delete" operator

Syntax:
        delete   object.Key;
*/

var tv = {
    "Name": "Samsung TV",
    "Price": 40000.33,
    "Stock": true,
}

delete tv.Price;
Object.keys(tv).map(function(key){
    console.log(`${key}:${tv[key]}`);
})

/*op ->
Name:Samsung TV
Stock:true
*/

/*4. How to verify a key in object? [Exists or not]
A. By using JavaScript "in" operator.

Syntax:
        "key"  in  object        => true if exists
*/

var tv = {
    "Name": "Samsung TV",
    "Price": 40000.33,
    "Stock": true,
}

delete tv.Price;
if("Price" in tv){
    console.log(`Name = ${tv.Name}, Price = ${tv.Price},  Value = ${tv.Value}`);
}
else{
    console.log(`Name = ${tv.Name}, Value = ${tv.Value}`);
}

/*5. How to know the total count of keys in object?
A. By using "Object.keys()"

Syntax:
        Object.keys(objectName).length
*/

var tv = {
    "Name": "Samsung TV",
    "Price": 40000.33,
    "Stock": true,
}

console.log(`Total Keys Count: ${Object.keys(tv).length}`);