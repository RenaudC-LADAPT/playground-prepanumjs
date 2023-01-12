var assert = require('assert');
var mod = require('./exo3Chaines.js');

it("Chaînes de caractères et index", function () {
  try
  {
    assert.equal( typeof(mod.test1), "string" );
    assert.equal( mod.test1,  "Bonjour tout le monde, comment allez-vous aujourd'hui?" );
    assert.equal( typeof(mod.test2), "string" );
    assert.equal( mod.test2,  "n" );
    assert.equal( typeof(mod.test3), "string" );
    assert.equal( mod.test3,  "out le mond" );
    assert.equal( typeof(mod.test4), "number" );
    assert.equal( mod.test4, 31 );
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
