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
  printMessage('Vos réponses :' ,"la variable num est de type " + numType + "\nla variable str est de type " + strType + "\nla variable bool est de type " + boolType + "\nla variable flt est de type " + fltType);
});

function printMessage(channel, message)
{
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
