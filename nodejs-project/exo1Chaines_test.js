var assert = require('assert');
var mod = require('./exo1Chaines.js');

it("Maitre Yoda", function () {
  try
  {
    assert.equal( typeof(mod.test1), "string" );
    assert.equal( mod.test1, "Bonjour Suzanne, que la Force soit avec toi" );
  }
  catch (error)
  {
    printMessage('Attention', 'revoyez la déclaration de votre fonction majorite');
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
