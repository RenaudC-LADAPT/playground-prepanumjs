var assert = require('assert');
var mod = require('./exo2Variables.js');

it("afficher le type des variables : num, str, bool et flt", function () {
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
  printMessage('Vos réponses :' ,"\nla variable num est de type " + mod.numType + "\nla variable str est de type " + mod.strType + "\nla variable bool est de type " + mod.boolType + "\nla variable flt est de type " + mod.fltType);
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
