
var assert = require('assert');
var mod = require('./exo5Conditions.js');

it("année bissextile", function () {
  try
  {
    assert.equal( typeof(mod.test1), "string" );
    assert.equal( mod.test1, "non bissextile" );
    assert.equal( typeof(mod.test2), "string" );
    assert.equal( mod.test2, "bissextile" );
    assert.equal( typeof(mod.test3), "string" );
    assert.equal( mod.test3, "non bissextile" );
    assert.equal( typeof(mod.test4), "string" );
    assert.equal( mod.test4, "bissextile" );
    assert.equal( typeof(mod.test5), "string" );
    assert.equal( mod.test5, "non bissextile" );
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
