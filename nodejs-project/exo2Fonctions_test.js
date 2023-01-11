var assert = require('assert');
var mod = require('./exo2Fonctions.js');

it("Concersion Francs suisses/Euros", function () {
  try
  {
    assert.equal( typeof(mod.chf), "number" );
    assert.equal( typeof(mod.euros), "number" );
    assert.equal( mod.euros, mod.chf * 1.01367 );
  }
  catch (error)
  {
    printMessage('Attention', 'revoyez le contenu de votre fonction"');
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
