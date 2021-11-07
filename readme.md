<!-- # arqam ![Image](/images/ArqamLogo_2_64.png?raw=true) -->

# <img src="./images/ArqamLogo_2_64.png?raw=true" style ="display: inline-block; height: 100%;vertical-align: middle;"> arqamAR

### **Table of Contents**
1. **[Introduction ](#introduction)**

2. **[Purpose ](#purpose)**

3. **[Features](#features)**

4. **[Syntax and Parameters](#syntax)**

5. **[Configuration Options](#options)**

6. **[Table of Configuration](#table)**

   6.1 [Numbers Mode](#NumbersMode)

   6.2 [Currency Mode](#CurrencyMode)

   6.3 [Compact Mode](#compact)

   6.4 [Tashkeel Mode (تشكيل الحروف)](#tashkeel)

   6.5 [Tanween (تنوين كامل)](#tanween)

   6.6 [Tanween Fatih (تنوين فتح)](#tanweenFatih)

   6.7 [Accusative/Genitive (حالة الجر/النصب)](#jarnsb)

   6.8 [Miah (مئة ومائة)](#miah)

   6.9 [Miah Split (فصل المائة عن الرقم)](#miahSplit)

   6.10 [Comma between Words (فاصلة بين الكلمات)](#comma)

   6.11 [Legal (كتابة قانونية)](#legal)

   6.12 [Arabic Numbers](#arabicNumbers)

   6.13 [Numbering System Scale](#scale)

   6.14 [Maximum Number](#maxNumber)

   6.15 [Add Zero](#addZero)

   6.16 [Decimal Separator](#sepDecimal)

   6.17 [Thousands Separator](#sepThousands)

   6.18 [Brackets Mode](#brackets)

   6.19 [Brackets Type](#bracketsType)

   6.20 [Number Symbol (رمز الرقم)](#numSymbol)

   6.21 [Decimal Rounding](#decRound)

   6.22 [Decimal Formats (تنسيقات الكسور)](#decFormat)

   6.23 [Decimals in Brackets (كسور بين قوسين)](#decInBrackets)

   6.24 [Decimal Juzu](#decJuz)

   6.25 [Decimal Fasilah (فاصلة عوضًا عن الواو)](#decFaslah)

   6.26 [Ignore Decimals](#decIgnore)

   6.27 [Decimal AL (لام تعريف الكسر)](#decAL)

   6.28 [Ignore Country (تجاهل اسم البد)](#ignoreCountry)

   6.29 [Force Decimals in Currency](#currDecForce)

   6.30 [Prefix Text](#prefix)

   6.31 [Suffix Text](#suffix)

   6.32 [IsNaN String](#isNaNString)


7. **[Batch Processing](#batch)**

8. **[Modify Existing Currency](#modify)**

9.  **[Create New Currency](#createNew)**

10. **[Use Other Subjects (the Subjects Mode)](#subjectsMode)**



<h2 id="introduction">1️⃣ Introduction</h2>

Some time ago I felt that it was necessary to have a library that properly and correctly converts numbers and currencies to Arabic text.

Many websites and library functions exist (in various programming languages) that attempt to convert numbers and currencies to Arabic text but fail to do it properly in accordance with the correct Arabic language grammar, let alone provide the needed options and facilities required.

<div align="center">
  NOW IT IS HERE
</div>

<h2 id="purpose">2️⃣ Purpose</h2>

#### ***arqamAR*** is a JavaScript utility library part of the ***arqam Library Group*** that converts numbers and currencies into the equivalent Arabic text, taking into account the correct type of the counted subject's gender (مؤنث ومذكر) and other Arabic language grammar and styling rules therefore ensuring accuracy of the converted numbers and currencies in accordance with the Arabic grammar rules.

#### ***arqamAR*** ensures that you have no errors in writing numbers in words especially when writing cheques in Arabic !!

<h2 id="features">3️⃣ Features</h2>

The ***arqamAR*** library provides the following functionalities and features in the ***Numbers Mode***, the ***Currency Mode***, and the ***Subjects Mode***.

### General Features

- ***arqamAR*** provides many **Options** for the display and formatting of the outputted Arabic Text which includes:
  - [x] Arabic output text in accordance with the Arabic grammar rules.
  - [x] Handles both numbers (**[Numbers Mode](#NumbersMode)**) and currencies (**[Currency Mode](#CurrencyMode)**) with decimals and sub-units.
  - [x] Comes with **173** currencies including all current ISO currencies.
  - [x] Support for full words tashkeel (تشكيل الحروف كاملاً).
  - [x] Support for full Tanween (تنوين كامل).
  - [x] Support for Tanween Fatih only (تنوين فتح).
  - [x] Provide the compact mode which is preferred by the press and newspapers (الكتابة المختصرة).
  - [x] Provide an **Accountant Legal Mode** (كتابة محاسبية قانونية).
  - [x] Provide thirty (30) formats and options for outputting Arabic text.
  - [x] Provide nine (9) additional options for display of Decimal Numbers.
  - [x] Provide the options for using the Arabic, Short, or Long Scale Numbering Systems.
  - [x] Handle extremely very large numbers up to 10^3000 in the Short Scale and 10^6000 in the Long Scale.
  - [x] Handle extremely very low decimal digits up to 10^3000 decimal digits.
  - [x] Provide an ability to easily add new additional currencies.
  - [x] Provide an ability to easily modify existing currencies.
  - [x] Provide a **[Subjects Mode](#subjectsMode)** to use other subjects (other than currencies) in the output text.
  - [x] Provide a batch process facility to process multiple numbers in one call.

A full list of all options is provided below.

<h2 id="syntax">4️⃣ Syntax and Parameters</h2>

 ***arqamAR*** uses **`arqamAR.toWords()`** to convert a number to text. This will use the default configuration.

### Syntax:

```javascript
    arqamAR.toWords(number | array [, ISO_code | {options} ])
```

### Input Parameters:

#### First Parameter
**number**: Number in Numeric or String form.

Large numbers and numbers with large decimals may be passed in a string form if required.

Numbers may be passed in Arabic-Eastern format (i.e. numbers ٠١٢٣٤٥٦٧٨٩) (as a string), if required.

Underscores may be used as separators in numeric literals (ES2021).

**array**: an array of number to be batch processed. See **[Batch Processing](#batch)** below for details.

⛔ ***arqamAR*** does not accept the exponent (e-notation) number formats.

#### Second Parameter

The Second Parameter is optional and is used as a short-cut instead of the **`arqamAR.config()`**.

The 2nd parameter may be:

- **ISO_Code** : "String" a 3-letter ISO code in \<string\> form.

- **{options}**: object {name:value} representing the options as required by **`arqamAR.config()`**.

### Return Value:

An Arabic text string representation of the number or currency.


<h2 id="options">5️⃣ Configuration Options</h2>

The various options and configuration can be set and changed using the **`arqamAR.config()`**.

The configuration options provide full and flexible control of how the output text is formatted and displayed.

Once specific options are set, all subsequent calls to `arqamAR.toWords()` will use the already defined options. So the `arqamAR.config()` can be called only once at the start of your code.

Options can be changed at any time.

💡**Important Note**

Options are **sticky** in that they are remembered for the next call.
For example:

```javascript
arqamAR.toWords(20,"USD");
```
will result in **عشرون دولارًا أمريكيًا**

If then you issue another line like:

```javascript
arqamAR.toWords(30);  // without any options
```
will result in  **ثلاثون دولارًا أمريكيًا**

because the option "USD" is remembered in the next call.

***Example:***
```javascript
// Set the options to QAR Currency with Tashkeel and using Miah
   arqamAR.config({Currency: "QAR", tashkeel: "on"});

   let result = arqamAR.toWords(2500.35);     // convert the number to currency text
   console.log(result);

// ===== Output =======
ألْفانِ وَخَمْسُمَائَةِ رِيَالٍ قَطَرِيٍّ، وَخَمْسَةٌ وَثَلاثونَ دِرْهَمًا
```
![Image](/images/param01.png?raw=true)


### Alternative Configuration Shortcuts
`arqamAR.config()` provides full access to arqam configurations.

However, rather than using the `arqamAR.config()`, arqam provides two (2) alternative methods of shortcut using the `arqamAR.toWords()` itself by using the second parameter of `arqamAR.toWords()`. See above for the [`arqamAR.toWords()` syntax](#syntax).

If the 2nd parameter of the `arqamAR.toWords()` function is a valid ISO Currency Code, then that code is used and a switch is made to the **[Currency Mode](#CurrencyMode)**.

If the 2nd parameter in `arqamAR.toWords()` is an `object` then that is assumed to be a configuration option and is then decoded as is done for the `arqamAR.config()`.

***Example Shortcut to use the Currency Mode***
```javascript
// Shortcut to enter and use the Currency Mode

arqamAR.toWords(2200.2,"USD");
arqamAR.toWords(2200.2,"LBP");
arqamAR.toWords(2200.2,"EGP");
arqamAR.toWords(2200.2,"GBP");
arqamAR.toWords(2200.2,"JOD");
arqamAR.toWords(2200.2,"OMR");
arqamAR.toWords(2200.2,"KWD");

// ===== Output =======
ألفان ومائتا دولار أمريكي، وعشرون سنتًا
ألفان ومائتا ليرة لبنانية، وعشرون قرشًا
ألفان ومائتا جنيه مصري، وعشرون قرشًا
ألفان ومائتا جنيه إسترليني، وعشرون بنسًا
ألفان ومائتا دينار أردني، ومائتا فلس
ألفان ومائتا ريال عماني، ومائتا بيسة
ألفان ومائتا دينار كويتي، ومائتا فلس
```
![Image](/images/general_01.png?raw=true)


***Example Shortcut to change the Configurations***

```javascript
// Shortcut to change the configuration without using the arqamAR.config()

arqamAR.toWords(2200.2,{tashkeel:"on", code:"QAR", brackets: "end"});
arqamAR.toWords(3300.5,{tashkeel:"on", code:"AED", brackets: "end", arabicNumbers: "on"});

// ===== Output =======
(QAR 2,200٫20) ألْفانِ وَمَائَتا رِيَالٍ قَطَرِيٍّ، وَعِشْرونَ دِرْهَمًا
(AED ٢,٢٠٠٫٢٠) ألْفانِ وَمَائَتا دِرْهَمٍ إمَارَاتِيٍّ، وَعِشْرونَ فِلْسًا
```
![Image](/images/general_02.png?raw=true)

💡 ***While arqam provides many options and configuration to use, the default settings are sufficient to handle the most used methods of converting numbers to words in Arabic.***

💡 ***When displaying Arabic text inside fields or html 'div's, set the text direction to Righ-to-Left (RTL) for proper display especially when the text includes both Arabic and Latin characters.***

💡 ***If you copy the output text to an MS Excel cell, set the cell format display to Righ-to-Left (RTL) using 'Format Cells, Alignment, Text direction: Right-to-Left***

<h2 id="table">6️⃣ Table of Configurations</h2>

| No.| Config Option |Available<br/>Settings|Default<br/>Setting|Purpose
|:---:|:---|:---:|:---:|:-----
|     |    |     |     |
|1|[code](#CurrencyMode)|"" empty<br/>ISO code<br/>'sub'|"" empty|The 3-Letter ISO Code of the Currency.<br/>Specifying a valid currency-code will switch to the **[Currency Mode](#CurrencyMode)** and generate the text for a currency taking into account the sub-currency.<br/>An empty "" string  will switch to the **[Numbers Mode](#NumbersMode)** which is the default.<br/>'sub' will enter the **[Subjects Mode](#subjectsMode)**.
|2|[compact](#compact) |"on"<br/>"off"|'off'|Use the [compact](#compact) display mode.
|3|[tashkeel](#tashkeel)|"on"<br/>"off"|"off"|Use full Tashkeel (تشكيل كامل للحروف).<br/><br/>**Examples:**<br/>‏خَمْسَةَ عَشَرَ ألْفَ دِينَارٍ أُردُنِيٍّ<br/>ثَلاثَةُ رِيَالاتٍ عُمَانِيَّةٍ<br/>‏ ثَلاثَةُ آلَافٍ وَخَمْسُمَائَةٍ وَخَمْسَةٌ وَخَمْسونَ دُولارًا أمْريكِيًّا
|4|[tanween](#tanween)|"on"<br/>"off"|"off"|Use full Tanweens (Tanween Fatih, Dham, and Kasr)<br/>(استخدام تنوين الفتح وتنوين النصب والكسر).<br/><br/>**Examples:**<br/>‏خمسة عشر ألف دينارٍ أردنيٍ<br/>ثلاثة ريالاتٍ عمانيةٍ<br/>‏ ثَلاثة آلافٍ وخمسمائةٍ وخمسةٌ وخمسون دولارًا أمريكيًا
|5|[tanweenFatih](#tanweenFatih)|"on"<br/>"off"|**"on"**|Use Tanween Fatih only (تنوين فتح فقط). This is the default Basic Tanween and is "on" by default.<br/><br/>**Examples:**<br/>خمسون ريالًا قطريًّا<br/>‏ ثَلاثة آلاف وخمسمائة وخمسة وخمسون دولارًا أمريكيًا
|6|[jarnsb](#jarnsb)  |"on"<br/>"off"||The output text is displayed in Jar/Nasb (جر/نصب) mode.
|7|[miah](#miah)     |"on"<br/>"off"|"on"| Selects between "مئة" (off) and "مائة" (on) style. Default is "on" showing "مائة".
|8|[miahSplit](#miahSplit) |"on"<br/>"off"|"off"|Use separation between number and hundred words (e.g. ثلاثمائة becomes ثلاث مائة).
|9|[comma](#comma)     |"on"<br/>"off"|'off'|Insert a comma between the number triplet text for better readability of large numbers.
|10|[legal](#legal)    |"on"<br/>"off"|'off'|Use the legal accounting mode; helpful to get the correct legal writing and avoid misinterpretation of written numbers.
|11|[arabicNumbers](#arabicNumbers) |"on"<br/>"off"||Uses Arabic-Eastern numbers (٠١٢٣٤٥٦٧٨٩) in place of Arabic-Western numbers (0123456789). This will also set the appropriate Arabic decimal and thousand separators, unless overriden by the `sepDecimal` and `sepThousands` options.
|12|[scale](#scale)  |"arabic"<br/>"short"<br/>"long"|"arabic"| Selects the Numbering Scale System. "arabic", "short", or "long" numbering scale system. The Default is the Arabic-Modified Short Scale Numbering System. See more details below.
|13|[maxNumber](#maxNumber) |\<number\>|100|The maximum number in zeros on the right hand. Default up to 100 zeros for numbers. This can be up to 3000 zeros. The maxNumber also sets the maximum number of decimal digits that can be translated to words.
|14|[addZero](#addZero)  |"on"<br/>"off"||Adds the word zero "صفر" for numbers below one (1).
|15|[sepDecimal](#sepDecimal) |"" empty<br/>\<string\><br/>lang tag|"" empty|The decimal separator to use for display. Defaults to the system locale if "" empty.
|16|[sepThousands](#sepThousands) |"" empty<br/>\<string\><br/>lang tag|"" empty|The thousands separator to use for display. Defaults to the system locale if empty.
|17|[brackets](#brackets) |"" empty<br/>"start"<br/>"end"|"" empty| Adds the whole number (including any decimal parts) in digits form inside brackets either at the end of the text or at the start of the text, with the options in the Currency Mode to add the currency ISO Code or the currency symbol/sign. Default: no number in bracket shown.<br/>The brackets type can be controlled by the `bracketsOpen` and `bracketsClose` options.
|18|[bracketsType](#bracketsType) |\<string\><br/>empty|"" empty|Change the brackets type from the default round brackets '()' to any other type such '[]' or '{}', etc.
|19|[numSymbol](#numSymbol) |"" empty<br/>"iso"<br/>"symbol"<br/>"symbolL"<br/>"currency"|"" empty|With the brackets option, controls the symbol/sign to be used when displaying currency numbers inside brackets. Available with the **[brackets](#brackets)** and the **[Currency Mode](#CurrencyMode)** options only.
|20|[decRound](#decRound) |number<br/>"" empty|"" empty|The number of decimal places for rounding decimals. Default no rounding and all decimal digits will be converted to words. Available in **[Numbers Mode](#NumbersMode)** Only. In the **[Currency Mode](#CurrencyMode)**, rounding is dictated by the *minor unit* decimals.
|21|[decFormat](#decFormat) |"" empty<br/>"ww"<br/>"wn"<br/>"nw"<br/>"nn"<br/>"sw"<br/>"d"<br/>"/"<br/>"n"<br/>"w"|"" empty|Controls the format of the decimal (fractional) part with nine (9) options.<br/>Defaults to "w" in the **[Currency Mode](#CurrencyMode)** and to "ww" in the **[Numbers Mode](#NumbersMode)**.<br/>See below for more details and examples.
|22|[decInBrackets](#dec-in-brackets)|"on"<br/>"off"|'off'|Inserts the fractional part (either text or number) inside brackets at the end of the text.<br/>The brackets type can be controlled by the `bracketsOpen` and `bracketsClose` options.
|23|[decJuz](#decJuz) |"on"<br/>"off"|'on'| The word "Juzu'" (جزء من) is used in the formation of the Decimal Part for the number. This is the default and is set to 'on'.
|24|[decFaslah](#decFaslah) |"on"<br/>"off"|'off'| The word "fasila" (فاصلة) is used in the formation of the Decimal Part for the number. The default is "Juzu" (جزء).
|25|[decIgnore](#decIgnore)    |"on"<br/>"off"|'off'|Ignores the fractional part of the number.
|26|[decAL](#decAL)   |"on"<br/>"off"||Adds .
|27|[ignoreCountry](#ignoreCountry) |"on"<br/>"off"|'off'|Ignores the country name but keeps the currency name. Available in **[Currency Mode](#CurrencyMode)**.
|28|[currDecForce](#currDecForce) |"on"<br/>"off"||With the brackets option in the **[Currency Mode](#CurrencyMode)**, forces the decimal (sub-unit) part to always be displayed, even when there is no decimal part. Available in the **[Currency Mode](#CurrencyMode)**.
|29|[prefix](#prefix) |\<string\>|"" empty|Add a prefix text before the resulting output text. Default no prefix.
|30|[suffix](#suffix) |\<string\>|"" empty|Add a suffix text to the end of the resulting output text. Default no suffix.
|31|[isNaN](#isNaN) |\<string\>|"" empty|The text to be returned if the number passed is not a valid number. Default is an empty string.
|31|[decSubInParts](#) |'on'|off|Applicable only, and used in the **[Subjects Mode](#subjectsMode)** in the case of compounded adjectives. See the **[Subjects Mode](#subjectsMode)** below.


### General Notes on the Configuration Options

- An "**off**" setting of an option can be replaced with an **empty** string "". The "" has similar effect as "off".
- The words "**on**" or "**off**" can use any case such as "**On**", "**ON**", "**Off**", or "**OFF**".
- The **ISO codes** in the **[Currency Mode](#CurrencyMode)** **must be in block letters**; i.e. USD, GBP, etc.


<h2 id="NumbersMode">⚙6.1 Numbers Mode</h2>

The **Numbers Mode** is the default ***arqamAR*** display mode. ***arqamAR*** will always start in the **Numbers Mode** by default.

In this mode, numbers in digit form are converted into Arabic text using various configuration formats.

**Decimals Parts** of the number are also converted into Arabic text with various display formats available.

The default output is very simple and precise Arabic text; with an example below:

#### Examples:
```javascript
arqamAR.toWords(123);
arqamAR.toWords(2560000);
arqamAR.toWords(3356789);
arqamAR.toWords(25.27);
arqamAR.toWords(0.5);
arqamAR.toWords(0.35);

// ===== Output =======
مائة وثلاثة وعشرون
مليونان وخمسمائة وستون ألفًا
ثلاثة ملايين وثلاثمائة وستة وخمسون ألفًا وسبعمائة وتسعة وثمانون
خمسة وعشرون، و‏سبعة وعشرون جزءًا من المئة
‏خمسة أجزاء من العشرة
‏خمسة وثلاثون جزءًا من المئة
```
![Image](/images/numbersMode01.png?raw=true)

If you were in the ***Currency Mode***, you can switch back to the **[Numbers Mode](#NumbersMode)** by setting the `arqam.arConfig` to (currMode : '') using the following line:

```javascript
arqamAR.config({currMode : ''}).
```

<h2 id="CurrencyMode">⚙6.2 Currency Mode</h2>

The **Currency Mode** is enabled by specifying a **valid** 3-letter ISO **Currency Code** using the configuration option **`arqamAR.config()`** ***`{code: <ISO Code>`***.

The 3-letter ISO Code must be in **block letters**, for example : USD, GBP, KWD, QAR, JOD, EGP, etc.

An invalid ISO Code will not produce and error and ***arqamAR*** will switch to the **[Numbers Mode](#NumbersMode)** unless a **New Currency** is intended. See below how to create a **New Currency** or **Modify Existing Currency**.

Almost all of the ***arqamAR*** configuration options are available in the **Currency Mode**.

In addition, there are specific ***arqamAR*** configuration options which only apply in the **Currency Mode**.

***arqamAR*** recognises **173** currency codes (including the latest ISO-4217 codes) and has all necessary data settings for each currency. This includes the names of the *major* and *minor* currencies, the applicable country names, and the decimal sub-units.

#### Examples:
```javascript
arqamAR.config({currMode : 'USD'});

arqamAR.toWords(20000);
arqamAR.toWords(2560000);
arqamAR.toWords(3356789);
arqamAR.toWords(25.27);
arqamAR.toWords(0.5);
arqamAR.toWords(0.35);

// ===== Output =======
عشرون ألف دولار أمريكي
مليونان وخمسمائة وستون ألف دولار أمريكي
ثلاثة ملايين وثلاثمائة وستة وخمسون ألفًا وسبعمائة وتسعة وثمانون دولارًا أمريكيًا
خمسة وعشرون دولارًا أمريكيًا، وسبعة وعشرون سنتًا
خمسون سنتًا أمريكيًا
خمسة وثلاثون سنتًا أمريكيًا
```
![Image](/images/currencyMode01.png?raw=true)

<h2 id="compact">⚙6.3 Compact</h2>

The `compact` configuration option provides a unique display method that many newspapers and magazines prefer using for writing large numbers.

The compact output text is a combination of both digits and words.

- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.

***Examples in Numbers Mode:***
```javascript
//--------------------------
// Examples using Numbers
//--------------------------

arqamAR.config({ compact : "on" });  // enable compact mode

arqamAR.toWords(20200);
arqamAR.toWords(2560000);
arqamAR.toWords(3356789);
arqamAR.toWords(25.27);
arqamAR.toWords(0.5);
arqamAR.toWords(0.35);

// ===== Output =======
‏20 ألفًا و‏200
مليونان و‏560 ألفًا
‏3 ملايين و‏356 ألفًا و‏789
‏25، و‏27 جزءًا من الـ100
‏5 أجزاء من الـ10
‏35 جزءًا من الـ100
```
![Image](/images/compact_01.png?raw=true)

***Examples in Currency Mode:***
```javascript
//--------------------------
// Examples using Currencies
//--------------------------
arqamAR.config({ compact : "on" , code: "USD" }); // enable both compact and currency options

arqamAR.toWords(20200);
arqamAR.toWords(2560000);
arqamAR.toWords(3356789);
arqamAR.toWords(25.27);
arqamAR.toWords(0.5);
arqamAR.toWords(0.35);

// ===== Output =======
‏20 ألفًا و‏200 دولار أمريكي
مليونان و‏560 ألف دولار أمريكي
‏3 ملايين و‏356 ألفًا و‏789 دولارًا أمريكيًا
‏25 دولارًا أمريكيًا، و‏27 سنتًا
‏50 سنتًا أمريكيًا
‏35 سنتًا أمريكيًا

```
![Image](/images/compact_02.png?raw=true)


*Note: You will notice that the words "ألفان", "ألف", "مليون", "مليونان",  etc. will not be converted into digit form as this will lead to incorrect Arabic grammar.*


<h2 id="tashkeel">⚙6.4 Tashkeel Mode (تشكيل الحروف)</h2>

The **Taskeel Mode** is enabled by setting the option `{tashkeel: 'on'}`.

The **Taskeel Mode** provides full Arabic tashkeel of the outputted text.

**Applicability**
- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.

**Notes:**
- [x] The The **Taskeel Mode** overrides the [`tanween`](#tanween) and [`tanweenFatih`](#tanweenFatih) options.


***Examples in Numbers Mode:***
```javascript
//--------------------------
// Examples using Numbers
//--------------------------
arqamAR.config({ tashkeel : "on"  }); // enable tashkeel option

arqamAR.toWords(20200);
arqamAR.toWords(2560000);
arqamAR.toWords(3356789);
arqamAR.toWords(25.27);
arqamAR.toWords(0.5);
arqamAR.toWords(0.35);

// ===== Output =======
عِشْرونَ ألْفًا وَمَائَتَان
مِلْيُونانِ وَخَمْسُمَائَةٍ وَسِتّونَ ألْفًا
ثَلاثَةُ مَلَايينٍ وَثَلاثُمَائَةٍ وَسِتَّةٌ وَخَمْسونَ ألْفًا وَسَبْعُمَائَةٍ وَتِسْعَةٌ وَثَمَانون
خَمْسَةٌ وَعِشْرونَ، وَ‏سَبْعَةٌ وَعِشْرونَ جُزءًا مِنَ المَائَة
‏خَمْسَةُ أجْزاءٍ مِنَ العَشرَة
‏خَمْسَةٌ وَثَلاثونَ جُزءًا مِنَ المَائَة
```
![Image](/images/tashkeel_01.png?raw=true)

***Example in Currency Mode:***
```javascript
//--------------------------
// Examples using Currencies
//--------------------------
arqamAR.config({ tashkeel: "on"  code: "JOD"}); // enable both tashkeel and currency options

arqamAR.toWords(20200);
arqamAR.toWords(2560000);
arqamAR.toWords(3356789);
arqamAR.toWords(25.27);
arqamAR.toWords(0.5);
arqamAR.toWords(0.35);

// ===== Output =======
عِشْرونَ ألْفًا وَمَائَتا دِينَارٍ أُردُنِيٍّ
مِلْيُونانِ وَخَمْسُمَائَةٍ وَسِتّونَ ألْفَ دِينَارٍ أُردُنِيٍّ
ثَلاثَةُ مَلَايينٍ وَثَلاثُمَائَةٍ وَسِتَّةٌ وَخَمْسونَ ألْفًا وَسَبْعُمَائَةٍ وَتِسْعَةٌ وَثَمَانونَ دِينَارًا أُردُنِيًّا
خَمْسَةٌ وَعِشْرونَ دِينَارًا أُردُنِيًّا، وَمَائَتَانِ وَسَبْعونَ فِلْسًا
خَمْسُمَائَةِ فِلْسٍ أُردُنِيٍّ
ثَلاثُمَائَةٍ وَخَمْسونَ فِلْسًا أُردُنِيًّا
```
![Image](/images/tashkeel_02.png?raw=true)



<h2 id="tanween">⚙6.5 Tanween (تنوين الكلمات)</h2>

The `tanween` option (in English: Nunation) provides full Arabic tanween of the outputted text.

Arabic Tanween (Nunation) has three (3) forms: tanween Fath (تنوين الفتح), tanween Dhum (تنوين الضم), and tanween Kasr (تنوين الكسر).

*Examples of Tanween:*

- Tanween Fatih (تنوين الفتح): ألفًا جنيهًا دولارًا ريالًا خمسةً عشرةً
- Tanween Dhum (تنوين الضم): سبعةٌ خمسةٌ ستةٌ
- Tanween Kasr (تنوين الكسر): مئةٍ مائةٍ ألفٍ سبعمائةٍ بيسةٍ ليرةٍ

**Applicability**
- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.

**Notes:**
- [x] The [`tashkeel`](#tashkeel) option overrides this option.
- [x] This option overrides the [`tanweenFatih`](#tanweenFatih) option.



***Examples in Numbers Mode:***
```javascript
//--------------------------
// Examples using Numbers
//--------------------------
arqamAR.config({ tanween : "on"  }); // enable tanween option

arqamAR.toWords(20200);
arqamAR.toWords(2560000);
arqamAR.toWords(3356789);
arqamAR.toWords(25.27);
arqamAR.toWords(0.5);
arqamAR.toWords(0.35);

// ===== Output =======
عشرون ألفًا ومائتان
مليونان وخمسمائةٍ وستون ألفًا
ثلاثة ملايينٍ وثلاثمائةٍ وستةٌ وخمسون ألفًا وسبعمائةٍ وتسعةٌ وثمانون
خمسةٌ وعشرون، و‏سبعةٌ وعشرون جزءًا من المائة
‏خمسة أجزاء من العشرة
‏خمسةٌ وثلاثون جزءًا من المائة
```
![Image](/images/tanweenAll_01.png?raw=true)

***Example in Currency Mode:***
```javascript
//--------------------------
// Examples using Currencies
//--------------------------
arqamAR.config({ tanween: "on"  code: "EGP"}); // enable both tanween and currency options

arqamAR.toWords(20200);
arqamAR.toWords(2560000);
arqamAR.toWords(3356789);
arqamAR.toWords(25.27);
arqamAR.toWords(0.5);
arqamAR.toWords(0.35);

// ===== Output =======
عشرون ألفًا ومائتا جنيهٍ مصريٍ
مليونان وخمسمائةٍ وستون ألف جنيهٍ مصريٍ
ثلاثة ملايينٍ وثلاثمائةٍ وستةٌ وخمسون ألفًا وسبعمائةٍ وتسعةٌ وثمانون جنيهًا مصريًا
خمسةٌ وعشرون جنيهًا مصريًا، وسبعةٌ وعشرون قرشًا
خمسون قرشًا مصريًا
خمسةٌ وثلاثون قرشًا مصريًا
```
![Image](/images/tanweenAll_02.png?raw=true)





<h2 id="tanweenFatih">⚙6.6 Tanween Fath (تنوين فتح)</h2>

The `tanweenFatih` option is the basic option that provides tanween fatih (تنوين الفتح) only, and is the default ***arqamAR*** option.

**Applicability**
- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.

**Notes:**
- [x] This option is the default ***arqamAR*** option.
- [x] The [`tashkeel`](#tashkeel) and [`tanween`](#tanween) options override this option.


***Examples in Numbers Mode:***
```javascript
//--------------------------
// Examples using Numbers
//--------------------------
arqamAR.config({ tanweenFatih : "on"  }); // enable tanween option

arqamAR.toWords(20200);
arqamAR.toWords(3356789);
arqamAR.toWords(25.27);
arqamAR.toWords(0.35);

// ===== Output =======
عشرون ألفًا ومائتان
ثلاثة ملايين وثلاثمائة وستة وخمسون ألفًا وسبعمائة وتسعة وثمانون
خمسة وعشرون، و‏سبعة وعشرون جزءًا من المائة
‏خمسة وثلاثون جزءًا من المائة
```

***Example in Currency Mode:***
```javascript
//--------------------------
// Examples using Currencies
//--------------------------
arqamAR.config({ tanween: "on"  code: "KWD"}); // enable both tanween and currency options

arqamAR.toWords(20200);
arqamAR.toWords(3356789);
arqamAR.toWords(25.27);
arqamAR.toWords(0.35);

// ===== Output =======
عشرون ألفًا ومائتا دينار كويتي
ثلاثة ملايين وثلاثمائة وستة وخمسون ألفًا وسبعمائة وتسعة وثمانون دينارًا كويتيًا
خمسة وعشرون دينارًا كويتيًا، ومائتان وسبعون فلسًا
ثلاثمائة وخمسون فلسًا كويتيًا
```




<h2 id="jarnsb">⚙6.7 Accusative/Genitive (حالة الجر/النصب)</h2>

The default ***arqamAR*** ouput is the Nominative case (حالة الرفع).

When using this option, the output text is produced in the Accusative/Genitive (جر/نصب) case.

The following table summarizes the conditions under which numbers are converted from Nominative to Accusative/Genitive.

![Image](/images/ag.png?raw=true)

**Applicability**
- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.





<h2 id="miah">⚙6.8 miah (مئة ومائة)</h2>
With this option, the default word "مئة" (hundred) is replaced with the word "مائة".

Many Arabic-speaking countries' official documents prefer the use of the word "مئة".

This option affects all places where the word "مئة" (hundred) is used.

**Applicability**
- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.

Examples with both the default and with the option `{miah: "on"}`:

***Example with the default option "on":***
```javascript
arqamAR.toWords(300);
arqamAR.toWords(2500);
arqamAR.toWords(700900.02);

//======= Output ========
ثلاثمائة
ألفان وخمسمائة
سبعمائة ألف وتسعمائة، وجزءان اثنان من المائة
```


***Example with the option "off":***
```javascript
arqamAR.config({ miah: "off"}); // use default miah option

arqamAR.toWords(300);
arqamAR.toWords(2500);
arqamAR.toWords(700900.02);

//======= Output ========
ثلاثمئة
ألفان وخمسمئة
سبعمئة ألف وتسعمئة، وجزءان اثنان من المئة
```
![Image](/images/miah_01.png?raw=true)





<h2 id="miahSplit">⚙6.9 Miha Split (فصل المائة عن الرقم)</h2>

This option permits the splitting/separation of the unit name from the hundred words.

Some Arabic-speaking countries consider this to be the correct method for writing the numbers from 300 to 900. The "ثلاثمائة" becomes "ثلاث مائة" and "أربعمائة" becomes "أربع مائة", and so on.

When combined with the option `{miah: "off"}`, this option produces the combined result of (for example) "ثلاث مئة" and "أربع مئة".

**Applicability**
- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.

The flowing diagram illustrates the effect of this option:

![Image](/images/miahsplit.png?raw=true)

***Example with split the default "miah" option:***

```javascript
arqamAR.config({ miahSplit: "on"}); // enable miahSplit option

arqamAR.toWords(300);
arqamAR.toWords(2500);
arqamAR.toWords(700900.02);

//======= Output ========
ثلاث مائة
ألفان وخمس مائة
سبع مائة ألف وتسع مائة، وجزءان اثنان من المائة
```

***Example with split the "miah" option "off":***
```javascript
arqamAR.config({ miah: "off", miahSplit: "on"}); // enable miahSplit option with default miah option

arqamAR.toWords(300);
arqamAR.toWords(2500);
arqamAR.toWords(700900.02);

//======= Output ========
ثلاث مئة
ألفان وخمس مئة
سبع مئة ألف وتسع مئة، وجزءان اثنان من المئة
```
![Image](/images/miahsplit_01.png?raw=true)






<h2 id="comma">⚙6.10 Comma between Words (فاصلة بين الكلمات)</h2>

This option adds a comma "،" between the triplet number strings. This assists in having a more readable and better-interpreted text, especially for large numbers.

**Applicability**
- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.

The following are examples with both the default and with the option `{comma: "on"}`:

***Examples:***
```javascript
//------------------------------------
// Examples with the 'comma' option on
//------------------------------------
arqamAR.config({ comma: "on"}); // enable comma option

arqamAR.toWords(12003050200);
arqamAR.toWords(700900);

//======= Output ========
اثنا عشر مليارًا، وثلاثة ملايين، وخمسون ألفًا، ومائتان
سبعمائة ألف، وتسعمائة
```
![Image](/images/comma.png?raw=true)



<h2 id="legal">⚙6.11 Legal (كتابة قانونية)</h2>
The output text is produced in a legal non-ambiguous form.

**Applicability**
- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.

Consider the following examples:
```javascript
arqamAR.toWords(101,000);                 // "مائة وألف"
arqamAR.toWords(102,010);                 // "مائة وألفان وعشرة"
```
In the above examples, the output "مائة وألف" could be interpreted to mean **100 plus 1000** giving a total of 1,100. This of courses is not what is intended; what is intended is 101,000.

Similarly, the second example could be interpreted to mean **100 + 2000 + 10** giving a total 2,110 instead of meaning 102,010.

The above situations are unacceptable when writing legal or official documents (especially when writing cheque books). It is a common legal practice that where there exists an ambiguity or a dispute in the interpretation of a number, then the number in words overrides the number in figures. Therefore, the words must be clear and unambiguous.

This option permits such situations of ambiguity to be avoided.

The above examples cab ne re-done with the option `{legal: "on"}`:

```javascript
arqamAR.config({ legal: "on"}); // enable legal option

arqamAR.toWords(101000);   // "مائة ألف وألف"
arqamAR.toWords(102010);   // "مائة ألف وألفان وعشرة"
```

💡 ***As additional protection against any ambiguity, it is advisable to enable the option {comma: "on"} to clearly indicate the separation between triplets.***


<h2 id="arabicNumbers">⚙6.12 Arabic Numbers</h2>

The `arabicNumbers` option displays digits in the Arabic-Eastern form (٠١٢٣٤٥٦٧٨٩) rather than the Arabic-Western form (0123456789).

Digits are displayed when any of the following options are used:

- [`compact`](#compact) option.
- [`brackets`](#brackets) option, and
- [`decFormat`](#decFormat) option that displays digits ('wn', 'nw', 'nn', 'n', '/', or 'd')

With the `{arabicNumbers: 'on'`, the Arabic-Western numbers (0123456789) are replaced with the Arabic-Eastern numbers (٠١٢٣٤٥٦٧٨٩).


***Example with the option `{compact:'on'}`:***
```javascript
//-------------------------------------
// Examples with the `compact` option
//-------------------------------------
arqamAR.config({ compact: "on", arabicNumbers: "on"}); // enable arabicNumbers with compact option

arqamAR.toWords(5299530);
arqamAR.toWords(1560);
arqamAR.toWords(33.2);

// ===== Output =======
‏٥ ملايين و‏٢٩٩ ألفًا و‏٥٣٠
ألف و‏٥٦٠
‏٣٣، و‏جزءان ٢ من الـ١٠
```
![Image](/images/arNum_01.png?raw=true)


***Example with the option `{brackets:'end'}`:***
```javascript
//--------------------------------------
// Examples with the `brackets` option
//--------------------------------------
arqamAR.config({ brackets: "end", arabicNumbers: "on"}); // enable arabicNumbers with brackets option

arqamAR.toWords(5530);
arqamAR.toWords(1560);
arqamAR.toWords(33.2);
arqamAR.toWords(5530.98,"JOD");
arqamAR.toWords(1560.45,"BHD");
arqamAR.toWords(33.2,"SDG");

// ===== Output =======
(٥٬٥٣٠) خمسة آلاف وخمسمائة وثلاثون
(١٬٥٦٠) ألف وخمسمائة وستون
(٣٣٫٢) ثلاثة وثلاثون، و‏جزءان اثنان من العشرة
(JOD ٥٬٥٣٠٫٩٨٠) خمسة آلاف وخمسمائة وثلاثون دينارًا أردنيًا، وتسعمائة وثمانون فلسًا
(BHD ١٬٥٦٠٫٤٥٠) ألف وخمسمائة وستون دينارًا بحرينيًا، وأربعمائة وخمسون فلسًا
(SDG ٣٣٫٢٠) ثلاثة وثلاثون جنيهًا سودانيًا، وعشرون قرشًا
```
![Image](/images/arNum_02.png?raw=true)

***Example with the option `{decFormat:'nn'}`:***
```javascript
//-------------------------------------------
// Examples with the decFormat:'nn' option
//-------------------------------------------
arqamAR.config({ decFormat: "nn", arabicNumbers: "on"}); // enable arabicNumbers with decFormat:'nn' option

arqamAR.toWords(5530.98);
arqamAR.toWords(1560.45);
arqamAR.toWords(33.2);
arqamAR.toWords(5530.98,"JOD");
arqamAR.toWords(1560.45,"BHD");
arqamAR.toWords(33.2,"SDG");

// ===== Output =======
خمسة آلاف وخمسمائة وثلاثون، و‏٩٨ جزءًا من الـ١٠٠
ألف وخمسمائة وستون، و‏٤٥ جزءًا من الـ١٠٠
ثلاثة وثلاثون، و‏جزءان ٢ من الـ١٠
خمسة آلاف وخمسمائة وثلاثون دينارًا أردنيًا، و‏٩٨٠ جزءًا من الـ١٬٠٠٠ دينار
ألف وخمسمائة وستون دينارًا بحرينيًا، و‏٤٥٠ جزءًا من الـ١٬٠٠٠ دينار
ثلاثة وثلاثون جنيهًا سودانيًا، و‏٢٠ جزءًا من الـ١٠٠ جنيه
```
![Image](/images/arNum_03.png?raw=true)

***Example with the option `{decFormat:'wn'}`:***
```javascript
//-------------------------------------------
// Examples with the decFormat:'wn' option
//-------------------------------------------
arqamAR.config({ decFormat: "wn", arabicNumbers: "on"}); // enable arabicNumbers with decFormat:'wn' option

arqamAR.toWords(5530.98);
arqamAR.toWords(1560.45);
arqamAR.toWords(33.2);
arqamAR.toWords(5530.98,"JOD");
arqamAR.toWords(1560.45,"BHD");
arqamAR.toWords(33.2,"SDG");

// ===== Output =======
خمسة آلاف وخمسمائة وثلاثون، و‏ثمانية وتسعون جزءًا من الـ١٠٠
ألف وخمسمائة وستون، و‏خمسة وأربعون جزءًا من الـ١٠٠
ثلاثة وثلاثون، و‏جزءان اثنان من الـ١٠
خمسة آلاف وخمسمائة وثلاثون دينارًا أردنيًا، و‏تسعمائة وثمانون جزءًا من الـ١٬٠٠٠ دينار
ألف وخمسمائة وستون دينارًا بحرينيًا، و‏أربعمائة وخمسون جزءًا من الـ١٬٠٠٠ دينار
ثلاثة وثلاثون جنيهًا سودانيًا، و‏عشرون جزءًا من الـ١٠٠ جنيه
```
![Image](/images/arNum_04.png?raw=true)

***Example with the option `{decFormat:'nw'}`:***
```javascript
//-------------------------------------------
// Examples with the decFormat:'nw' option
//-------------------------------------------
arqamAR.config({ decFormat: "nw", arabicNumbers: "on"}); // enable arabicNumbers with decFormat:'nw' option

arqamAR.toWords(5530.98);
arqamAR.toWords(1560.45);
arqamAR.toWords(33.2);
arqamAR.toWords(5530.98,"JOD");
arqamAR.toWords(1560.45,"BHD");
arqamAR.toWords(33.2,"SDG");
// ===== Output =======
خمسة آلاف وخمسمائة وثلاثون، و‏٩٨ جزءًا من المائة
ألف وخمسمائة وستون، و‏٤٥ جزءًا من المائة
ثلاثة وثلاثون، و‏جزءان ٢ من العشرة
خمسة آلاف وخمسمائة وثلاثون دينارًا أردنيًا، و‏٩٨٠ جزءًا من الألف دينار
ألف وخمسمائة وستون دينارًا بحرينيًا، و‏٤٥٠ جزءًا من الألف دينار
ثلاثة وثلاثون جنيهًا سودانيًا، و‏٢٠ جزءًا من المائة جنيه
```
![Image](/images/arNum_05.png?raw=true)

***Example with the option `{decFormat:'n'}`:***
```javascript
//-------------------------------------------
// Examples with the decFormat:'n' option
//-------------------------------------------
arqamAR.config({ decFormat: "n", arabicNumbers: "on"}); // enable arabicNumbers with decFormat:'n' option

arqamAR.toWords(5530.98);
arqamAR.toWords(1560.45);
arqamAR.toWords(33.2);
arqamAR.toWords(5530.98,"JOD");
arqamAR.toWords(1560.45,"BHD");
arqamAR.toWords(33.2,"SDG");
// ===== Output =======
خمسة آلاف وخمسمائة وثلاثون، فاصلة ٩٨
ألف وخمسمائة وستون، فاصلة ٤٥
ثلاثة وثلاثون، فاصلة ٢
خمسة آلاف وخمسمائة وثلاثون دينارًا أردنيًا، و‏٩٨٠ فلسًا
ألف وخمسمائة وستون دينارًا بحرينيًا، و‏٤٥٠ فلسًا
ثلاثة وثلاثون جنيهًا سودانيًا، و‏٢٠ قرشًا
```
![Image](/images/arNum_05.png?raw=true)

***Example with the option `{decFormat:'d'}`:***
```javascript
//-------------------------------------------
// Examples with the decFormat:'d' option
//-------------------------------------------
arqamAR.config({ decFormat: "d", arabicNumbers: "on"}); // enable arabicNumbers with decFormat:'d' option

arqamAR.toWords(5530.98);
arqamAR.toWords(1560.45);
arqamAR.toWords(33.2);
arqamAR.toWords(5530.98,"JOD");
arqamAR.toWords(1560.45,"BHD");
arqamAR.toWords(33.2,"SDG");
// ===== Output =======
خمسة آلاف وخمسمائة وثلاثون، و٠٫٩٨
ألف وخمسمائة وستون، و٠٫٤٥
ثلاثة وثلاثون، و٠٫٢
خمسة آلاف وخمسمائة وثلاثون دينارًا أردنيًا، و٠٫٩٨٠ دينار
ألف وخمسمائة وستون دينارًا بحرينيًا، و٠٫٤٥٠ دينار
ثلاثة وثلاثون جنيهًا سودانيًا، و٠٫٢٠ جنيه
```
![Image](/images/arNum_06.png?raw=true)

***Example with the option `{decFormat:'/'}`:***
```javascript
//-------------------------------------------
// Examples with the decFormat:'/' option
//-------------------------------------------
arqamAR.config({ decFormat: "/", arabicNumbers: "on"}); // enable arabicNumbers with decFormat:'/' option

arqamAR.toWords(5530.98);
arqamAR.toWords(1560.45);
arqamAR.toWords(33.2);
arqamAR.toWords(5530.98,"JOD");
arqamAR.toWords(1560.45,"BHD");
arqamAR.toWords(33.2,"SDG");
// ===== Output =======
خمسة آلاف وخمسمائة وثلاثون، و٩٨/١٠٠
ألف وخمسمائة وستون، و٤٥/١٠٠
ثلاثة وثلاثون، و٢/١٠
خمسة آلاف وخمسمائة وثلاثون دينارًا أردنيًا، و٩٨٠/١٬٠٠٠ دينار
ألف وخمسمائة وستون دينارًا بحرينيًا، و٤٥٠/١٬٠٠٠ دينار
ثلاثة وثلاثون جنيهًا سودانيًا، و٢٠/١٠٠ جنيه
```
![Image](/images/arNum_06.png?raw=true)

💡 ***When displaying Arabic text inside fields or html 'div's, set the text direction to Right-to-Left (RTL) for proper display especially when the text includes both Arabic and Latin characters.***

💡 ***If you copy the output text to an MS Excel cell, set the cell format display to Right-to-Left (RTL) using 'Format Cells, Alignment, Text direction: Right-to-Left***



<h2 id="scale">⚙6.13 Scale</h2>

This `scale` option permits the selection of the **Numbering System**.

There are tree (3) Numbering Systems:

- `arabic` Arabic Numbering System. Is a modified Short Scale Numbering System (commonly used in Arabic countries except Saudi Arabia and the UA). **This is the Default ued by arqam**.
- `short` The Short Scale Numbering system (UK, USA, ans most English-speaking countries using the word Billion for the number 10^9).
- `long` The Long Scale Numbering system. Used in most Europe and french speaking countries.

**Notes:**

💡 The Arabic Short Scale System is an exact Short Scale System except that the word Billion (بليون) at position 10^9 is replaced with the word milyar (مليار) (all other scale names remain unchanged).

💡 Most Arabic-language countries and regions use the modified Short Scale Numbering System (Arabic Numbering System) with 10^9 being مليار (milyar), except for a few countries like Saudi Arabia and the UAE which use the official Short-Scale System.

More information on countries using the system can be found here on Wikipedia: [Arabic_Speaking_Long_and_Short_Scales](https://en.wikipedia.org/wiki/Long_and_short_scales#Arabic-speaking).

The following diagram illustrates the difference between the three (3) systems:
![Image](/images/scales.png?raw=true)



***Examples:***
```javascript
//-------------------------------------
// Examples with the `compact` option
//-------------------------------------
arqamAR.config({ compact: "on"}); // used compact mode for better comparison readability

arqamAR.toWords("1100100100100100000");                    // default arabic scale
arqamAR.toWords("1100100100100100000" {scale : "short"});  // short scale
arqamAR.toWords("1100100100100100000" {scale : "long"});   // short scale


// ===== Output =======
كوينتليون و100 كوادرليون و100 ترليون و100 مليار و100 مليون و100 ألف // default arabic scale
كوينتليون و100 كوادرليون و100 ترليون و100 بليون و100 مليون و100 ألف // short scale
ترليون و100 بليار و100 بليون و100 مليار و100 مليون و100 ألف          // short scale
```

***Note 1: In the above example, the `compact` mode is used for easier readability and comparison.***

***Note 1: Large numbers are passed as a string.***


<h2 id="maxNumber">⚙6.14 Maximum Number</h2>

Set the maximum number that can be used by ***arqamAR***.

The default is 10^1000 (i.e. 100 دِيْوْتْرِيجِنْتاترِسِنْتِلْيون).

The Largest number that can be converted by ***arqamAR*** is:

*  100 نُوفِنوناجِنْتانونْجِنْتِلْيون   which is (10^3002) under the Short Scale System, and
*  100 نُوفِنوناجِنْتانونْجِنْتِلْيَارات which is (10^6000) under the Long Scale System.

💡 *Note: Increasing the [Decimal Rounding](#decRound) using the `{decRound}` above the Maximum Number will also increase the maximum number so that large decimal places are correctly converted.*

💡 ***Only change the default number if you want to work with extremely very large numbers. Which is always not necessary.***


<h2 id="addZero">⚙6.15 Add Zero</h2>

Adds the word zero "صفر" for numbers below one (1).

By default, numbers below zero (i.e. with only **Decimal Parts**) will have their **Decimal Parts** only converted to text.

**Applicability**
- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.


***Examples in the Numbers Mode:***
```javascript
arqamAR.toWords(0.5);
arqamAR.toWords(0.01);
arqamAR.toWords(0.2);
arqamAR.toWords(0.5,{addZero:"on"});    // option on
arqamAR.toWords(0.01,{addZero:"on"});   // option on
arqamAR.toWords(0.2,{addZero:"on"});    // option on

// ===== Output =======
خمسة أجزاء من العشرة
جزء واحد من المائة
جزءان اثنان من العشرة
صفر، وخمسة أجزاء من العشرة     // option on 'صفر' added
صفر، وجزء واحد من المائة       // option on 'صفر' added
صفر، وجزءان اثنان من العشرة    // option on 'صفر' added
```

***Examples in the Currency Mode:***
```javascript
arqamAR.toWords(0.5, {code:"USD"});
arqamAR.toWords(0.01,{code:"USD"});
arqamAR.toWords(0.2, {code:"USD"});
arqamAR.toWords(0.5, {code:"USD", addZero:"on"});   // option on
arqamAR.toWords(0.01,{code:"USD", addZero:"on"});   // option on
arqamAR.toWords(0.2, {code:"USD", addZero:"on"});   // option on

// ===== Output =======
خمسون سنتًا أمريكيًا
سنت أمريكي واحد
عشرون سنتًا أمريكيًا
صفر دولار أمريكي، وخمسون سنتًا       // option on
صفر دولار أمريكي، وسنت واحد         // option on
صفر دولار أمريكي، وعشرون سنتًا       // option on
```

<h2 id="sepDecimal">⚙6.16 Decimal Separator</h2>

When options are used for displaying numbers in digits inside brackets, ***arqamAR*** uses the system locale setting for displaying the **Decimal Separator** by default.

You can use this option to change the charatrer for the **Decimal Separator** irrespective of the system locale.

The character may be any type or may be a BCP 47 language tag.

In the [Arabic Numbers Mode](#arabicNumbers), if no specific **Decimal Separator** is specified using this option, then the **Decimal Separator** is automatically set to `٫` (Unicode U+066B) by default.

**Applicability**
- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.


***Examples:***

`{sepDecimal : ""}`    : Default uses the system local as the Decimal Separator.

`{sepDecimal : ","}`   : Uses comma (,) as the Decimal Separator.

```javascript
// Examples
100,20
230,1
10,3
```

`{sepDecimal : "'"}`   : Uses apostrophe (') as the Decimal Separator.
```javascript
// Examples
100'20
230'1
10'3
```
`{sepDecimal : "•"}`   : Uses dot symbol (•) as the Decimal Separator.
```javascript
// Examples
100•20
230•1
10•3
```
`{sepDecimal : "en"}`  : Uses the BCP 47 language tag 'en' (English) as the Decimal Separator.
```javascript
// Examples
100.20
230.1
10.3
```
`{sepDecimal : "ar-sa"}`  : Uses the BCP 47 language tag 'ar-sa' (Arabic-Saudia) as the Decimal Separator.
```javascript
// Examples
100٫20
230٫1
10٫3
```

`{sepDecimal : "fr"}`  : Uses the BCP 47 language tag 'fr' (French) as the Decimal Separator.
```javascript
// Examples
100,20
230,1
10,3
```

⚠ Note 1: If the BCP 47 language tag is invalid, then the system locale setting is used.

⚠ Note 2: While it is possible to set both the Thousands Separator and the Decimal Separator to different BCP 47 language tags, it is recommended when using a BCP 47 language tag to use the same language tag for both the Thousands Separator and the Decimal Separator.

<h2 id="sepThousands">⚙6.17 Thousands Separator</h2>

When options are used for displaying numbers in digits inside brackets, ***arqamAR*** uses the system locale setting for displaying the **Thousand Separator** by default.

You can use this option to change the charatrer for the **Thousands Separator** irrespective of the system locale.

The character may be any type or may be a BCP 47 language tag.

In the [Arabic Numbers Mode](#arabicNumbers), if no specific **Thousands Separator** is specified using this option, then the **Thousands Separator** is automatically set to `٬` (Unicode U+066C) by default.

**Applicability**
- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.

💡 Note: The **Thousands Separator** only applies to how the output number is displayed. It does not apply to the input number. The input number's Thousands Separator is taken from the system locale.

***Examples:***

`{sepThousands : ""}`    : Default uses the system local as the Thousands Separator.

`{sepThousands : "."}`   : Uses dot (.) as the Thousands Separator.
```javascript
// Examples
123.456.000
3.500.001
```
`{sepThousands : "'"}`   : Uses apostrophe (') as the Thousands Separator.
```javascript
// Examples
123'456'000
3'500'001
```
`{sepThousands : " "}`   : Uses space as the Thousands Separator.
```javascript
// Examples
123 456 000
3 500 001
```
`{sepThousands : "•"}`   : Uses dot symbol (•) as the Thousands Separator.
```javascript
// Examples
123•456•000
3•500•001
```
`{sepThousands : "en"}`  : Uses the BCP 47 language tag 'en' as the Thousands Separator.
```javascript
// Examples
123,456,000
3,500,001
```
`{sepThousands : "ar-sa"}`  : Uses the BCP 47 language tag ''ar-sa' (Arabic-Saudia) as the Thousands Separator.
```javascript
// Examples
123٬456٬000
3٬500٬001
```
`{sepThousands : "fr"}`  : Uses the BCP 47 language tag 'fr' (French) as the Thousands Separator.
```javascript
// Examples
123 456 000
3 500 001
```
`{sepThousands : "de"}`  : Uses the BCP 47 language tag 'de' (German) as the Thousands Separator.
```javascript
// Examples
123.456.000
3.500.001
```

⚠ Note 1: If the BCP 47 language tag is invalid, then the system locale setting is used.

⚠ Note 2: While it is possible to set both the Thousands Separator and the Decimal Separator to different BCP 47 language tags, it is recommended when using a BCP 47 language tag to use the same language tag for both the Thousands Separator and the Decimal Separator.


<h2 id="brackets">⚙6.18 Brackets</h2>

The brackets option provides a flexible method for enclosing the **whole number** (*in digital form*) including its Decimal Part if any inside brackets.

No brackets are displayed by default.

The brackets may be at the end of the output text or at the start of the output text.

The default type of brackets is the round brackets "()". This may however be changed by the **[`bracketsOpen`](#bracketsOpen)** option and the **[`bracketsClose`](#bracketsClose)** to other forms of brackets or other characters.

When the `brackets` option is enabled, the following options are also available to format the number inside the brackets:

- [`bracketsType`](#bracketsType) change the opening and closing bracket characters.
- [`numSymbol`](#numSymbol) add the type of symbol or sign before or after the currency.

If only the Decimal Part needs to be placed inside brackets rather than the whole number then use the option [decInBrackets](#dec-in-brackets).

This option has priority and will override the [decInBrackets](#dec-in-brackets) option.


***Examples:***
```javascript
//----------------------------------------
// Examples with the `brackets` at the start
//----------------------------------------
arqamAR.config({ brackets: "start"}); // add brackets at the start

arqamAR.toWords(256);
arqamAR.toWords(2500);
arqamAR.toWords(120000);
arqamAR.toWords(256,"USD");
arqamAR.toWords(2500,"USD");
arqamAR.toWords(120000,"USD");
// ===== Output =======
مائتان وستة وخمسون ‎(256)
ألفان وخمسمائة ‎(2,500)
مائة وعشرون ألفًا ‎(120,000)
مائتان وستة وخمسون دولارًا أمريكيًا ‎(256.00 USD)
ألفان وخمسمائة دولار أمريكي ‎(2,500.00 USD)
مائة وعشرون ألف دولار أمريكي ‎(120,000.00 USD)
//----------------------------------------
// Examples with the `brackets` at the end
//----------------------------------------
arqamAR.config({ brackets: "end"}); // add brackets at the end

arqamAR.toWords(256);
arqamAR.toWords(2500);
arqamAR.toWords(120000);

// ===== Output =======
‎(256) مائتان وستة وخمسون
(2,500) ألفان وخمسمائة
(120,000) مائة وعشرون ألفًا
(USD 256.00) مائتان وستة وخمسون دولارًا أمريكيًا
(USD 2,500.00) ألفان وخمسمائة دولار أمريكي
(USD 120,000.00) مائة وعشرون ألف دولار أمريكي
```

<h2 id="bracketsType">⚙6.19 Brackets Type</h2>

Change the characters used with the **[`brackets`](#brackets)** option, and therefore is only available when the **[`brackets`](#brackets)** option is also enabled.

The default brackets type is the round brackets "()". This may be changed to (say) "[]" or "{}" or "<>" or any other characters.

The setting must contain 2 charaters (the opening type followed by closing type). For example: '[]', '{}', '<>', etc. An empty string sets the default '()' type. Any other characters may be used.

If only one charater is specified, it will be used for both the opening and closing characters.


***Examples:***
```javascript
arqamAR.config({ brackets: "end", bracketsType : "[]" }); // change brackets to square brackets

arqamAR.toWords(256);
arqamAR.toWords(256,"USD");

// ===== Output =======
[256] مائتان وستة وخمسون // brackets changed to square brackets
[USD 256.00] مائتان وستة وخمسون دولارًا أمريكيًا
```

<h2 id="numSymbol">⚙6.20 Number Symbol (رمز الرقم)</h2>

This option allows the Currency symbol or Currency sign, when using the **[`brackets`](#brackets)** option in the **[Currency Mode](#CurrencyMode)**, to be changed.

The default sign/symbol is the 3-letter ISO Code.

Available pre-programmed settings are:
- `"iso"` or `""` or `"i"`: display the 3-letter ISO Code (this is the Default).
- `"symbol"` or `"S"` or `"N"`, or `"symbolN"`: display the Native symbol for the Currency.
- `"symbolL"` or `"L"`: display the Latin symbol for the Currency.
- `"currency"` or `"C"`: display the currency name.

However, you can give any other string.

**Applicability**
- [x] This option is only available in the **[Currency Mode](#CurrencyMode)**.
- [x] This option is only available when using the **[`brackets`](#brackets)** option.


***Examples:***
```javascript
//-----------------------------------------------
// Examples of the default sign/symbol (ISO Code)
//-----------------------------------------------
arqamAR.config({ brackets: "end" }); // add brackets at the start

arqamAR.toWords(256,"USD");
arqamAR.toWords(2500,"KWD");
arqamAR.toWords(120000,"QAR");

// ===== Output =======
(USD 256.00) مائتان وستة وخمسون دولارًا أمريكيًا
(KWD 2,500.00) ألفان وخمسمائة دينار كويتي
(QAR 120,000.00) مائة وعشرون ألف ريال قطري
```
![Image](/images/numSymbol_01.png?raw=true)

```javascript
//----------------------------------------
// Examples of the Currency Native Symbol
//----------------------------------------
arqamAR.config({ brackets: "end" , numSymbol:"n" });  // native symbol

arqamAR.toWords(256,"USD");
arqamAR.toWords(2500,"KWD");
arqamAR.toWords(120000,"QAR");

// ===== Output =======
($ 256.00) مائتان وستة وخمسون دولارًا أمريكيًا
(2,500.000 د.ك.) ألفان وخمسمائة دينار كويتي
(120,000.00 ر.ق.) مائة وعشرون ألف ريال قطري
```
![Image](/images/numSymbol_02.png?raw=true)

```javascript
//----------------------------------------
// Examples of the Currency Latin Symbol
//----------------------------------------
arqamAR.config({ brackets: "end" , numSymbol:"L" });  // Latin symbol

arqamAR.toWords(256,"USD");
arqamAR.toWords(2500,"KWD");
arqamAR.toWords(120000,"QAR");

// ===== Output =======
($ 256.00) مائتان وستة وخمسون دولارًا أمريكيًا
(KD 2,500.000) ألفان وخمسمائة دينار كويتي
(QR 120,000.00) مائة وعشرون ألف ريال قطري
```
![Image](/images/numSymbol_03.png?raw=true)

```javascript
//----------------------------------------
// Examples of the Currency with Currency  Symbol
//----------------------------------------
arqamAR.config({ brackets: "end" , numSymbol:"L" });  // Currency Name as symbol

arqamAR.toWords(256,"USD");
arqamAR.toWords(2500,"KWD");
arqamAR.toWords(120000,"QAR");

// ===== Output =======
(256.00 دولار أمريكي) مائتان وستة وخمسون دولارًا أمريكيًا
(2,500.000 دينار كويتي) ألفان وخمسمائة دينار كويتي
(120,000.00 ريال قطري) مائة وعشرون ألف ريال قطري
```
![Image](/images/numSymbol_04.png?raw=true)

💡 ***When displaying Arabic text inside fields or html 'div's, set the text direction to Right-to-Left (RTL) for proper display especially when the text includes both Arabic and Latin characters.***

💡 ***If you copy the output text to an MS Excel cell, set the cell format display to Right-to-Left (RTL) using 'Format Cells, Alignment, Text direction: Right-to-Left***


<h2 id="decRound">⚙6.21 Decimal Rounding</h2>

The `decRound` option specifies the **number** of decimal places for upward rounding of the **Decimal Part** of the number.

Rounding **only affects the Decimal Part** of the number and will not affect or overflow to the Whole Part; this is intentional.

The default is "no rounding" and the entire digits of the **Decimal Part** of the number will be converted to text as they are.

Trailing zeros in a **Decimal Part** will not be converted to text. For example 0.12000 will be interpreted as 0.12 before conversion.

The default maximum number of decimal places is 10^1000 (جزء واحد من مائة دِيْوْتْرِيجِنْتاترِسِنْتِلْيون).

The maximum number of decimal places that can be converted by ***arqamAR*** is:

*  1 part of 100 نُوفِنوناجِنْتانونْجِنْتِلْيون   which is (1 part of 10^3002) under the Short Scale System, and
*  1 part of 100 نُوفِنوناجِنْتانونْجِنْتِلْيَارات which is (1 part of 10^6000) under the Long Scale System.


**Applicability**
- [x] This option is available in the **[Numbers Mode](#NumbersMode)** only.
- [x] In the **[Currency Mode](#CurrencyMode)**, the decimal part is automatically rounded to the currency sub-unit decimals (e.g. US Dollars to 2 decimal places, Kuwait Dinar to 3 decimal places).

**Notes:**
- [x] The default in this option is no rounding in the **[Numbers Mode](#NumbersMode)** and to sub-unit decimal in **[Currency Mode](#CurrencyMode)**.
- [x] The number of rounding digits can be up to the **[`maxNumber`](#maxNumber)**.


***Examples in Numbers Mode:***
```javascript
//--------------------------
// Examples using Numbers
//--------------------------
arqamAR.config({ decRound : 3  }); // round to 3 decimal places

arqamAR.toWords(22.1238);
arqamAR.toWords(22.3838);
arqamAR.toWords(22.9999);

// ===== Output =======
اثنان وعشرون، و‏مائة وأربعة وعشرون جزءًا من الألف
اثنان وعشرون، و‏ثلاثمائة وأربعة وثمانون جزءًا من الألف
اثنان وعشرون، و‏تسعمائة وتسعة وتسعون جزءًا من الألف // note the whole number is not affected

//------------------------------------------------------------------
// Examples using Numbers in 'compact' mode for better understanding
//------------------------------------------------------------------
arqamAR.config({compact: "on" }); // round to 3 decimal places with compact mode

arqamAR.toWords(22.1238);
arqamAR.toWords(22.3838);
arqamAR.toWords(22.9999);

// ===== Output =======
‏22، و‏124 جزءًا من الـ1,000
‏22، و‏384 جزءًا من الـ1,000
‏22، و‏999 جزءًا من الـ1,000     // note the whole number is not affected

```

***Example in Currency Mode:***
```javascript
//--------------------------
// Examples using Currencies
//--------------------------
arqamAR.config({ decRound : 3, compact: "on"}); // round to 3 decimal places with compact mode

arqamAR.toWords(22.1238, "USD");
arqamAR.toWords(22.3838, "USD");
arqamAR.toWords(22.9999, "USD");

// ===== Output =======
‏22 دولارًا أمريكيًا، و‏12 سنتًا
‏22 دولارًا أمريكيًا، و‏38 سنتًا
‏22 دولارًا أمريكيًا، و‏99 سنتًا   // whole number not affected
```

💡 The above is another example that shows how you can combine configuration options using the `arqamAR.config()` and using the `arqamAR.toWords()`.


<h2 id="decFormat">⚙6.22 Decimal Formats (تنسيقات الكسور)</h2>

This option controls the text formatting of the **Decimal Part** of the number in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.

There are a total of nine (9) options of display and can be combined with other options.

The following table provides a summary of the `decFormat` settings in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)** with an example for the number **1.25** in numbers and USD currency.

| decFormat|**[Numbers Mode](#NumbersMode)** (example number 1.25) |**[Currency Mode](#CurrencyMode)** (example number 1.25)
|:---------|:-----------|:-----
|"" empty  |واحد، **و**‏خمسة وعشرون جزءًا من المائة|دولار أمريكي واحد، **و**خمسة وعشرون سنتًا
|ww        |واحد، **و**‏خمسة وعشرون جزءًا من المائة|دولار أمريكي واحد، **و**‏خمسة وعشرون جزءًا من المائة دولار
|wn        |واحد، **و**‏خمسة وعشرون جزءًا من الـ100|دولار أمريكي واحد، **و**‏خمسة وعشرون جزءًا من الـ100 دولار
|nw        |واحد، **و**‏25 جزءًا من المائة|دولار أمريكي واحد، **و**25 جزءًا من المائة دولار
|nn        |واحد، **و**25 جزءًا من الـ100|دولار أمريكي واحد، **و**25 جزءًا من الـ100 دولار
|sw        |واحد، فاصلة اثنان، خمسة|دولار أمريكي واحد، **و**خمسة وعشرون سنتًا
|n         |واحد، فاصلة 25|دولار أمريكي واحد، **و**25 سنتًا
|d         |واحد، **و**0.25|دولار أمريكي واحد، **و**0.25 دولار
|/         |واحد، **و**25/100|دولار أمريكي واحد، **و**25/100 دولار
|w         |واحد، فاصلة خمسة وعشرون|دولار أمريكي واحد، **و**خمسة وعشرون سنتًا

#### Notes

***Note 1***: The word **'و'** can be changed to the word **'فاصلة'** using the option **[{decFaslah : 'on'}](#decFaslah)**.

***Note 2***: The word **'الـ'** can be removed using the option **[{decAL : "off"}](#decAL)**.

***Note 3***: The word **'جزءًا من'** can be removed using the option **[{decJuz : "off"}](#decJuz)**.

***Note 4***: Use the Right-to-Left (RTL) direction in your display code when displaying combined Arabic and English words.

***Note 5***: The settings **'sw**', **'n'**, and **'w'** settings in the **[Numbers Mode](#NumbersMode)** automatically enable the **[{decFaslah : 'on'}](#decFaslah)** '**فاصلة**' option.

***Note 6***: The **'sw'** setting is not available in the **[Currency Mode](#CurrencyMode)**. If used, it will default to the **'w'** setting.

***Note 7***: The **'n'** setting is the default setting with the **[compact](#compact)** option in the **[Currency Mode](#CurrencyMode)**.

***Note 8***: The **'nn'** setting is the default setting with the **[compact](#compact)** option in the **[Numbers Mode](#NumbersMode)**.

The following illustration summarises the **`decFormat`** settings with an example number:

![Image](/images/decFormatSummary.png?raw=true)



<h2 id="decInBrackets">⚙6.23 Decimals in Brackets (كسور بين قوسين)</h2>

**Purpose**

Permits the **Decimal Part** of the Number to be distinguished from the Whole Part. The Decimal Part could be the sub-unit of a currency.

**Output**

The **Decimal Part** of the Number (if any) will be enclosed in brackets (by default the round brackets)  at the **end** of the output text.

If there is a Whole Number preceding the Decimal Part, **a comma is inserted in between the two (2) parts**.

The entire **Decimal Part** including the way it is formatted using the [`decFormat`](#decFormat) will be placed inside brackets.

If you only need to have the Decimal Part of the number inside brackets then use the **[{decInBrackets: 'on'}](#decInBrackets)** option rather than this option

The type of brackets can be changed using the [`bracketsOpen`](#bracketsOpen) and [`bracketsClose`](#bracketsClose) options.

**Applicability**

- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.
- [x] This option only applies if there is a **Decimal Part** in the number.
- [x] This option has no effect if the number is only decimal number (i.e. number below 1), unless the option **addZero** is also enabled.

***Examples:***

```javascript
arqamAR.config( {decInBrackets:"on"} );

// Example with Numbers only
arqamAR.toWords(113.13);
مائة وثلاثة عشر، (‏و‏ثلاثة عشر جزءًا من المائة)‏

// Example with Currency
arqamAR.toWords(2000.2,"LBP");
ألفا ليرة لبنانية، و(‏عشرون قرشًا)

// Example A fraction only Number will not be placed in brackets except in addZero option
arqamAR.toWords(0.13);
ثلاثة عشر جزءًا من المائة

// Example A fraction only Number will not be placed in brackets except in addZero option
arqamAR.toWords(0.5,"OMR");
خمسمائة بيسة عمانية

// examples with only decimal numbers but using the "addZero" option
arqamAR.config( {decInBrackets:"on", addZero :" on"} );
arqamAR.toWords(0.13);
صفر، (‏و‏ثلاثة عشر جزءًا من المائة)‏

arqamAR.toWords(0.5,"OMR");
صفر ريال عماني، و(‏خمسمائة بيسة)‏
```


<h2 id="decJuz">⚙6.24 Decimal Juzu ("كلمة "جزءًا من)</h2>

In the formation of the **Decimal Part** of the number, the words **'جزءًا من'** is used by default for certain Decimal Formats using the **[{decFormat}](#decFormat)** option.

With this option, the words **'جزءًا من'** can be ignored (removed) by using the `{decJuz: "off"}` or `{decJuz: ""}`.

***Examples in the default {decJuz: "on"}:***
```javascript
arqamAR.toWords(22.1);
arqamAR.toWords(22.2);
arqamAR.toWords(22.3);
arqamAR.toWords(22.238);

//======= Output ========
اثنان وعشرون، وجزء واحد من العشرة
اثنان وعشرون، وجزءان اثنان من العشرة
اثنان وعشرون، وثلاثة أجزاء من العشرة
اثنان وعشرون، ومائتان وثمانية وثلاثون جزءًا من الألف
```
***Examples with {decJuz: "off"}:***
```javascript
arqamAR.config( {decJuz:"off"} );

arqamAR.toWords(22.1);
arqamAR.toWords(22.2);
arqamAR.toWords(22.3);
arqamAR.toWords(22.238);

//======= Output ========
اثنان وعشرون، وواحد من العشرة
اثنان وعشرون، واثنان من العشرة
اثنان وعشرون، وثلاثة من العشرة
اثنان وعشرون، ومائتان وثمانية وثلاثون من الألف
```

<h2 id="decFaslah">⚙6.25 Decimal Fasilah (فاصلة عوضًا عن الواو)</h2>

When displaying a **Decimal Part** with a **Whole Part**, mostly the joining word is the letter "**و**". For example:

واحد، **و**‏خمسة وعشرون جزءًا من المائة

This can be changed with the option **`{decFaslah : "on"}`**, and the output becomes:

واحد، **فاصلة** ‏خمسة وعشرون جزءًا من المائة

In the  **[Numbers Mode](#NumbersMode)**, this option is available with all **[`decFormat`](#decFormat)** settings.

In the **[Currency Mode](#CurrencyMode)**, this option is available with all **[`decFormat`](#decFormat)** settings, except the '**w**' setting.

See above the **[`decFormat`](#decFormat)** option for more details.



<h2 id="decIgnore">⚙6.26 Ignore Decimals</h2>

The **Decimal Part** of a number (and the Sub-Unit of a Currency Value) is not displayed in the output text and is completely ignore.

- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.

***Examples with the option {decIgnore: "on"}:***
```javascript
arqamAR.config( {decIgnore:"on"} );

arqamAR.toWords(22.01);
arqamAR.toWords(145.32);
arqamAR.toWords(22.01,"QAR");
arqamAR.toWords(145.32,"BHD");

// ========= Output ==========
// The Decimal Part is ignored
//============================
اثنان وعشرون
مائة وخمسة وأربعون
اثنان وعشرون ريالًا قطريًا
مائة وخمسة وأربعون دينارًا بحرينيًا
```

<h2 id="decAL">⚙6.27 Decimal AL (لام تعريف الكسر)</h2>

This option enables or disables the use of the word '**الـ**' as used in the formatting of the **Decimal Part** with the **[{decFormat}](#decFormat)** option when using the '**ww**', '**wn**', '**nw**', and '**nn**' settings.

The default is with the **`{decAL: 'on'}`**

- [x] This option is available in both the **[Numbers Mode](#NumbersMode)** and the **[Currency Mode](#CurrencyMode)**.
- [x] This option is only used with the **Decimal Part**.

***Examples in the default {decAL: "on"}:***
```javascript
arqamAR.toWords(22.1);
arqamAR.toWords(22.2);
arqamAR.toWords(22.3);
arqamAR.toWords(22.238);

//======= Output ========
اثنان وعشرون، وجزء واحد من العشرة
اثنان وعشرون، وجزءان اثنان من العشرة
اثنان وعشرون، وثلاثة أجزاء من العشرة
اثنان وعشرون، ومائتان وثمانية وثلاثون جزءًا من الألف
```
***Examples with {decAL: "off"}:***
```javascript
arqamAR.config( {decAL:"off"} );

arqamAR.toWords(22.1);
arqamAR.toWords(22.2);
arqamAR.toWords(22.3);
arqamAR.toWords(22.238);

//======= Output ========
اثنان وعشرون، وجزء واحد من عشرة
اثنان وعشرون، وجزءان اثنان من عشرة
اثنان وعشرون، وثلاثة أجزاء من عشرة
اثنان وعشرون، ومائتان وثمانية وثلاثون جزءًا من ألف
```



<h2 id="ignoreCountry">⚙6.28 Ignore Country (تجاهل اسم البد)</h2>

In the **[Currency Mode](#CurrencyMode)**, this option permits the output text to be displayed **without the Country Name** but keeps the Currency Name.

- [x] This option is only available in the **[Currency Mode](#CurrencyMode)**.


***Examples in the option {ignoreCountry: "on"}:***
```javascript
arqamAR.config( {ignoreCountry:"on"} );

arqamAR.toWords(22.01,"QAR");
arqamAR.toWords(2000.01,"USD");
arqamAR.toWords(145.32,"BHD");

// ========= Output ==========
// The Country name is ignored
//============================
اثنان وعشرون ريالًا، ودرهم واحد
ألفا دولار، وسنت واحد
مائة وخمسة وأربعون دينارًا، واثنان وثلاثون فلسًا
```
![Image](/images/example_ignoreCountry.png?raw=true)

<h2 id="currDecForce">⚙6.29 Force Decimals in Currency</h2>

This option is only available in the Currency Mode with brackets option.

The currency value by default is always displayed with the decimal part even if the decimal part is zero.
For example:

‎(USD 2,000.00) ألفا دولار أمريكي

With this option set to 'off' (`{currDecForce: "off"}`), the Decimal Part is not displayed if zero. The output will become.

‎(USD 2,000) ألفا دولار أمريكي

- [x] This option is only available in the **[Currency Mode](#CurrencyMode)**.
- [x] This option is only used with the **[brackets](#brackets) option**.


<h2 id="prefix">⚙6.30 Prefix Text</h2>

Adds a prefix text to the outputted string.


<h2 id="suffix">⚙6.31 Suffix Text</h2>

Adds a suffix text to the outputted string.


<h2 id="isNaNString">⚙6.32 IsNaN String</h2>

The string to be returned if the number passed is not a valid number.

The default is an empty '' string.

This may be changed to any other string.

***Examples***
```javascript
arqamAR.config( {isNaN:"ليس رقمًا"} );

arqamAR.toWords('');
arqamAR.toWords('text');

// ========= Output ==========
ليس رقمًا
ليس رقمًا
```


<h2 id="batch">7️⃣ Batch Processing</h2>

The batch process mode allows the processing of multiple numbers at the same time and can be used by passing an **array of numbers** in place of a single number.

The output will be an array containing the text for each number.

***Example 1 with Numbers***

```javascript
arqamAR.toWords([22,777,1000,2000,3300,2500]);

// ========= Output ==========
[
  'اثنان وعشرون',
  'سبعمائة وسبعة وسبعون',
  'ألف',
  'ألفان',
  'ثلاثة آلاف وثلاثمائة',
  'ألفان وخمسمائة'
]
```

***Example 2 with Currency***

```javascript
arqamAR.toWords([22,777,1000,2000,3300,2500,0.55,1.6],"DZD");

// ========= Output ==========
[
  'اثنان وعشرون دينارًا جزائريًا',
  'سبعمائة وسبعة وسبعون دينارًا جزائريًا',
  'ألف دينار جزائري',
  'ألفا دينار جزائري',
  'ثلاثة آلاف وثلاثمائة دينار جزائري',
  'ألفان وخمسمائة دينار جزائري',
  'ألفان وخمسمائة دينار جزائري وخمسة وخمسون سنتيمًا جزائريًا',
  'دينار جزائري واحد، وستون سنتيمًا'
]
```


<h2 id="modify">8️⃣ Modify Existing Currency</h2>

You can modify an existing currency attributes and therefore adjusting or correcting such attributes as necessary.

Each Currency (or Subject) has **19** attributes; any of can be changed.

The following attributes are applicable in both the **[Currency Mode](#CurrencyMode)** and the **[Subjects Mode](#subjectsMode)**.

**currDecimal**    : The currency or subject minor sub-unit decimal places (normally 2 or 3).

***Standard Currency Attributes:***

**majorSingle**    : **Major** currency or subject name (**singular**) e.g. 'دينار' 'ريال' 'دولار'

**majorSingleC**   : **Major** currency country name or adjective/demonym (**singuar**). e.g. 'كويتي' 'أمريكي' 'قطري'

**majorPlural**    : **Major** currency or subject name (**plural**) e.g. 'دنانير' 'ريالات' 'دولارات'

**majorPluralC**   : **Major** currency country name or adjective/demonym (**plural**). e.g. 'كويتية' 'أمريكية' 'قطرية'

**majorGender**    : **Major** currency or subject Gender; 0 for male gender and 1 for female gender.

**minorSingle**    : **Minor** currency or subject name (**singular**) e.g. 'فلس' 'درهم' 'سنت'

**minorSingleC**   : **Minor** currency country name or adjective/demonym (**singuar**). e.g. 'كويتي' 'أمريكي' 'قطري'

**minorPlural**    : **Minor** currency or subject name (**plural**) e.g. 'فلوس' 'دراهم' 'سنتات'

**minorPluralC**   : **Minor** currency country name or adjective/demonym (**plural**). e.g. 'كويتية' 'أمريكية' 'قطرية'

**minorGender**    : **Minor** currency or subject Gender; 0 for male gender and 1 for female gender.

***Tashkeel Currency Attributes:*** These are **Optional**

**majorSingleT**   : Major currency name (singular) Tashkeel. e.g. 'دِينَار' 'رِيَال' 'دُولار'

**majorSingleCT**  : Major currency country name (singuar) adjective/demonym Tashkeel. e.g. 'كُوَيتِيّ' 'أمْريكِيّ' 'قَطَرِيّ'

**majorPluralT**   : Major currency name (plural) Tashkeel. e.g. 'دَنَانَيرٍ' 'رِيَالاتٍ' 'دُولاراتٍ'

**majorPluralCT**  : Major currency country name (plural) adjective/demonym Tashkeel. e.g. 'كُوَيتِيَّةٍ' 'أمْريكِيَّةٍ' 'قَطَرِيَّةٍ'

**minorSingleT**   : Major currency name (singular) Tashkeel. e.g. 'فِلْس' 'دِرْهَم' 'سِنْت'

**minorSingleCT**  : Major currency country name (singuar) adjective/demonym Tashkeel. e.g. 'كُوَيتِيّ' 'أمْريكِيّ' 'قَطَرِيّ'

**minorPluralT**   : Major currency name (plural) Tashkeel. e.g. 'فُلُوسٍ' 'دَرَاهمٍ' 'سِنْتَاتٍ'

**minorPluralCT**  : Major currency country name (plural) adjective/demonym Tashkeel. e.g. 'كُوَيتِيَّةٍ' 'أمْريكِيَّةٍ' 'قَطَرِيَّةٍ'

⚠ Note 1: The singular forms for the minor and major (both currency (Subject) and country name (Adjective/demonym)) should not have any Tanween for the last character. This will be added by ***arqamAR*** depending on the word position. The other attribute entries must have Tanween Kasr for the last character.

⚠ Note 2: It is not essential to create the Tashkeel forms of the entries as the normal ones will be used by default.

***Example 1 Changing the USD Currency Major Name***

```javascript
arqamAR.config( {
    code        : "USD",
    majorSingle : "جنيه",
    });

arqamAR.toWords(22.5);
arqamAR.toWords(100);
arqamAR.toWords(3);

// ========= Output ==========
اثنان وعشرون جنيهًا أمريكيًا، وخمسون سنتًا
مائة جنيه أمريكي
ثلاثة دولارات أمريكية
```

⚠ Notice here that only the currency major singular name was changed and all other attributes remain unchanged. Normally if you want to change an attribute you need to change all its forms (i.e. in singular and plural including tashkeel forms)

A proper way to do that is as follows:

***Example 2***

```javascript
arqamAR.config( {
    code        : "USD",
    majorSingle : "جنيه",
    majorPlural : "جنيهات",
    });

arqamAR.toWords(22.5);
arqamAR.toWords(100);
arqamAR.toWords(3);

// ========= Output ==========
اثنان وعشرون جنيهًا أمريكيًا، وخمسون سنتًا
مائة جنيه أمريكي
ثلاثة جنيهات أمريكية
```

<h2 id="createNew">9️⃣ Create New Currency</h2>

If the existing 172 currencies provide by ***arqamAR*** are not enough and you want to create an all new currency you will need, as minimum, to provide three (3) settings:

1. A new code to replace the ISO code. (this can be a 2 character word or any ISO code but in lower case).
2. The currency name Singular (`majorSingle` string).
3. The currency name Plural (`majorPlural` string).
4. It is good to provide the name of the minor units (`minorSingle` and `minorPlural`) to avoid ***arqamAR*** switching to the `decJuz` mode and displaying the Decimal Parts as: **'جزء من'**.
5. If you do not provide the `currDecimal`, it will be assumed as 2 (i.e. there are 100 minor units in one major unit).
6. If you want to attach it to any particular country, then you can add the (`minorSingleC` and `minorPluralC`) setting; otherwise no country name will be shown.


***Example 1***

Let us create a New Currency called 'سحتوت' that belongs to Egypt and has a sub-unit (minor) called 'مليم' with 3 decimal places.

```javascript
arqamAR.config( {
    code         : "EGS",      // a new non-ISO code (can be anything)
    majorSingle  : "سحتوت",
    majorSingleC : "مصري",
    majorPlural  : "سحاتيت",
    majorPluralC : "مصرية",

    minorSingle  : "مليم",
    minorSingleC : "مصري",
    minorPlural  : "ملاليم",
    minorPluralC : "مصرية",

    currDecimal  : 3,           // 1000 مليم in 1 سحتوت
    });

arqamAR.toWords(22.5);
arqamAR.toWords(100);
arqamAR.toWords(3);

// ========= Output ==========
اثنان وعشرون سحتوتًا مصريًا، وخمسمائة مليم
مائة سحتوت مصري
ثلاثة سحاتيت مصرية
```

⚠ Note: ***arqamAR*** enters the **New Currency Mode** if 3 attributes are provided (i.e. not empty): `majorSingle`, `majorPlural`, and `code`. To get out of the New Currency Mode, set the `majorSingle` and `majorPlural` to empty strings.

⚠ Note: The Tashkeel attributes are optional; if not stated, the standard names are used in the Tashkeel Option.


***Example 2***

Let us now create a New Currency called 'نكلة' that belongs to "تركيا" and has a sub-unit (minor) called 'بقشة' with 2 decimal places. We also enable the **[Brackets Mode](#brackets)** to show the number and code.

```javascript
arqamAR.config( {
    code         : "NKL",      // a new non-ISO code (can be anything)
    majorSingle  : "نكلة",
    majorSingleC : "تركية",
    majorPlural  : "نكلات",
    majorPluralC : "تركية",
    majorGender  : 1,          // indicate Female Currency

    minorSingle  : "بقشة",
    minorSingleC : "تركية",
    minorPlural  : "بقشات",
    minorPluralC : "تركية",
    minorGender  : 1,          // indicate Female sub-Currency

    brackets :"end",           // enable Brackets Mode

    currDecimal  : 2,           // 100 بقشة in 1 نكلة
    });

console.log( arqamAR.toWords(22.5) );
console.log( arqamAR.toWords(100) );
console.log( arqamAR.toWords(3) );
console.log( arqamAR.toWords(0.1) );

// ========= Output ==========
(22.50 NKL) اثنتان وعشرون نكلةً تركيةً، وخمسون بقشةً
(100.00 NKL) مائة نكلة تركية
(3.00 NKL) ثلاث نكلات تركية
(0.10 NKL) عشر بقشات تركية‎
```


***Example 3***

This example shows how you can create an all new currency using an existing currency data as a shortcut.

Let us create the old French currency 'Franc' (old iso code FRF) and it had the sub-unit 'Centime'.

There are few countries that still use the Franc and Centime, one of them Guinea in west Africa.

Guinean Franc has the iso code 'GNF' which we can use and modify.

But in the Brackets Mode, the code will be shown as 'GNF' not as 'FRF'. We can fix that with the option `numSymbol`


```javascript
arqamAR.config( {
arqamAR.config( {
    code         : "GNF",      //use Guinea iso code
    majorSingleC : "فرنسي",   // change demonym (adjectives) for Single to France
    majorPluralC : "فرنسية",  // change demonym (adjectives) for Plural to France

    minorSingleC : "فرنسي",   // do the same for the sub-unit
    minorPluralC : "فرنسية",

    numSymbol    : "FRF",     // use France old ISO code
    brackets     :"end",      // enale Brackets Mode to show the the code

    });
    });

console.log( arqamAR.toWords(22.5) );
console.log( arqamAR.toWords(100) );
console.log( arqamAR.toWords(3) );
console.log( arqamAR.toWords(0.1) );

// ========= Output ==========
(22.50 FRF) اثنان وعشرون فرنكًا فرنسيًا، وخمسون سنتيمًا ‎
(100.00 FRF) مائة فرنك فرنسي ‎
(3.00 FRF) ثلاثة فرنكات فرنسية ‎
‎(0.10 FRF) عشرة سنتيمات فرنسية
```




<h2 id="subjectsMode">🔟 Use Other Subjects (the Subjects Mode)</h2>

Like creating a new currency, you can create other subjects to be counted. In this case you may not need to state the country name adjective (demonym).

To enter the **Subjects Mode** you need to set the `code` option to the word 'sub' **`{code : 'sub'}`**.


Let us create a subject kilometer 'كيلومتر' with the minor unit meter 'متر':

***Example 1 Subject with a Sub-Subject***

```javascript
arqamAR.config( {
    code        : "sub",      // use the 'Subjects Mode'
    majorSingle : "كيلومتر",
    majorPlural : "كيلومترات",

    minorSingle : "متر",
    minorPlural : "أمتار",

    currDecimal : 3,           //1000 meter in 1 kilometer
    });

arqamAR.toWords(22.5);
arqamAR.toWords(100);
arqamAR.toWords(3);
arqamAR.toWords(0.25);

// ========= Output ==========
اثنان وعشرون كيلومترًا، وخمسمائة متر
مائة كيلومتر
ثلاثة كيلومترات
مائتان وخمسون مترًا
```

Let us now create a subject that has no sub-subject like Degree 'درجة' :

***Example 2 Subject without a Sub-Subject***

```javascript
arqamAR.config( {
    code        : "sub",      // use the 'Subjects Mode'
    majorSingle : "درجة",
    majorPlural : "درجات",
    });

arqamAR.toWords(22.5);
arqamAR.toWords(100);
arqamAR.toWords(3);
arqamAR.toWords(0.25);

// ========= Output ==========
اثنان وعشرون درجةً، وخمسون جزءًا من المائة درجة
مائة درجة
ثلاثة درجات
خمسة وعشرون جزءًا من المائة درجة
```

⚠ **Note above that because there is no minor unit provided, the words *"جزءًا"* is used for the decimal parts of the number.**


Let us now create a subject that has no sub-subject by has an adjective (demonym) like Degree 'درجة مئوية' :

***Example 3 Subject without a Sub-Subject by with an adjective***

```javascript
arqamAR.config( {
    code        : "sub",      // use the 'Subjects Mode'
    majorSingle : "درجة",
    majorSingleC: "مئوية",
    majorPlural : "درجات",
    majorPluralC: "مئوية",
    });

arqamAR.toWords(22.5);
arqamAR.toWords(100);
arqamAR.toWords(3);
arqamAR.toWords(0.25);

// ========= Output ==========
اثنان وعشرون درجةً مئويةً، وخمسون جزءًا من المائة درجة مئوية
مائة درجة مئوية
ثلاثة درجات مئوية
خمسة وعشرون جزءًا من المائة درجة
```

⚠ **Note here that unlike in the Currency Mode, the words "مئوية" is also repeated for the Decimal Part.**

Let us now create a compounded subject like **Kilometer per Hour** **'كيلومتر في الساعة'**.

We also add to it **Meter per Hour 'متر في الساعة'** as a sub-subject (or its minor unit).

***Example 4 Compund Subject***

```javascript
arqamAR.config( {
    code        : "sub",      // use the 'Subjects Mode'
    majorSingle : "كيلومتر",
    majorSingleC: "في الساعة",
    majorPlural : "كيلومترات",
    majorPluralC: "في الساعة",

    minorSingle : "متر",
    minorSingleC: "في الساعة",
    minorPlural : "أمتار",
    minorPluralC: "في الساعة",

    currDecimal  : 3,           // 1000 meter in 1 kilometer
    decSubInParts: "on"        // see note below on this setting
    });

arqamAR.toWords(1);
arqamAR.toWords(2);
arqamAR.toWords(1.5);
arqamAR.toWords(3);
arqamAR.toWords(100);
arqamAR.toWords(0.25);

// ========= Output ==========
كيلومتر واحد في الساعة
كيلومتران اثنان في الساعة
كيلومتر واحد في الساعة، وخمسمائة متر في الساعة
ثلاثة كيلومترات في الساعة
مائة كيلومتر في الساعة
مائتان وخمسون مترًا في الساعة
```

⚠ Note 1: If the adjective (demonym) part of the subject is a compounded sentence such as 'per second' 'في الثانية' or per hour 'في الساعة', etc. then enable the option `{decSubInParts : "on"}` for a propr orienttion of the output text. However, ***arqamAR*** will automatically detect the presence of the words "في ال" in the `{majorSingleC}` and will use it in the `{majorPluralC}` setting, and will automatically set the `{decSubInParts : "on"}` option.

⚠ Note 2: Remember when using subjects like Square Kilometer 'كيلومتر مربع' or Square Meter 'متر مربع' that the decimal part should be correctly set.

1 Sqaure Kilometer = 1,000 x 1,000 = 1,000,000 Square Meter, so the deciaml should be set to 6 (not 3)!

Likewise, 1 Square Meter = 100 x 100 = 10,000 Square Centemeter, so the decimal should be set to 4 (not 2)!


***Example 4 with Square Meter***

```javascript
arqamAR.config( {
    code        : "sub",      // use the 'Subjects Mode'
    majorSingle : "متر",
    majorSingleC: "مربع",
    majorPlural : "أمتار",
    majorPluralC: "مربعة",

    minorSingle : "سنتيمتر",
    minorSingleC: "مربع",
    minorPlural : "سنتيمترات",
    minorPluralC: "مربعة",

    currDecimal : 4,            // note decimal is 4 not 2
    });

arqamAR.toWords(1);
arqamAR.toWords(2);
arqamAR.toWords(1.5);
arqamAR.toWords(3);
arqamAR.toWords(100);
arqamAR.toWords(0.25);

// ========= Output ==========
متر مربع واحد
متران مربعان اثنان
متر مربع واحد، وخمسة آلاف سنتيمتر مربع   // note 5000 cm2
ثلاثة أمتار مربعة
مائة متر مربع
ألفان وخمسمائة سنتيمتر مربع             // note 2500 cm2
```



***Example 45 with Kilomgram using the Symbol and Brackets Mode***

In this example we create the Subject **'Kilogram'** and sub-Subject **'Gram'** and also add the option to enable the **[Brackets Mode](#brackets)** and add the symbol **'كغ'**.

```javascript
arqamAR.config( {
    code        : "sub",           // use the 'Subjects Mode'
    majorSingle : "كيلوغرام",
    majorSingleC: "",
    majorPlural : "كيلوغرامات",
    majorPluralC: "",

    minorSingle : "غرام",
    minorSingleC: "",
    minorPlural : "غرامات",
    minorPluralC: "",

    brackets     :"end",        // use the Brackets Mode
    numSymbol    :"كغ",         // use the symbol "كغ" inside the brackets
    currDecimal  : 3,           // 1000 gram in 1 kilogram
    });

console.log(arqamAR.toWords(1));
console.log(arqamAR.toWords(2));
console.log(arqamAR.toWords(1.5));
console.log(arqamAR.toWords(3));
console.log(arqamAR.toWords(100));
console.log(arqamAR.toWords(0.25));

// ========= Output ==========
(كغ 1) كيلوغرام واحد
(2 كغ) كيلوغرامان اثنان
‎(1.500 كغ) كيلوغرام واحد ، وخمسمائة غرام
(3 كغ) ثلاثة كيلوغرامات
‎(100 كغ) مائة كيلوغرام
(0.250 كغ) مائتان وخمسون غرامًا
```

⚠ Note: The position of the symbol word "كغ" and the number will not show correctly here as Github using the Markdown language does not allow right-to-left text direction. The following image illustrates the output better.

![Image](/images/subject01.png?raw=true)
