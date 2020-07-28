# arqam

arqam is a JavaScript Arabic numbers utility library ***still under development***.

#### arqam will convert numbers into the equivalent Arabic text, taking into account the correct tye of the counted subject's gender therefore ensuring accuracy of the converting numbers in accordance with the Arabic grammar rules.

#### This will ensure that you will have no more errors in writing cheques in Arabic !!
***
## Purpose

The library is intended to provide the following functionalities and features:

- Convert Nummbers to the equivalent Arabic Words.
- Convert Currency Number to the equivalent Arabic Words (***Tafqeet***).
- Provide various **Options** for the display and formatting of the outputted Arabic Text which includes:
  - [x] Tashkeel.
  - [x] Tanween.
  - [x] Accountant Legal Mode.
  - [x] Various formats for display of fractions.
  - [x] Use of the Short or Long Scale Numbering Systems

All full list of Options is provided below.

# arqam Configuration Options

Options can be controlled by using the `arqamConfig()`.
Once specific options are specified, all subsequent calls for `arqam.NumToWords()` will use the already defined options. So the `arqamConfig()` can be called the start of the code. Options can be changed at any time.

_**Example:**_


```javascript
// Set the options to QAR Currency with Tashkeel and using Miah
   arqamConfig({Currency: "QAR", Tashkeel: "on", Miah: "on"});

   let result = arqamNumberToWords("2500.35");     // convert the number to currency text
   console.log(result);

```
Output:
###       ألْفانِ وَخَمْسُمَائَةِ رِيَالٍ قَطَرِيٍّ، وَخَمْسَةٌ وَثَلاثونَ دِرْهَمًا



## Table of Options

| No.| Option |Default|Purpose  
|:---:|:---|:---:|:---
|1|Currency           |none|The 3-Letter ISO Code of the Currency. Specifying a valid currency-code will generate the text for a currency taking into account the sub-currency.
|2|Miah               |off| Selects between "مئة" (off) and "مائة" (on) style. Default is "مئة".
|3|MiahSeparate       |off| Use separation between number and hundred words (e.g. ثلاثمائة becomes ثلاث مائة).
|4|Tashkeel           |off| Use full Tashkeel (تشكيل كامل للحروف)
|5|TanweenOnly        |off| Use Tanweens (Tanween Fath/Rafi, Kasr, and Dham) (استخدام تنوين الفتح/رفع وتنوين النصب والجر)
|6|Tanween            |**on**| Use Tanween Fath only (تنوين فتح/رفع) Default Basic Tanween is ON
|7|ShortScale         |off| Use the Short Scale Numbering System. The Default is the Arabic-Modified Short Scale Numbering System.
|8|LongScale          |off| Use the Lomg Scale Numbering System. The Default is the Arabic-Modified Short Scale Numbering System.
|9|Comma              |off| Insert a comma between the number triplet scale text.
|10|Accountant         |off| Use the accounting mode; helpful to get the correct legal writing.
|11|WholeNumAtEnd      |off| Adds the whole number at the end of the text inside round brackets.
|12|FractionsInNums    |off| Displays the fractional part as a number rather than text.
|13|FractionsInBrackets|off| Inserts the fractional part (either text or number) inside round brackets at the end of the text.
|14|IgnoreFractions    |off| Ignores the fractional part of the number.
|15|NumbersOnly        |off| Ignores any currencies and displays text for the number only.
|16|IgnoreCountry      |off| Ignores the country name but keeps the currency name.
|17|FractionFaslah     |off| The word "fasila" (فاصلة) is added before the fractional part for the number. The default is "Juzu" (جزء).
|18|FractionPlaces     |10| Default 10 decimal points for fractions (max 20)
|19|Prefix             |none| Add a prefix text before the text. Default no prefix
|20|Suffix             |none| Add a suffix text to the end of the text. Default no suffix
|21|MaxZeros           |100|The maximum scale zeros. Default up to 100 zeros for numbers. This can be up to 3000 zeros.

## 13. Fractions In Brackets

With this option enabled, the fractional part of the number will be outputted inside round brackets.

The Option may be combined with any other Options.

![](https://github.com/MohsenAlyafei/arqam/blob/master/images/arqam_002.png?raw=true)
