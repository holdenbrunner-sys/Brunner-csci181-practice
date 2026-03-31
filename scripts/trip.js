//-----------------------------------Variables------------------------------------------
const driver_name = "Holden";
const distance_miles = 450;
const mpg = 15;
const gas_price = 3.0;
const fuel_capacity = 10;
let is_round_trip = true;

let total_distance;

if (is_round_trip == true) {
  total_distance = distance_miles * 2;
} else {
  total_distance = distance_miles;
}

stop_number = 0;
miles_traveled = 0;
running_total = 0;
//------------------------------------Functions----------------------------------------
function calculateGallonsNeeded(total_distance, mpg) {
  return total_distance / mpg;
}
function calculateFuelCost(gallons_needed, gas_price) {
  return gallons_needed * gas_price;
}
let gallons_needed = calculateGallonsNeeded(total_distance, mpg);
let fuel_cost = calculateFuelCost(gallons_needed, gas_price);
//------------------------------------Stop Loop---------------------------------------
console.log("----- Stop Summary -----");
for (let miles = 1; miles < total_distance / 150; miles++) {
  stop_number++;
  miles_traveled = miles * (mpg * fuel_capacity);
  running_total = gas_price * fuel_capacity * stop_number;
  console.log(`Stop Number: ${stop_number}`);
  console.log(`Total Miles Traveled: ${miles_traveled}`);
  console.log(`Total Price So Far $${running_total}`);
  console.log("");
}

//---------------------------------------Summary--------------------------------------

console.log("----- Road Trip Summary -----");
console.log(`Driver: ${driver_name}`);
console.log(`Total Distance Driven: ${total_distance} miles`);
console.log(`Gallons Needed: ${gallons_needed}`);
console.log(`Total Cost: $${fuel_cost}`);
