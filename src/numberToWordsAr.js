/*********************************************************************
* @function    : numberToWordsAr(NumIn [,Flags])
* @purpose     : Converts Numbers to Arabic Words
* @version     : 1.00
* @author      : Mohsen Alyafei
* @date        : 04 July 2020
* @param       : {NumIn} [integer or number in string form]
* @param       : Optinal {Flags} [number] The Options.
* @OptionFlags   Flags as follows when set:
* Bit 0 : Generate string for a Feminine subject. Default is Masculine.
* Bit 1 : Use Miah (مئة بدل مائة). Default is "مائة".
* Bit 2 : Insert comma between triplet words.
* Bit 3 : Indicates that there will be text to follow the result number string.
* Bit 4 : Split hundred words i.e. ثلاث مائة. Default "No Split" i.e. (ثلاثمائة)
*
* @returns     : {string} The wordified number string in Arabic
**********************************************************************/
export function numberToWordsAr(NumIn=0, Flags=0) {
if (NumIn == 0) return "صفر";
const TableScalesSingle= ["","ألف","مليون","بليون","ترليون","كوادرليون","كوينتليون","سكستليون"],
      TableScalesPlural= ["","آلاف","ملايين","بلايين","ترليونات","كوادرليونات","كوينتليونات","سكستليونات"],
      TableUnitsMale   = ["","واحد","اثنان","ثلاثة","أربعة","خمسة","ستة","سبعة","ثمانية","تسعة","عشرة"],
      TableUnitsFemale = ["","واحدة","اثنتان","ثلاث","أربع","خمس","ست","سبع","ثمان","تسع","عشر"],
      Taa   = "تا"  ,Taan    = "تان",
      Aa    = "ا"   ,Aan     = "ان"  ,
      Ahad  = "أحد" ,Ehda    = "إحدى",
      Ethna = "إثنا",Ethnata = "إثنتا",
      WaSp  = " و"  ,Woon    = "ون",
      TanweenLetter = "ًا",
      IsFeminine     = !!(Flags>>0 &1),
      InsertComma    = !!(Flags>>2 &1) ? "،" : "" ,
      TextWillFollow = !!(Flags>>3 &1),
      SplitHund      = !!(Flags>>4 &1) ? " " : "";

let   NumberInWords    = "",
      IsLastEffectiveTriplet = false,
      Miah             = !!(Flags>>1 &1) ? "مئة" : "مائة",
      TripletNum, TableUnits, Table11_19;

// Select the right table for Subject Gender so we work with 1 table only
if (IsFeminine) {
   [TableUnits, Table11_19]                      = [[...TableUnitsFemale], [...TableUnitsFemale]];
   [Table11_19[0], Table11_19[1], Table11_19[2]] = [TableUnitsMale[10], Ehda, Ethnata];
   } else {
   [TableUnits , Table11_19]                     = [[...TableUnitsMale], [...TableUnitsMale]];
   [Table11_19[0], Table11_19[1], Table11_19[2]] = [TableUnitsFemale[10], Ahad, Ethna];
 }
      
// Create Triples and create words for each
NumIn = "0".repeat((NumIn+="").length * 2 % 3) + NumIn;
let L = NumIn.length;
for (let i= L; i>0; i-=3) {
  TripletNum = +(NumIn.substr(L-i,3));
  if (+(NumIn.substr(L-i+3,i+1)) ===0) IsLastEffectiveTriplet= true;
  if (TripletNum) {
  //**********************
  var ScaleNameSingle = TableScalesSingle[i/3-1],
      ScaleNamePlural = TableScalesPlural[i/3-1];
  NumberInWords += oneTripletToWords();    // convert 1 Triplet Number to Words
  if (!IsLastEffectiveTriplet) NumberInWords+= InsertComma + WaSp;
  //**********************
  }
}
return NumberInWords; // we are all done

//****   Core working Function called for each Triplet ****
function oneTripletToWords() {
let Num_100       = Math.floor(TripletNum/100),  // Hundreds
    Num_TensUnit  = TripletNum % 100,            // 00 to 99
    Num_Unit      = Num_TensUnit % 10,           // 0 to 9
    Num_Tens      = Math.floor(Num_TensUnit/10), // Tens
    Word_100      = "",   // Holds words for Hundreds
    Word_99       = "",   // Holds words for 1 - 99
    a,wa;                 // temp working vars
if (IsFeminine && Num_TensUnit>19) TableUnits[1] = Ehda;
//------------  Handling Hundreds ----------------
if (Num_100) {
  if (Num_100>2) Word_100 = TableUnitsFemale[Num_100] + SplitHund+ Miah; // 300-900
  else if (Num_100 === 1) Word_100 = Miah; // 100
  else a = TextWillFollow ? Taa : Taan,    // 200
       Num_TensUnit && (a =Taan),
       ScaleNameSingle && !Num_TensUnit && (a=Taa),
       Word_100 = Miah.slice(0,-1) + a;
  }
//------------  Handling 0-99 ----------------
if (Num_TensUnit >19) // 20-99
    Word_99 = TableUnits[Num_Unit] + (Num_Unit>0 ? WaSp :"") +
              (Num_Tens===2 ? "عشر" : TableUnitsFemale[Num_Tens]) + Woon;
else Word_99 = Num_TensUnit > 10 ? Table11_19[Num_TensUnit-10]+" "+Table11_19[0] :
    TableUnits[Num_TensUnit];
wa = (Num_100 && Num_TensUnit) ? WaSp:"";        // add "و" between Hund & Units
// One Triplet Words Done
let NumberInWords999 = Word_100 + wa + Word_99; // Join Hund, Tens, and Units
if (!ScaleNameSingle) return NumberInWords999;  // No Scale Name then 'Done'

//  ----- Add Scale Name -----------
let Word_100Wa = (Num_100 ? Word_100 + WaSp :"")+ScaleNameSingle;
if (Num_TensUnit > 2) {
  NumberInWords999+= Num_TensUnit<11 ?" "+ScaleNamePlural:" "+ScaleNameSingle+TanweenLetter;
} else {
       if (Num_TensUnit===0) NumberInWords999+= " "+ScaleNameSingle;
  else if (Num_TensUnit===1) NumberInWords999 = Word_100Wa;
  else NumberInWords999 = Word_100Wa+(!IsLastEffectiveTriplet ? Aan:(TextWillFollow ? Aa : Aan));
  }
return NumberInWords999;   // Return the Triple in Words with Scale Name
}

}
