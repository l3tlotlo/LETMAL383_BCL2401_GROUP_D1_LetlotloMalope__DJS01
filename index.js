// Given Parameters' names changed, units added to variable and labelling comments adjusted for clarity.
const velocity = {value: 10000, units: 'km/h'}; // velocity in kilometres per hour (km/h)
const acceleration = {value: 3, units: 'm/s^2'}; // acceleration in metres per second squared (ms^2)
const time = {value: 3600, units: 's'}; // duration in seconds (s)
const distance = {value: 0, units: 'km'}; // distance in kilometres (km)
const remainingFuel = {value: 5000, units: 'kg'}; // remaining fuel in kilograms (kg)
const fuelBurnRate = {value: 0.5, units: 'kg/s'}; // fuel burn rate in kilograms per second (kg/s)


const d2 = d + (velocity*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






