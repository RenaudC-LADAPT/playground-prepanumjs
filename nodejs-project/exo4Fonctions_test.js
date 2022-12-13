
var assert = require('assert');
var mod = require('./exo4Fonctions.js');

it("Aire du triangle", function () {
  try
  {
    assert.equal( typeof(mod.test1), "number" );
    assert.equal( mod.test1, 8 );
    assert.equal( typeof(mod.test2), "number" );
     assert.equal( mod.test2, 10.5 );
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
