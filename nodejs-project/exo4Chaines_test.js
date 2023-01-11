var assert = require('assert');
var mod = require('./exo4Chaines.js');

it("lettres en chiffres", function () {
  try
  {
    assert.equal( typeof(mod.test1), "string" );
    assert.equal( mod.test1, "LADAP7 | L’ass0c1a710n p0ur l’1ns3r7i0n s0c1al3 37 pr0f3ss10nn3ll3 d3s p3rs0nn3s hand1capé3s" );
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
