// Create a Temperature class.
// Make two methods :
// 1. convertFahrenheit - It will take celsius and will print it into Fahrenheit.
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
cToF(60);

//2. convertCelsius - It will take Fahrenheit and will convert it into Celsius.

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

fToC(40);


