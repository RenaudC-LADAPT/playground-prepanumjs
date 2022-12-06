var assert = require('assert');
var mod = require('./exo3Variables.js');

it("afficher le type des variables : num, str, bool et flt", function () {
  try
  {
    assert.equal( 42, mod.num );
    assert.equal( typeof(mod.num), "number" );
    assert.equal( "42", mod.str );
    assert.equal( typeof(mod.str), "string" );
    assert.equal( true, mod.bool );
    assert.equal( typeof(mod.bool), "boolean" );
    assert.equal( 0.42, mod.flt );
    assert.equal( typeof(mod.flt), "number" );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "Revoyez l'utlisation de typeof 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
