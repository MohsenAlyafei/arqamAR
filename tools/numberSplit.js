/*********************************************************************
* @function    : numberSplit(Num)
* @purpose     : Returns the whole and fractional parts as Strings
*                Uses the locale descimal separator.
* @version     : 1.00
* @author      : Mohsen Alyafei
* @date        : 05 July 2020
* @param       : {Num} [Float] In numeric or Float string type
*
* @returns     : {string, string} [Whole, Fraction]
* @note        : If there is no fraction then te Fraction String is empty ('')
*              : This permits Boolean operation for testing the fraction.
*
* @Examples    : let [Whole, Fraction] = numberSplit(MyNumber);
*                let [num, frc]        = numberSplit("123.456");
**********************************************************************/
function numberSplit(num){
return n= (num+"").split(0.1.toLocaleString().substr(1,1)),
       n.length!==2 && (n[1]= ""),
       [n[0],n[1]];
}

// =========== Test Cases ================
console.log(numberSplit(17777.2323)); // "17777", "2323"
console.log(numberSplit(1.2));        // "1"    , "2"
console.log(numberSplit(1234));       // "1234" , ""
console.log(numberSplit(.2));         // "0"    , "2"
console.log(numberSplit(2.));         // "2"    , ""
console.log(numberSplit(2.0));        // "2"    , ""
console.log(numberSplit(0.342));      // "0"    , "342"
console.log(numberSplit(0.0));        // "0"    , ""
console.log(numberSplit("."));        // ""     , ""
