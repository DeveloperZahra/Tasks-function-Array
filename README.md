# 1. slice() — What does it do?

* **Definition**

slice() is a method that creates a new array by copying a part of an existing array without changing the original array.

* **Syntax**
  
```sql
array.slice(start, end);
```

* **Explanation**

**start** → the index where the copy begins

**end** → the index where the copy stops (end is not included)

If end is not given, slice continues to the end of the array

The original array stays the same

* **Example**
 ```sql
let students = ["Ali", "Sara", "Saif", "Noor", "Amal"];

let part = students.slice(1, 4);
console.log(part);
```

* **Output**
  
```sql
["Sara", "Safi", "Noor"]
```

* **Why?**

start at index 1 → "Sara"

stop at index 4 (but 4 is NOT included)



# 2. includes() — What does it do?
* **Definition**

includes() checks if an array contains a specific value.
It returns:

* true → the value exists

* false → the value does NOT exist

* **Syntax**
  
 ```sql
array.includes(value);
```

* **Example**

```sql
let names = ["Ali", "Sara", "Omar", "Laila"];

console.log( names.includes("Sara") );   // true
console.log( names.includes("Fatima") ); // false
```

* **Output**
  
 ```sql 
true
false
``` 
* **Why?**

* “Sara” is in the array → true

* “Fatima” is not in the array → false
