function generatePosition() {
  return {
    latitude: Math.random() * 180 - 90,
    longitude: Math.random() * 360 - 180
  };
}

function simulateVehicle(vehicleId) {
  return {
    vehicleId,
    position: generatePosition()
  };
}

module.exports = {
  generatePosition,
  simulateVehicle
};