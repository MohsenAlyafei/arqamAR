/*********************************************************************
* @function    : numberToWordsAr(NumIn [,Flags])
* @purpose     : Converts Numbers to Arabic Words
* @version     : 1.04
* @author      : Mohsen Alyafei
* @date        : 13 July 2020
* @param       : {NumIn} [integer or number in string form]
* @param       : Optinal {Flags} [number] The Options.
* @OptionFlags   Flags as follows when set:
* Bit 0 : Generate string for a Feminine subject. Default is Masculine.
* Bit 1 : Use Miah (مئة بدل مائة). Default is "مائة".
* Bit 2 : Insert comma between triplet words.
* Bit 3 : Split hundred words i.e. ثلاث مائة. Default "No Split" i.e. (ثلاثمائة)
* Bit 4 : Indicates that there will be text to follow the result number string.
*         This affects the duble hundrders and scale names like الفا مليونا مئتا
*         This permits proper subject name to be added after the resulting text
* @returns     : {string} The wordified number string in Arabic
**********************************************************************/
export function numberToWordsAr(NumIn=0, Flags=0) {
if (NumIn == 0) return "صفر";
const TableScalesSingle= ["","ألف","مليون","بليون","ترليون","كوادرليون","كوينتليون","سكستليون"],
      TableScalesPlural= ["","آلاف","ملايين","بلايين","ترليونات","كوادرليونات","كوينتليونات","سكستليونات"],
      TableUnitsMale   = ["","واحد","اثنان","ثلاثة","أربعة","خمسة","ستة","سبعة","ثمانية","تسعة","عشرة"],
      TableUnitsFemale = ["","واحدة","اثنتان","ثلاث","أربع","خمس","ست","سبع","ثمان","تسع","عشر"],
      Taa= "تا" , Taan = "تان", Aa= "ا", Aan= "ان", Ahad= "أحد", Ehda= "إحدى", Ethna= "إثنا", Ethnata= "إثنتا",
      WaSp= " و", Woon = "ون" , TanweenLetter = "ًا",Eshr="عشر",
      IsFeminine       = Flags>>0 &1,
      InsertComma      = Flags>>2 &1 ? "،" : "",
      SplitHund        = Flags>>3 &1 ? " " : "",
      TextWillFollow   = Flags>>4 &1;
let   NumberInWords    = "",
      IsLastEffTriplet = false,
      Miah             = Flags>>1 &1 ? "مئة" : "مائة",
      Triplet, TableUnits, Table11_19;

// Default table
[TableUnits,Table11_19,Table11_19[0]]=[[...TableUnitsMale],[...TableUnitsMale],TableUnitsFemale[10]],
[Table11_19[1],Table11_19[2]] = [Ahad, Ethna];

NumIn = "0".repeat((NumIn+="").length * 2 % 3) + NumIn; // Create Number as a String Triples
let L = NumIn.length;
for (let i= L; i>0; i-=3) {                             // Core Loop for each Triplet
  Triplet = +(NumIn.substr(L-i,3));                     // Get 1 Triplet Number
  IsLastEffTriplet= !+NumIn.substr(L-i+3);              // Remember Last Effective Triplet
  Triplet && (NumberInWords += oneTripletToWords(TableScalesSingle[i/3-1],TableScalesPlural[i/3-1]),  // convert 1 Triplet Number to Words
  !IsLastEffTriplet && (NumberInWords+= InsertComma + WaSp)); // Insert Comma and "و"
}
return NumberInWords; // we are all done

function oneTripletToWords(ScaleSingle, ScalePlural, a) {                // Core Function called for each Triplet
let Num_100  = ~~(Triplet/100),                                          // Hundreds (1 digit)
    Num_99   = Triplet % 100,                                            // 00 to 99
    Num_Unit = Num_99 % 10,                                              // 0 to 9
    Num_Tens = ~~(Num_99/10),                                            // Tens
    Word_100 = "", Word_99 = "";                                         // Holds words for Hundreds, and 1 - 99

if (IsFeminine && IsLastEffTriplet)  { //
    [TableUnits,Table11_19,Table11_19[0]]=[[...TableUnitsFemale],[...TableUnitsFemale],TableUnitsMale[10]],
    [Table11_19[1],Table11_19[2]]        = [Ehda,Ethnata];
 if (Num_99>19) TableUnits[1] = Ehda;
}

//------------  Handling Hundreds ----------------
if (Num_100) {                                                            // Process 100 to 900
  if (Num_100>2) Word_100 = TableUnitsFemale[Num_100] + SplitHund+ Miah;  // 300-900
  else if (Num_100 === 1) Word_100 = Miah;                                // 100
  else a = TextWillFollow ? Taa : Taan,                                   // 200
       Num_99 && (a =Taan),
       ScaleSingle && !Num_99 && (a=Taa),
       Word_100 = Miah.slice(0,-1) + a;
  }
//------------  Handling 0-99 ----------------
if   (Num_99 >19)                                                         // 20-99
     Word_99 = TableUnits[Num_Unit] + (Num_Unit ? WaSp :"") +
              (Num_Tens===2 ? Eshr : TableUnitsFemale[Num_Tens]) + Woon;
else Word_99 = Num_99 > 10 ? Table11_19[Num_99-10]+" "+Table11_19[0] :    // 01-19
     TableUnits[Num_99];

let Words999 = Word_100 + (Num_100 && Num_99 ? WaSp:"") + Word_99;        // Join Hund, Tens, and Units
if (!ScaleSingle) return Words999;                                        // If No Scale Name then 'Done'

//  ----- Add Scale Name -----------
let Word_100Wa = (Num_100 ? Word_100 + WaSp :"") + ScaleSingle;
if (Num_99 > 2) {                                                         // 3 to 99
  Words999 += Num_99<11 ?" " + ScalePlural : " " +ScaleSingle + TanweenLetter;
} else {
  if (!Num_99) Words999+= " "+ScaleSingle;                                // 0
  else if (Num_99===1) Words999 = Word_100Wa;                             // 1
  else Words999 = Word_100Wa + (!IsLastEffTriplet ? Aan:(TextWillFollow ? Aa : Aan)); // 2
  }
return Words999;   // Return the Triple in Words with Scale Name
}

}
