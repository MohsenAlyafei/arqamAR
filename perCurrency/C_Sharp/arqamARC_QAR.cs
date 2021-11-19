using System;

public class Program
{
public static void Main()
{  // =============== Tests ===============
    Console.WriteLine(arqamARC_EGP(""));
    Console.WriteLine(arqamARC_EGP("0"));
    Console.WriteLine(arqamARC_EGP("0.01"));
    Console.WriteLine(arqamARC_EGP("0.02"));
    Console.WriteLine(arqamARC_EGP("0.11"));
    Console.WriteLine(arqamARC_EGP("0.12"));
    Console.WriteLine(arqamARC_EGP("0.21"));
    Console.WriteLine(arqamARC_EGP("0.21"));
    Console.WriteLine(arqamARC_EGP("1"));
    Console.WriteLine(arqamARC_EGP("2"));
    Console.WriteLine(arqamARC_EGP("3"));
    Console.WriteLine(arqamARC_EGP("10"));
    Console.WriteLine(arqamARC_EGP("11"));
    Console.WriteLine(arqamARC_EGP("12.11"));
    Console.WriteLine(arqamARC_EGP("22.45"));
    Console.WriteLine(arqamARC_EGP("100"));
    Console.WriteLine(arqamARC_EGP("100.45"));
    Console.WriteLine(arqamARC_EGP("200"));
    Console.WriteLine(arqamARC_EGP("200.45"));
    Console.WriteLine(arqamARC_EGP("532"));
    Console.WriteLine(arqamARC_EGP("1000"));
    Console.WriteLine(arqamARC_EGP("2000"));
    Console.WriteLine(arqamARC_EGP("1000000"));
    Console.WriteLine(arqamARC_EGP("200000"));
    Console.WriteLine(arqamARC_EGP("2000000"));
    Console.WriteLine(arqamARC_EGP("818.18"));
    Console.WriteLine(arqamARC_EGP("878799987998787878787.09"));
}


//============================================================================================================
public static string arqamARC_EGP(String NumIn)
//============================================================================================================
{
    string[] TableScales = { "", "ألف", "مليون", "مليار", "ترليون", "كوادرليون", "كوينتليون", "سكستليون" }, // Add scale here if needed
    TableScalesP         = { "", "آلاف", "ملايين", "مليارات" },
    TableMale            = { "", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة", "عشرة" },
    TableFemale          = { "", "واحدة", "اثنتان", "ثلاث", "أربع", "خمس", "ست", "سبع", "ثمان", "تسع", "عشر" };

    string FullInWords="", SpWa = " و", wordMiah = "مائة";               // Can change to "مئة"
    bool IsLastEffTriplet = false, hasDecimal = false;
    int Triplet=0, currencyDigits=2;                                    // number of digits for the currency (i.e. sub unit) change for others e.g. 3 for Kuwaiti Dinar

    string[] arr = NumIn.ToString().Split('.');                          // split the number (assumes . is a decimal separator)
    if (arr[0].TrimStart('0') !="") {                                    // if we have a whole number
    FullInWords =convertNumber(arr[0]) + addSubject();                   // then convert the whole to words
    } else FullInWords="صفر "+ addSubject();;

    if (arr.Length > 1) {                                                // if we have a decimal part
        arr[1]=arr[1].PadRight(3,'0').Substring(0,currencyDigits);       // remove excess digits from RH of decimal
        if (arr[1].TrimEnd('0') != "" ) {                                // only if there is a non-zero Decimal Part
            hasDecimal=true;                                              // flag it as Decimal
            FullInWords += "، و" + convertNumber(arr[1]) + addSubject();   // convert the decimal to words and joint the 2 parts with a comma in between.
        }
    }
    return  FullInWords ;                     // All done


    //* ===== local function add currency and sub-currency names
    string addSubject() {
    int Num_99 = Triplet % 100;                              // 00 to 99
    string space = IsLastEffTriplet ? " " : "";              // Position correct spacing
    Triplet = Triplet % 100;
    string SubjectName = space + (hasDecimal ? "درهم":"ريال قطري");               // Default Subject Name is at Pos 1
    if (Triplet > 10)  return space + (hasDecimal ? "درهماً":"ريالاً قطرياً");     // Subject name with Tanween for 11-99
    if (Triplet > 2)   return space + (hasDecimal ? "دراهم":"ريالات قطرية");    // Subject name Plural for 3-10
    if (Triplet ==2)   return (hasDecimal ? "درهمان":"ريالان قطريان")+" اثنان"; // Reverse names for 2
    if (Triplet ==1)   return (hasDecimal ?"درهم":"ريال قطري")+" واحد";        // Reverse names for 1
    return SubjectName; // else it is 0 or 100,200, etc. so return default string
    }

    //* ===== local function convert one full number
    string convertNumber(String NumIn) {
    var TableUnits = new string[TableMale.Length];
    TableMale.CopyTo(TableUnits, 0);       // Create copies of Masculine Table for manipulation
    var Table11_19 = new string[TableMale.Length];
    TableMale.CopyTo(Table11_19, 0);       // Create copies of Masculine Table for manipulation
    Table11_19[1] = "أحد";                 // Starting words for 11
    Table11_19[2] = "اثنا";                 // Starting words for 12
    String NumberInWords = "", Scale, ScalePlural;
    NumIn = new String('0', NumIn.Length * 2 % 3) + NumIn;
    int NumLen = NumIn.Length,
        ScalePos,
        LastEffTriplet= ~~((NumIn.Length - NumIn.TrimEnd('0').Length) / 3)*3+3;

    for (int digits = NumLen; digits > 0; digits -= 3)                                           // Loop and convert each Triplet
    {
        Triplet          = Convert.ToInt32(NumIn.Substring(NumLen - digits, 3));                 // Get a Triplet Number
        IsLastEffTriplet = digits <= LastEffTriplet;                                              // is it last effective triplet
        if (Triplet > 0) {                                                                        // If not Empty: Convert Triplet Number to Words
            ScalePos = digits / 3 - 1;                                                            // Position of Scale Name in Scale Table
            Scale = TableScales[ScalePos];                                                        // Get Scale Name
            ScalePlural = (ScalePos < 4 ? TableScalesP[ScalePos] : TableScales[ScalePos] + "ات"); // Make Scale Plural
            NumberInWords += oneTripletToWords();                                                 // Convert one Triplet to Words
            if (!IsLastEffTriplet) NumberInWords += "،" + SpWa;                                    // Add "و " and  Comma
        }
    }
    return NumberInWords;

    //* ===== local function convert 1 triplet ====
    string oneTripletToWords() 	{
    int Num_99      = Triplet % 100,                  // 00 to 99
    Num_100         = ~~(Triplet / 100),              // Hundreds (1 digit)
    Num_Unit        = Num_99 % 10,                    // 0 to 9 (1 digit)
    Num_Tens        = ~~(Num_99 / 10);                // Tens   (1 digit)
    string  Word_100= "",                             // Holds words for Hundreds only
    Word_99         = "";                             // Holds words for 0-99

    if (Num_100 > 0)   {   // ---------- Do Hundreds (100 to 900) ----------
        if      (Num_100 > 2)  Word_100 = TableFemale[Num_100] + wordMiah;                                          // 300-900
        else if (Num_100 == 1) Word_100 = wordMiah;                                                                 // 100
        else                   Word_100 = wordMiah.Substring(0, wordMiah.Length - 1) + (Num_99 == 0  ? "تا" : "تان");  // 200 Use either مئتا or مئتان
    }

    if      (Num_99 > 19) Word_99 = TableUnits[Num_Unit] + (Num_Unit > 0 ? SpWa : "") +  // 20-99 Units و and
            (Num_Tens == 2 ? "عشر" : TableFemale[Num_Tens]) + "ون";                      // Add Woon for 20's or 30's to 90's
    else if (Num_99 > 10) Word_99 = Table11_19[Num_99 - 10] + " عشر";                    // for 11-19
    else if (Num_99 > 2 || Num_99 == 0) Word_99 = TableUnits[Num_99];                   // 0 or 3-10 (else keep void for 1 &2)

    string Words999 = Word_100 + (Num_100 > 0 && Num_99 > 0 ? SpWa : "") + Word_99;     // Join Hund, Tens, and Units
    if (Scale !="")
    {                                                                                   // Add Scale Name if applicable
        string Word_100Wa = (Num_100 > 0 ? Word_100 + SpWa : "") + Scale;               // Scale Name
        if (Num_99 > 2)  Words999 += " " + (Num_99 > 10 ? Scale+(IsLastEffTriplet ? "" : "ًا") : ScalePlural); // Scale for 3 to 99
        else {
            if (Num_99 == 0) Words999 += " " + Scale;                    // Scale for 0
            else if (Num_99 == 1) Words999 = Word_100Wa;                 // Scale for 1
            else Words999 = Word_100Wa + (IsLastEffTriplet ? "ا" : "");   // Scale for 2 ألفا or ألفان
        }
    }
    return Words999; //Return the Triple in Words
}
    }
    //=================================================================
}

}
