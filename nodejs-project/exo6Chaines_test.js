var assert = require('assert');
var mod = require('./exo6Chaines.js');

it("Mot de passe avancé", function () {
  try
  {
    assert.equal( typeof(mod.test1), "boolean" );
    assert.equal( mod.test1, false );
    assert.equal( typeof(mod.test2), "boolean" );
    assert.equal( mod.test2, false );
    assert.equal( typeof(mod.test3), "boolean" );
    assert.equal( mod.test3, false );
    assert.equal( typeof(mod.test4), "boolean" );
    assert.equal( mod.test4, false );
    assert.equal( typeof(mod.test5), "boolean" );
    assert.equal( mod.test51, true );
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
