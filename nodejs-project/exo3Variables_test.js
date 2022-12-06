var assert = require('assert');
var mod = require('./exo3Variables.js');

it("afficher le type des variables : num, str, bool et flt", function () {
  try
  {
    assert.equal( 43, mod.num );
    assert.equal( typeof(mod.num), "number" );
    assert.equal( "42 est la réponse à la grande question sur la vie, l’univers et le reste.", mod.str );
    assert.equal( typeof(mod.str), "string" );
    assert.equal( false, mod.bool );
    assert.equal( typeof(mod.bool), "boolean" );
    assert.equal( 43.42, mod.flt );
    assert.equal( typeof(mod.flt), "number" );
  }
  catch (error)
  {
    printMessage('Conseil 💡', "revoyez les opérations de bases en JavaScript 🤔");
    throw error;
  }
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
