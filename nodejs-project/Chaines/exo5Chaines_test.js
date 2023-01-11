var assert = require('assert');
var mod = require('./exo5Chaines.js');

it("Nombres de Voyelles", function () {
  try
  {
    assert.equal( typeof(mod.test1), "number" );
    assert.equal( mod.test1, 3 );
    assert.equal( typeof(mod.test2), "number" );
     assert.equal( mod.test2, 3 );
  }
  catch (error)
  {
    printMessage('Attention', 'revoyez la déclaration de votre fonction minuteToSecond');
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
