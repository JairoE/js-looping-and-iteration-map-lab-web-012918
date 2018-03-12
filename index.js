// Code your solution in this file.
function lowerCaseDrivers(arr) {
  let x = arr.map(function(el) {return el.toLowerCase();});
  return x;
}

function nameToAttributes(arr)  {
  let newAr = arr.map(function(el) {
    let i = el.indexOf(" ");
    return {firstName: el.slice(0,i), lastName: el.slice(i+1)}
  });
  return newAr;
}

function attributesToPhrase(arr) {
  let newAr = arr.map(function(el) {
    return `${el.name} is from ${el.hometown}`;
  })
  return newAr;
}
