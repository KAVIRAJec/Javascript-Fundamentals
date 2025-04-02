# Basic Javascript Questions

## Difference between `Var`, `Let` and `Const`?

`var`, `let`, and `const` are the three ways to declare variables in JavaScript, each with distinct characteristics:

### `var`
- **Scope**: Function or global scoped.
- **Reassignment & Redeclaration**: Can be reassigned and redeclared.
- **Hoisting**: Hoisted to the top of the block and initialized as `undefined`.
- **Example**:
    ```javascript
    var greeter = "hey hi";
    var times = 4;
    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    console.log(greeter); // "say Hello instead"
    ```

### `let`
- **Scope**: Block scoped.
- **Reassignment & Redeclaration**: Can be reassigned but cannot be redeclared in the same scope.
- **Hoisting**: Hoisted to the top of the block but not initialized, resulting in a `ReferenceError` if accessed before declaration.
- **Example**:
    ```javascript
    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"(they are in different blocks)
    ```

### `const`
- **Scope**: Block scoped.
- **Reassignment & Redeclaration**: Cannot be reassigned or redeclared.
- **Objects**: The reference to a `const` object cannot be changed, but its properties can be modified.
- **Hoisting**: Hoisted to the top of the block but not initialized, resulting in a `ReferenceError` if accessed before declaration.
- **Example**:
    ```javascript
    const greeting = "say Hi";
    // greeting = "say Hello"; // Error: Assignment to constant variable

    const person = { name: "John" };
    person.name = "Doe"; // Allowed
    console.log(person.name); // "Doe"
    ```

## What are features introduced in ES6?

The key features introduced in ES6 are,
- let and const declaration
- Arrow functions
- String Template Literals 
- Destructing Assignment
- Default parameter
- Async & await
- Rest & spread operator
- Modules, classes,etc,.

## What is Synchronous Function?

Synchronous functions are the default execution mode of JavaScript functions. The code executes in a specific sequence (one by one) as defined in the code. Each instruction waits for the previous instruction to complete its execution, making it blocking in nature.

### Example:
```javascript
function First() {
    console.log('First');
}
function Second() {
    console.log('Second');
}
function Third() {
    console.log('Third');
}
First();
Second();
Third();
```

## What is Asynchronous Function(async-await)?

Asynchronous functions allows the code to run simultaneously without waiting for a particular functional block to complete. We can use `await` only inside the `async` block. The line declared with await, makes the execution to complete and then only it moves to next line.Asynchronous code execution allows to execution next instructions/function immediately and doesn't block the flow because of previous instructions/functions. So that multiple function with async can run parallelly so it is `non-blocking`. 

#### NOTE
- If there is no await inside the async function, then the execution would be similar to synchronous.
- There are many build-in function which run asynchronously, such as setTimeout, setInterval,..

### Example:
```javascript
function First() {
    console.log('First');
}
async function Second() {
    setTimeout(() => console.log('Second'), 2000);
    //(or) await fetch('...')
}
async function Third() {
    console.log('Third');
}
function Fourth() {
    console.log('Fourth');
}
First()
Second()
Third()
Fourth()
```
```
First
Third
Fourth
Second
```
In this code, the second is printed last, because of async, but the third is printed before the fourth even it is synchronous, because there is no delays/ await used, so it perform as a sync execution.

## What is promises?
    
Promises are the way of handling asynchronous operations like fetching data from server, reading file, waiting for a task to complete,etc,. The promise can be of three states namely `Pending`, `Resolved`, `Rejected`. 
- `Pending`: initial state, neither fulfilled nor rejected..
- `Resolved`: After execution if the execution is successful, is returned as resolved. Sometimes, the response data is send using resolve.
- `Rejected`: It indicates that the execution is failed and the error can be passed in these.

The states are used to get the execution status. 

Promises are used with `.then()`, `.catch()`, `.finally()` to handle the execution states. We can use multiple promises/ nested promises by the concept of `chaining` using `.then()`.

```javascript
const promise1 = new Promise((resolve, reject) => {
    fetch('www.google.com')
    .then(response => {
        if(response.ok) {
            return response.json();
        }
        else {
            reject('Error in fetch')
        }
    }).catch(error => {
        reject(error)
    })
})

promise1
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.error(error)
})

```
Since, here there is a single API fetch, consider there are multiple API or nested where a api depend on other API's data. So, with increase in multiple APIs, the complexity will increase, hence, the async-await function is declared as alternative of promises in ES6.

## What is Arrow function?
    
Arrow functions are the function with easy and simple way of defining and use a function with `=>` operator. There is no need of `function` keyword in arrow function. 

Advantages of arrow function over normal function definition,
- Shorter and easy syntax
- Can be a nameless function
- Can be used anywhere

```javascript
function multiply(num1, num2){ //normal function
    return num1 * num2;
}

//Arrow function
const multiply = (num1, num2) => {
    return num1 * num2;
}
```

## What is Destructuring in JS?

Destructuring is a way of extracting values from arrays or properties from objects into distinct variables. It simplifies the process of unpacking values and makes the code more readable.

### Array Destructuring:
```javascript
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
```

### Object Destructuring:
```javascript
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name); // "John"
console.log(age); // 30
```

### Nested Destructuring:
```javascript
const user = { id: 1, info: { name: "Alice", age: 25 } };
const { info: { name, age } } = user;
console.log(name); // "Alice"
console.log(age); // 25
```

---

## What is the Spread Operator in JS?

The spread operator (`...`) allows you to expand the contents of an object (or array) into individual elements. It is commonly used for copying, merging, or passing elements.

### Array Usage:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

### Object Usage:
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }
```
---

## What is Default Parameter in JS?

Default parameters allow you to set default values for function parameters. If no value is passed for function as arguments, the default value is used.

```javascript
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // "Hello, Guest!"
greet("Alice"); // "Hello, Alice!"
```

## What are HTTP Methods?

HTTP methods are standardized request types used in web development to communicate between clients and servers. Each method specifies the desired action to be performed on a resource.

### Common HTTP Methods:

1. **GET**:
    - **Purpose**: Retrieve data from the server.
    - **Usage**: Used for fetching resources without modifying them.
    - **Example**:
      ```javascript
      fetch('https://api.example.com/data')
         .then(response => response.json())
         .then(data => console.log(data));
      ```

2. **POST**:
    - **Purpose**: Send data to the server to create a new resource.
    - **Usage**: Commonly used for submitting forms or uploading data.
    - **Example**:
      ```javascript
      fetch('https://api.example.com/data', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name: 'John', age: 30 })
      })
         .then(response => response.json())
         .then(data => console.log(data));
      ```

3. **PUT**:
    - **Purpose**: Update an existing resource or create it if it doesn't exist.
    - **Usage**: Used for full updates of a resource.
    - **Example**:
      ```javascript
      fetch('https://api.example.com/data/1', {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name: 'John', age: 31 })
      })
         .then(response => response.json())
         .then(data => console.log(data));
      ```

4. **PATCH**:
    - **Purpose**: Partially update an existing resource.
    - **Usage**: Used for making specific changes to a resource.
    - **Example**:
      ```javascript
      fetch('https://api.example.com/data/1', {
         method: 'PATCH',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ age: 32 })
      })
         .then(response => response.json())
         .then(data => console.log(data));
      ```

5. **DELETE**:
    - **Purpose**: Remove a resource from the server.
    - **Usage**: Used for deleting resources.
    - **Example**:
      ```javascript
      fetch('https://api.example.com/data/1', {
         method: 'DELETE'
      })
         .then(response => console.log('Resource deleted'));
      ```
