function takeShower() {
  return "Showering";
}
function eatBreatfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}
function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  console.log(takeShower());
  console.log(eatBreatfast());
  console.log("Ok ready to go work");
}
wakeUp();

/*
Showering
Eating Eggs
Ok ready to go work
*/
