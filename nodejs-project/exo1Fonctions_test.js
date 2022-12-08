var assert = require('assert');
var mod = require('./exo1Fonctions.js');

it("test de la fonction calcul", function () {
  try
  {
    assert.equal( typeof(mod.num), "number" );
  }
  catch (error)
  {
    printMessage('Attention', 'num doit être de type "number"');
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
