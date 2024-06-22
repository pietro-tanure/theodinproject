//boolean output
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

//string comparison
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

//comparison diff types
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
alert( true == 1 ); // true
alert( false == 0 ); // true
alert( '' == false ); // true

// strict equality
alert( 0 === false ); // false, because the types are different

//
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
alert( null == undefined ); // true
alert(null === +"\n0\n") //false
