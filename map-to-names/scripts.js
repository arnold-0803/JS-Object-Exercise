let john = {name: "John"};
let peter = {name: "Peter"};
let mary = {name: "Mary"};

let users = [john, peter, mary];

let names = users.map(user => {
  return user.name;
});

console.log(names);
