var kittens=["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return(kittens.push("Ralph"));
}

function destructivelyPrependKitten(name) {
  return(kittens.unshift("Bob"));
}

function destructivelyRemoveLastKitten(name) {
  return(kittens.pop());
}

function destructivelyRemoveFirstKitten(name) {
  return(kittens.shift());
}

function appendKitten(name) {
  return([...kittens,name]);
}

function prependKitten(name) {
  return([name, ...kittens]);
}

function removeLastKitten(name) {
  
}
