const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=9dc8e3d09ed7fdb32fe5a1725fb5661e&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined);
    } else if (body.error) {
      callback('Could not find location! Try another search', undefined);
    } else {
      callback(
        undefined,
        `The temperature is ${body.current.temperature} degrees of celsius and there is ${body.current.precip}% chance of raining.`
      );
    }
  });
};

module.exports = forecast;
