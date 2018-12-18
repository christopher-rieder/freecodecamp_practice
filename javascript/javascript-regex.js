// javascript - Regular Expressions section

// REGULAR EXPRESSIONS: USING THE TEST METHOD
// search '/word/' and returns true if the word is found
{
  let myString = 'Hello, World!';
  let myRegex = /Hello/;
  let result = myRegex.test(myString); // Change this line
  console.log(myRegex, result);
  // true
}

// REGULAR EXPRESSIONS: MATCH LITERAL STRINGS
// By default the regex is case sensitive
{
  let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
  let waldoRegex = /Waldo/; // Change this line
  let result = waldoRegex.test(waldoIsHiding);
  console.log(waldoRegex, result);
  // true
}

// REGULAR EXPRESSIONS: MATCH A LITERAL STRING WITH DIFFERENT POSSIBILITIES
// A regex can contain multiple patterns
{
  let petString = 'James has a pet cat.';
  let petRegex = /dog|cat|bird|fish/; // Change this line
  let result = petRegex.test(petString);
  console.log(petRegex, result);
  // true
}

// REGULAR EXPRESSIONS: IGNORE CASE WHILE MATCHING
// 'i' flag makes the regex case insensitive
{
  let myString = 'freeCodeCamp';
  let fccRegex = /freeCodeCamp/i; // Change this line
  let result = fccRegex.test(myString);
  console.log(fccRegex, result);
  // true
}

// REGULAR EXPRESSIONS: EXTRACT MATCHES
// match() extract words from a string.
// returns an array with the word, the index, and the original input
{
  let extractStr = "Extract the word 'coding' from this string.";
  let codingRegex = /coding/; // Change this line
  let result = extractStr.match(codingRegex); // Change this line
  console.log(codingRegex, result);
  // [ 'coding', index: 18, input: 'Extract the word \'coding\' from this string.' ]
}

// REGULAR EXPRESSIONS: FIND MORE THAN THE FIRST MATCH
// extract multiple matches with 'g' flag
// also, use 'i' flag to make the regex case insensitive
{
  let twinkleStar = 'Twinkle, twinkle, little star';
  let starRegex = /twinkle/gi; // Change this line
  let result = twinkleStar.match(starRegex); // Change this line
  console.log(starRegex, result);
  // [ 'Twinkle', 'twinkle' ]
}

// REGULAR EXPRESSIONS: MATCH ANYTHING WITH WILDCARD PERIOD
// /word/ is a literal, it has to match all characters
// . is a one character wildcard
// so /.ord/ can match word, cord, ford...
{
  let exampleStr = "Let's have fun with regular expressions!";
  let unRegex = /.un/; // Change this line
  let result = unRegex.test(exampleStr);
  console.log(unRegex, result);
  // true
}

// REGULAR EXPRESSIONS: MATCH SINGLE CHARACTER WITH MULTIPLE POSSIBILITIES
// character classes: group of characters to match, inside square brackets []
// /b[aiu]g/ will match bag big bug; but no beg or bog.
{
  let quoteSample = 'Beware of bugs in the above code; I have only proved it correct, not tried it.';
  let vowelRegex = /[aeiou]/gi; // Change this line
  let result = quoteSample.match(vowelRegex); // Change this line
  console.log(vowelRegex, result.join(''));
  // 'eaeouieaoeoeIaeooeioeoiei'
}

// REGULAR EXPRESSIONS: MATCH LETTERS OF THE ALPHABET
// character sets are builtin character classes
// [a-e], a trough e, alphabetically. so abcde
// note the '[]'; the set must be wrapped in square brackets
{
  let quoteSample = 'The quick brown fox jumps over the lazy dog.';
  let alphabetRegex = /[a-z]/gi; // Change this line
  let result = quoteSample.match(alphabetRegex); // Change this line
  console.log(alphabetRegex, result.join(''));
  // 'Thequickbrownfoxjumpsoverthelazydog'
}

// REGULAR EXPRESSIONS: MATCH NUMBERS AND LETTERS OF THE ALPHABET
// there can be multiple character sets or classes in square brackets
// they will match exactly one character with all the possible matches
// [h-s2-6] will match hijklmnopqrs23456
{
  let quoteSample = 'Blueberry 3.141592653s are delicious.';
  let myRegex = /[h-s2-6]/gi; // Change this line
  let result = quoteSample.match(myRegex); // Change this line
  console.log(myRegex, result.join(''));
  // 'lrr3452653srliios'
}

// REGULAR EXPRESSIONS: MATCH SINGLE CHARACTERS NOT SPECIFIED
// negated character sets, with the '^' character
{
  let quoteSample = '3 blind mice.';
  let myRegex = /[^aeiou0-9]/gi; // Change this line
  let result = quoteSample.match(myRegex); // Change this line
  console.log(myRegex, result.join(''));
  // ' blnd mc.'
}

// REGULAR EXPRESSIONS: MATCH CHARACTERS THAT OCCUR ONE OR MORE TIMES
// match multiple times a character with the '+' character
{
  let difficultSpelling = 'Mississippi';
  let myRegex = /s+/g; // Change this line
  let result = difficultSpelling.match(myRegex);
  console.log(myRegex, result);
  // [ 'ss', 'ss' ]
}

// REGULAR EXPRESSIONS: MATCH CHARACTERS THAT OCCUR ZERO OR MORE TIMES
// with the '*' character, it can match zero or more times the character
// /go*/ will match guns and gooool and return 'g' and 'goooo'
{
  let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';
  let chewieRegex = /Aa*/; // Change this line
  let result = chewieQuote.match(chewieRegex);
  console.log(chewieRegex, result);
  // [ 'Aaaaaaaaaaaaaaaa', index: 0, input: 'Aaaaaaaaaaaaaaaarrrgh!' ]
}

// REGULAR EXPRESSIONS: FIND CHARACTERS WITH LAZY MATCHING
// A greedy match finds the longest possible part of a string that fits the regex
// A lazy match, which finds the smallest possible part of the string that
// satisfies the regex pattern.
// It is done with the '?' character
// /<.*?>/ matches substring starting with '<', finishing with '>'
// '.*' matches zero or more of any character
// so it will match <>, or <a>, or <aa>, or <aaa>, etc
{
  let text = '<h1>Winter is coming</h1>';
  let myRegex = /<.*?>/; // Change this line
  let result = text.match(myRegex);
  console.log(myRegex, result);
  // [ '<h1>', index: 0, input: '<h1>Winter is coming</h1>' ]
}

// REGULAR EXPRESSIONS: FIND ONE OR MORE CRIMINALS IN A HUNT
// Criminals are represented with capital 'C'
{
  // example crowd gathering
  let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

  let reCriminals = /C+/g; // Change this line

  let matchedCriminals = crowd.match(reCriminals);
  console.log(matchedCriminals);
  // [ 'CCC' ]
}

// REGULAR EXPRESSIONS: MATCH BEGINNING STRING PATTERNS
// '^', outside of a character set (ie. [a-z]) will anchor
// the pattern at the start of a line
{
  let rickyAndCal = 'Cal and Ricky both like racing.';
  let calRegex = /^Cal/; // Change this line
  let result = calRegex.test(rickyAndCal);
  console.log(calRegex, result);
  /// ^Cal/ true
}

// REGULAR EXPRESSIONS: MATCH ENDING STRING PATTERNS
// '$' will anchor the pattern at the end of the line
{
  let caboose = 'The last car on a train is the caboose';
  let lastRegex = /caboose$/; // Change this line
  let result = lastRegex.test(caboose);
  console.log(lastRegex, result);
  /// caboose$/ true
}

// REGULAR EXPRESSIONS: MATCH ALL LETTERS AND NUMBERS
// shorthand character classes
// \w is equivalent to [A-Za-z0-9_]
{
  let quoteSample = 'The five boxing wizards jump quickly.';
  let alphabetRegexV2 = /\w/g; // Change this line
  let result = quoteSample.match(alphabetRegexV2).length;
  console.log(alphabetRegexV2, result);
  /// \w/g 31
}

// Regular Expressions: Match Everything But Letters and Numbers
// \W is equivalent to [^A-Za-z0-9_], or \w negated
{
  let quoteSample = 'The five boxing wizards jump quickly.';
  let nonAlphabetRegex = /\W/g; // Change this line
  let result = quoteSample.match(nonAlphabetRegex).length;
  console.log(nonAlphabetRegex, result);
  /// \W/g 6
}

// REGULAR EXPRESSIONS: MATCH ALL NUMBERS
// \d is equivalent to [0-9]
{
  let numString = 'Your sandwich will be $5.00';
  let numRegex = /\d/g; // Change this line
  let result = numString.match(numRegex).length;
  console.log(numRegex, result);
  /// \d/g 3
}

// Regular Expressions: Match All Non-Numbers
// \D is equivalent to [^0-9], it's \d negated
{
  let numString = 'Your sandwich will be $5.00';
  let noNumRegex = /\D/g; // Change this line
  let result = numString.match(noNumRegex).length;
  console.log(noNumRegex, result);
  /// \D/g 24
}

// Regular Expressions: Restrict Possible Usernames
// Usernames are used everywhere on the internet. They are what give users a unique
// identity on their favorite sites.
// You need to check all the usernames in a database. Here are some simple rules that
// users have to follow when creating their username.
// 1) The only numbers in the username have to be at the end. There can be zero or
// more of them at the end.
// 2) Username letters can be lowercase and uppercase.
// 3) Usernames have to be at least two characters long. A two-letter username can
// only use alphabet letter characters.
{
  let username = 'JackOfAllTrades';
  let userCheck = /[a-z][a-z]+\d*$/i; // Change this line
  // let userCheck = /[a-z]{2,}\d*$/i; // better alternative
  let result = userCheck.test(username);
  console.log(userCheck, result);
  // [a-z][a-z]+\d*$/i true
  // explanation:
  // [a-z]   match one alphabetical character
  // [a-z]+  followed by one or more alphabetical characters
  // so at least two alphabetical characters
  // \d*$    and followed by zero or more numbers at the end of the line
}

// REGULAR EXPRESSIONS: MATCH WHITESPACE
// \s matches withespace, carriage, return, tab, form feed and new line characters
// \s is equivalent to [ \r\t\f\n\v]
{
  let sample = 'Whitespace is important in separating words';
  let countWhiteSpace = /\s/g; // Change this line
  let result = sample.match(countWhiteSpace);
  console.log(countWhiteSpace, result);
  // /\s/g [ ' ', ' ', ' ', ' ', ' ' ]
}

// Regular Expressions: Match Non-Whitespace Characters
// \S is the inverse of \s, like what happens with \d \D and \w \W
// \S is equivalent to [^ \r\t\f\n\v]
{
  let sample = 'Whitespace is important in separating words';
  let countNonWhiteSpace = /\S/g; // Change this line
  let result = sample.match(countNonWhiteSpace);
  console.log(countNonWhiteSpace, result.join(''));
  // /\S/g 'Whitespaceisimportantinseparatingwords'
}

// REGULAR EXPRESSIONS: SPECIFY UPPER AND LOWER NUMBER OF MATCHES
// {} are quantity specifiers for lower and upper bound of matches
// /Oh{3,6} no/ will match Ohhh no, Ohhhh no, Ohhhhh no, Ohhhhhh no
{
  let ohStr = 'Ohhh no';
  let ohRegex = /Oh{3,6} no/; // Change this line
  let result = ohRegex.test(ohStr);
  console.log(ohRegex, result);
  /// /Oh{3,6} no/ true
}

// REGULAR EXPRESSIONS: SPECIFY ONLY THE LOWER NUMBER OF MATCHES
// {n,} is for specificating n or more ocurrences
{
  let haStr = 'Hazzzzah';
  let haRegex = /Haz{4,}ah/; // Change this line
  let result = haRegex.test(haStr);
  console.log(haRegex, result);
  // /Haz{4,}ah/ true
}

// REGULAR EXPRESSIONS: SPECIFY EXACT NUMBER OF MATCHES
// {n} only matches exactly n times the pattern
{
  let timStr = 'Timmmmber';
  let timRegex = /Tim{4}ber/; // Change this line
  let result = timRegex.test(timStr);
  console.log(timRegex, result);
  // /Tim{4}ber/ true
}

// REGULAR EXPRESSIONS: CHECK FOR ALL OR NONE
// '?' matches zero or one times the pattern
// so it's used for matching something that may or may not be there
{
  let favWord = 'favorite';
  let favRegex = /favou?rite/; // Change this line
  let result = favRegex.test(favWord);
  console.log(favRegex, result);
}

// REGULAR EXPRESSIONS: POSITIVE AND NEGATIVE LOOKAHEAD
// ?= are used for positive lookahead TODO: NO ENTENDI BIEN
{
  let sampleWord = 'astronaut';
  let pwRegex = /(?=\w{5,})(?=\D*\d{2,})/; // Change this line
  let result = pwRegex.test(sampleWord);
  console.log(pwRegex, result);
}

// REGULAR EXPRESSIONS: REUSE PATTERNS USING CAPTURE GROUPS
// match only repeating numbers three times, not two and not four.
// the pattern has start and end anchors.. ^ and $
// so, it takes the (\d+) capture group, and checks that it's present
// a space, the group, another space, the group again, and then endline anchor ($)
// the two anchors are necessary to match ONLY three times the repeating pattern.
// without the '^' it will match  23 |23 23 23| or 54 54 54 |54 54 54|
// without the '$' it will match  |41 41 41| 41 or |36 36 36| 36 36 36 36
// without both it will match |12 12 12| 12 12 12 or 12 |12 12 12| 12 12 or 12 12 |12 12 12| 12 or 12 12 12 |12 12 12|
{
  let repeatNum = '42 42 42';
  let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
  let result = reRegex.test(repeatNum);
  console.log(reRegex, result);
}

// Regular Expressions: Use Capture Groups to Search and Replace
// self-explanatory
{
  let huhText = 'This sandwich is good.';
  let fixRegex = /good/; // Change this line
  let replaceText = 'okey-dokey'; // Change this line
  let result = huhText.replace(fixRegex, replaceText);
  console.log(huhText, '|', fixRegex, '=>', replaceText, '|', result);
}

{
  let hello = '   Hello, World!  ';
  let wsRegex = /^\s+|\s+$/g; // Change this line
  let result = hello.replace(wsRegex, ''); // Change this line
  console.log(result);
}
