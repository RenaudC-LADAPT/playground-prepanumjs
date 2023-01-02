
var assert = require('assert');
var mod = require('./exo3Conditions.js');

it("Est Pair ?", function () {
  try
  {
    assert.equal( typeof(mod.test1), "string" );
    assert.equal( mod.test1, "Le résultat de la division est 7." );
    assert.equal( typeof(mod.test2), "string" );
    assert.equal( mod.test2, "Erreur : division par zéro interdite." );
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
