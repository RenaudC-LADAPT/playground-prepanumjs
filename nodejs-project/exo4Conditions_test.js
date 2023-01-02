var assert = require('assert');
var mod = require('./exo4Conditions.js');

it("maFonction", function () {
  try
  {
    assert.equal( typeof(mod.test1), "string" );
    assert.equal( mod.test1, "Le nombre est positif." );
    assert.equal( typeof(mod.test2), "string" );
    assert.equal( mod.test2, "Le nombre est négatif." );
    assert.equal( typeof(mod.test3), "string" );
    assert.equal( mod.test3,  "Le nombre est nul." );
    assert.equal( typeof(mod.test4), "number" );
    assert.equal( mod.test4, "Erreur : le nombre est en dehors de l'intervalle autorisé." );
  }
  catch (error)
  {
    printMessage('Attention', 'revoyez la déclaration de votre fonction maFonction');
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
