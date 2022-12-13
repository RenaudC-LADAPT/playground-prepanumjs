var assert = require('assert');
var mod = require('./exo3Fonctions.js');

it("Minutes en secondes", function () {
  try
  {
    assert.equal( typeof(mod.test1), "number" );
    assert.equal( mod.test1, 240 );
    assert.equal( typeof(mod.test2), "number" );
     assert.equal( mod.test1, 180 );
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
