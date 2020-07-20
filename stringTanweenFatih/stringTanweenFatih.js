/*********************************************************************
* @function    : stringTanweenFatih(Arabic Word)
* @purpose     : Adds Tanween Fatih to an Arabic Word
*                Handles strings in accordance with Arabic garammar
* @version     : 1.00
* @author      : Mohsen Alyafei
* @date        : 18 July 2020
* @param       : {String} Arabic Word to be modified
* @returns     : {string} Arabic Word with Tanween fatih
**********************************************************************/
export function stringTanweenFatih(str) {
// (التنوين في حالة الفتح (النصب
str=str.replace(/[\u064B-\u0650\u0652]$/,"");                // Remove any Tashkeel on Last Char
let strTwo=str.replace(/([\u064B-\u0650\u0652])(.)$/,"$2"),  // Remove any Tashkeel on Penultimate Char
    LastOne     = strTwo.slice(-1),                          // Last Char of the string
    LastTwo     = strTwo.slice(-2),
    WithoutLast = strTwo.slice(0,-1),
    Default     = str + "ًا", // default Add (ـًا)
    Simple      = str + "ً";  // Add ( ً)

if (LastTwo === "اء" || LastTwo === "آء") return WithoutLast+"ءً";     //Add (ءً)
if (LastOne === "ء"  && strTwo.match(/([ورزدذ]).$/)) return Default;  //Add (قبل الأخير حروف مقطوعة (ـًا
if (LastOne === "ء"  || LastOne === "ئ") return str.slice(0,-1)+"ئًا"; //Add (ئًا)
if (LastOne === "ى")                     return WithoutLast+"ًى";      //Add (ى ً)
if (LastOne === "ا")                     return WithoutLast+"ًا";      //Add (ـًا)
if (LastOne === "أ")                     return Simple;               //Add ( ً)
if (LastOne === "ة")                     return Simple;               //Add ( ً)
return Default;   // default for all other cases
}
