var assert = require('assert');
var mod = require('./exo2Variables.js');

it("afficher le type des variables : num, str, bool et flt", function () {
  printMessage('Vos réponses :', '\r' + 'la variable num est de type ' + mod.numType + '\r' + 'la variable str est de type ' + mod.strType + '\r' + 'la variable bool est de type ' + mod.boolType + '\r' + 'la variable flt est de type ' + mod.fltType);
  try
  {
    assert.equal( "number", mod.numType );
    assert.equal( "string", mod.strType );
    assert.equal(  "boolean", mod.boolType );
    assert.equal( "number", mod.fltType );
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
