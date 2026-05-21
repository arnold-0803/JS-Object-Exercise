const getAverageAge = (users) => {
  let totalAge = users.reduce((sum, user) => sum + user.age, 0);

  let average = totalAge / users.length;

  return "Age Average is " + average;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log(getAverageAge(arr));
