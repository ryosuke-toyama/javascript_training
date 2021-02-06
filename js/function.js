function getGreeting(){
  return "Hello, World!";
}

const f = getGreeting;
const o = {};
o.f = getGreeting;
console.log(o.f());