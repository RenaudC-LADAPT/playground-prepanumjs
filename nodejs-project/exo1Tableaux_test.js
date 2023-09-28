var assert = require('assert');
var mod = require('./exo1Tableaux.js');

it("6e élément", function () {
  try
  {
    assert.equal( typeof(mod.test), "string" );
    assert.equal( mod.test, 'On parle de nous' );
   
  }
  catch (error)
  {
    printMessage('Attention', 'revoyez votre code');
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
