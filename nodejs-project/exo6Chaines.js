//Écrivez une fonction verificationMotDePasseAvance(password) qui prend un argument de type string.
//Elle devra retourner un boolean qui vaut true si les toutes les conditions sont respectées :



// { autofold
let test1 = verificationMotDePasseAvance('password');
let test2 = verificationMotDePasseAvance('motdepasseassezlong');
let test3 = verificationMotDePasseAvance('1motdepasseassezlong');
let test4 = verificationMotDePasseAvance('1MotDeDasseAssezLong');
let test5 = verificationMotDePasseAvance('[1MotDeDasseAssezLong]');
module.exports = {
	test1: test1,
	test2: test2,
	test1: test3,
	test2: test4,
	test1: test5,
};
// }
