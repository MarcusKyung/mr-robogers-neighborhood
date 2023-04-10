# _Mr. Roboger's Neighborhood_

#### By _**Marcus Kyung**_

#### _Application takes a user's numerical input and returns an array with specific index values replaced with set string values._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_This simple JavaScript application takes an inputted number and returns an array with specific numerical values replaced with set strings. This application replaces all array numbers with 3, 2, and 1, with the words "won't you be my neighbor, (inputted name), boop, and beep. This application also offers the user the option to reverse the order of the calculated array.

## Setup/Installation Requirements

* _Download codebase from GH to your desktop/local machine ensuring all files/directories have been included._
* _Navigate to top level of project directory._
* _Open index.html file using a browser._
* _Enter a number in the provided input area._
* _Enter a name in the provided input area._
* _Select the reverse count radio button in order to reverse the count of array elements._
* _Press Get Results._
* _Receive text output based on number input._


## Known Bugs

* _No known bugs_

## Tests

```Describe: inputToArray()```

  ```Test: "It should take the user's inputted number and count up to it from zero in an array."```
  ```Code:```
  ```const userInput = 5;```
  ```inputToArray(userInput);```
  ```Expected Output: inputArray = [0,1,2,3,4,5]```

```Describe: translate()```

  ```Test: "It should replace any number containing a 3 in the user array with 'Won't you be my neighbor?'```
  ```Code:```
  ```const inputArray = 5 = [0,1,2,3,4,5];```
  ```translate(inputArray);```
  ```Expected Output: ['0 ', ' 1', ' 2', ' Won't you be my neighbor, ', ' 4', ' 5']```

  ```Test: "It should replace any number containing a 2 in the user array with 'Boop!'```
  ```Code:```
  ```const inputArray = 5 = [0,1,2,3,4,5];```
  ```translate(inputArray);```
  ```Expected Output: ['0 ', ' 1', ' Boop!', ' 3', ' 4', ' 5']```

  ```Test: "It should replace any number containing a 1 in the user array with 'Beep!'```
  ```Code:```
  ```const inputArray = 5 = [0,1,2,3,4,5];```
  ```translate(inputArray);```
  ```Expected Output: ['0 ', ' 1', ' 2', ' 3', ' 4', ' 5']```

## License

_For questions, comments, or concerns please reach out at Kyungmj@gmail.com_

_MIT License_

Copyright (c) [2023] [Marcus Kyung]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR\ A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.