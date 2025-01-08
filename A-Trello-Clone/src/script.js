const user = {
    name: "Dwayne",
    age: 52,
    address: "123 ABC St",
    mobile: "1231231231"
}

// Q. Write a function in JS which takes key name as input and prints the value from the object
function getValue(key)
{
    console.log( "question 1 - ", user[key]);
    
}

getValue("name");
getValue("age");
getValue("address");



// Q. Write a function in js which takes key and value as argument and add the key-value pair to the object
function addData(key, value)
{
    user[key] = value;
}

addData("bloodGroup", "AB+");
addData("email", "dwayne@email.com");
console.log("question 2 - ", user);



// Q. Write a function in js which takes key name and the new value to update in an object
function updateValue(key, value)
{
    user[key] = value;
}

updateValue("age", 20);
console.log("question 3 - ", user);



// Q. Write a function in js which takes key name and deletes the key from the object
function removeKey(key)
{
    delete user[key];
}

removeKey("address");
removeKey("name")
console.log("question 4 - ", user);


