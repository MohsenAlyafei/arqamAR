/**************************************************************************************
* @function      : arqamARC_EUR(Number)
* @purpose       : C# function to convert Numbers to the Euro Currency in Arabic Words
*                  A simplified version of arqamAR library functions.
*                  Visit GitHub here for full functions: https://github.com/MohsenAlyafei/arqamAR
* @version       : 0.01
* @author        : Mohsen Alyafei
* @date          : 18 November 2021
* @Licence       : MIT
* @param         : {Number} [Numeric in String form]
*
* @returns       : {string} The wordified number string in Arabic.
**************************************************************************************
* NOTES:
* The function is specifically coded to deal with Male/Male currency types
* (i.e. both major and minor names of the currency are Masculine).
* A currency that has Feminine major or minor units must not use this function.
*
* To change the function to other currency:
* 1. If needed change the variable: 'currencyDigits' to the decimal of the currency
*    This is normally 2 or 3.
* 2. Change the 'CurrencyName' variable Arabic Strings for single, plural, etc.
**************************************************************************************/

using System;

public class Program
{
public static void Main()
{  // =============== Tests ===============
    Console.WriteLine(arqamARC_EUR(""));
    Console.WriteLine(arqamARC_EUR("0"));
    Console.WriteLine(arqamARC_EUR("0.01"));
    Console.WriteLine(arqamARC_EUR("0.02"));
    Console.WriteLine(arqamARC_EUR("0.11"));
    Console.WriteLine(arqamARC_EUR("0.12"));
    Console.WriteLine(arqamARC_EUR("0.21"));
    Console.WriteLine(arqamARC_EUR("0.21"));
    Console.WriteLine(arqamARC_EUR("1"));
    Console.WriteLine(arqamARC_EUR("2"));
    Console.WriteLine(arqamARC_EUR("3"));
    Console.WriteLine(arqamARC_EUR("10"));
    Console.WriteLine(arqamARC_EUR("11"));
    Console.WriteLine(arqamARC_EUR("12.11"));
    Console.WriteLine(arqamARC_EUR("13.14"));
    Console.WriteLine(arqamARC_EUR("17.18"));
    Console.WriteLine(arqamARC_EUR("22.45"));
    Console.WriteLine(arqamARC_EUR("100"));
    Console.WriteLine(arqamARC_EUR("100.45"));
    Console.WriteLine(arqamARC_EUR("200"));
    Console.WriteLine(arqamARC_EUR("200.45"));
    Console.WriteLine(arqamARC_EUR("532"));
    Console.WriteLine(arqamARC_EUR("1000"));
    Console.WriteLine(arqamARC_EUR("2000"));
    Console.WriteLine(arqamARC_EUR("1000000"));
    Console.WriteLine(arqamARC_EUR("200000"));
    Console.WriteLine(arqamARC_EUR("2000000"));
    Console.WriteLine(arqamARC_EUR("818.18"));
    Console.WriteLine(arqamARC_EUR("878799987998787878787.09"));
}


//*==============================================
//*         arqamARC_EUR Function Start
//*==============================================
public static string arqamARC_EUR(String NumIn)
//*==============================================
{
    string[] TableScales = { "", "ألف", "مليون", "مليار", "ترليون", "كوادرليون", "كوينتليون", "سكستليون" }, // Add scale here if needed
    TableScalesP         = { "", "آلاف", "ملايين", "مليارات" },
    TableUnits           = { "", "واحد", "اثنان", "ثلاث", "أربع", "خمس", "ست", "سبع", "ثمان", "تسع", "عشر" };

    string FullInWords="", SpWa = " و", wordMiah = "مائة";               // Can change to "مئة"
    bool IsLastEffTriplet = false, hasDecimal = false;
    int Triplet=0, currencyDigits = 2;                                   // number of digits for the currency (i.e. sub unit) change for others e.g. 3 for Kuwaiti Dinar

    string[] arr = NumIn.ToString().Split('.');                          // split the number (assumes . is a decimal separator)
    if (arr[0].TrimStart('0') !="") {
    FullInWords =convertNumber(arr[0]) + addSubject();
    } else FullInWords="صفر "+ addSubject();;

    if (arr.Length > 1) {
        arr[1]=arr[1].PadRight(3,'0').Substring(0,currencyDigits);
        if (arr[1].TrimEnd('0') != "" ) {
            hasDecimal=true;
            FullInWords += "، و" + convertNumber(arr[1]) + addSubject();
        }
    }
    return  FullInWords ;                     // All done


    //* ===== local function add currency and sub-currency names
    string addSubject() {
    int Num_99 = Triplet % 100;
    string space = IsLastEffTriplet ? " " : "";
    Triplet = Triplet % 100;
    string CurrencyName = space + (hasDecimal ? "سنت":"يورو");            // Singular Currency Name
    if (Triplet > 10)  return space + (hasDecimal ? "سنتاً":"يوروً");       // Currency Tanween
    if (Triplet > 2)   return space + (hasDecimal ? "سنتات":"يوروات");    // Plural Currency
    if (Triplet ==2)   return (hasDecimal ? "سنتان":"يوروان")+" اثنان";   // Double Currency
    if (Triplet ==1)   return (hasDecimal ?"سنت":"يورو")+" واحد";        // One Currency
    return CurrencyName;
    }

    //* ===== local function convert one full number
    string convertNumber(String NumIn) {
    String NumberInWords = "", Scale, ScalePlural;
    NumIn = new String('0', NumIn.Length * 2 % 3) + NumIn;
    int NumLen = NumIn.Length,
        ScalePos,
        LastEffTriplet= ~~((NumIn.Length - NumIn.TrimEnd('0').Length) / 3)*3+3;

    for (int digits = NumLen; digits > 0; digits -= 3)
    {
        Triplet          = Convert.ToInt32(NumIn.Substring(NumLen - digits, 3));
        IsLastEffTriplet = digits <= LastEffTriplet;
        if (Triplet > 0) {
            ScalePos = digits / 3 - 1;
            Scale = TableScales[ScalePos];
            ScalePlural = (ScalePos < 4 ? TableScalesP[ScalePos] : TableScales[ScalePos] + "ات");
            NumberInWords += oneTripletToWords();                                                  // Convert one Triplet to Words
            if (!IsLastEffTriplet) NumberInWords += "،" + SpWa;                                    // Add "و " and  Comma
        }
    }
    return NumberInWords;

    //* ===== local function convert 1 triplet ====
    string oneTripletToWords() 	{
    int Num_99      = Triplet % 100,
    Num_100         = ~~(Triplet / 100),
    Num_Unit        = Num_99 % 10,
    Num_Tens        = ~~(Num_99 / 10);
    string  Word_100= "",
    Word_99         = "";

    if (Num_100 > 0)   {
        if      (Num_100 > 2)  Word_100 = TableUnits[Num_100] + wordMiah;
        else if (Num_100 == 1) Word_100 = wordMiah;
        else                   Word_100 = wordMiah.Substring(0, wordMiah.Length - 1) + (Num_99 == 0  ? "تا" : "تان");
    }
    if      (Num_99 > 19) Word_99 = TableUnits[Num_Unit] + (Num_Unit > 0 ? SpWa : "") +
            (Num_Tens == 2 ? "عشر" : TableUnits[Num_Tens]) + "ون";
    else if (Num_99 > 10) Word_99= (Num_Unit==1?"أحد":Num_Unit==2?"اثنا":TableUnits[Num_Unit]+(Num_Unit==8?"ي":"")+"ة")+" عشر";
    else if (Num_99 > 2 || Num_99 == 0) Word_99 = TableUnits[Num_99]+ (Num_99 == 0?"":"ة");

    string Words999 = Word_100 + (Num_100 > 0 && Num_99 > 0 ? SpWa : "") + Word_99;
    if (Scale !="")
    {
        string Word_100Wa = (Num_100 > 0 ? Word_100 + SpWa : "") + Scale;
        if (Num_99 > 2)  Words999 += " " + (Num_99 > 10 ? Scale+(IsLastEffTriplet ? "" : "ًا") : ScalePlural);
        else {
            if (Num_99 == 0) Words999 += " " + Scale;
            else if (Num_99 == 1) Words999 = Word_100Wa;
            else Words999 = Word_100Wa + (IsLastEffTriplet ? "ا" : "");
        }
    }
    return Words999;
}
    }
}
//*==============================================
//*         arqamARC_EUR Function Ends
//*==============================================


}
