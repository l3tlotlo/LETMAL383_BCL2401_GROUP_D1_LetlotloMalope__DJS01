// Given Parameters' names changed, units added to variable and labelling comments adjusted for clarity.
const velocity = {value: 10000, units: 'km/h'}; // velocity in kilometres per hour (km/h)
const acceleration = {value: 3, units: 'm/s^2'}; // acceleration in metres per second squared (ms^2)
const time = {value: 3600, units: 's'}; // duration in seconds (s)
const distance = {value: 0, units: 'km'}; // distance in kilometres (km)
const remainingFuel = {value: 5000, units: 'kg'}; // remaining fuel in kilograms (kg)
const fuelBurnRate = {value: 0.5, units: 'kg/s'}; // fuel burn rate in kilograms per second (kg/s)

// Function to calculate new velocity based on acceleration
const calcNewVelocity = (time, velocity, acceleration) => {
  // Validate input parameters
  if (typeof time !== 'number' || typeof velocity !== 'number' || typeof acceleration !== 'number') {
    throw new Error('Invalid parameter inputs have been entered');
  }
  // Formula to determine new velocity
  const newVelocity = velocity + (acceleration * time);

  return newVelocity;
}
// Input parameter validation
if (acceleration.units !== 'm/s^2' || fuelBurnRate.units !== 'kg/s'|| velocity.units !== 'km/h' ||  time.units !== 's' || distance.units !== 'km' || remainingFuel.units !== 'kg') {
  throw new Error('An invalid unit has been entered');
}

// Convert units to a common unit 
const velocityInMetersPerSecond = velocity.value / 3.6;
const distanceInMeters = distance.value * 1000;

// Calculation to determine new distance
const newDistanceInMeters = distanceInMeters + (velocityInMetersPerSecond * time.value);
const newDistanceInKilometers = newDistanceInMeters / 1000;

// Calculation to determine amount of fuel remaining
const remainingFuelInKilograms = remainingFuel.value - (fuelBurnRate.value * time.value);

// Calculation to determine new velocity
const newVelocityInMetersPerSecond = calcNewVelocity(acceleration.value, velocityInMetersPerSecond, time.value);
const newVelocityInKilometersPerHour = newVelocityInMetersPerSecond * 3.6;

console.log(`Corrected New Velocity: ${newVelocityInKilometersPerHour} km/h` );
console.log(`Corrected New Distance: ${newDistanceInKilometers} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelInKilograms} kg`);






