'use strict';


/**
 * returns driving and position state of the vehicle
 *
 * id String The ID number of the car
 * returns inline_response_200_1
 **/
exports.drive_state = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "shift_state" : "normal",
  "latitude" : 25.53844,
  "speed" : 4.5,
  "longitude" : -80.40894
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set the temperature target for the HVAC system
 *
 * id String The ID number of the car
 * driver_temp String The desired temp on the driver's side\"\"
 * passenger_temp String The desired temp on the passenger's side\"\"
 * returns inline_response_200_2
 **/
exports.set_temps = function(id,driver_temp,passenger_temp) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : true,
  "reason" : "updated database"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * details about vehicle
 *
 * returns inline_response_200
 **/
exports.vehicleGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "color" : "Red",
  "vin" : "XYZ1234",
  "display_name" : "Jen's Model S",
  "vehicle_id" : "ABCDE"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

