
var assert = require('assert');
var mod = require('./exo5Fonctions.js');

it("Nombre d'Oeufs", function () {
  try
  {
    assert.equal( typeof(mod.test1), "number" );
    assert.equal( mod.test1, 4 );
    assert.equal( typeof(mod.test2), "number" );
    assert.equal( mod.test2, 6 );
    assert.equal( typeof(mod.test3), "number" );
    assert.equal( typeof(mod.test3b), "number" );
    assert.equal( mod.test3, mod.test3b);
    assert.equal( typeof(mod.test4), "number" );
    assert.equal( typeof(mod.test4b), "number" );
    assert.equal( mod.test4, mod.test4b );
  }
  catch (error)
  {
    printMessage('Attention', 'revoyez la déclaration de votre fonction nbrsOeufs');
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
