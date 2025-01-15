
const assert = require('node:assert/strict');
let mod = require('./exo1Conditions.js');

it("Majorité ?", function () {
  try
  {
    assert.equal( typeof(mod.test1), "string" );
    assert.match(mod.test1, /mineur/);
    //assert.equal( mod.test1, "Vous êtes mineur." );
    assert.equal( typeof(mod.test2), "string" );
    assert.match(mod.test2, /majeur/);
    //assert.equal( mod.test2, "Vous êtes majeur." );
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
