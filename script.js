const weatherText = document.querySelector("p:nth-of-type(1)");
const powerText = document.querySelector("p:nth-of-type(2)");

const temperature = 38;  // demo value
const windSpeed = 25;    // demo value

weatherText.textContent = "Temperature: " + temperature + "°C";

if (temperature > 40) {
    powerText.textContent = "Power Cut Risk: Medium (High Load)";
} else if (windSpeed > 40) {
    powerText.textContent = "Power Cut Risk: High (Strong Wind)";
} else {
    powerText.textContent = "Power Cut Risk: Low";
}
