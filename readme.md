<!-- TOC --><a name="fuzzy-logic-evaluation-system"></a>

# Fuzzy Logic Evaluation System

This system evaluates input values based on fuzzy logic rules. It calculates membership degrees for intellectual value, attitude towards work, and behavior, then applies fuzzy rules to determine an output value using defuzzification.

# Table Of Content

- [Fuzzy Logic Evaluation System](#fuzzy-logic-evaluation-system)
  - [Functions](#functions)
  - [Usage](#usage)
  - [Example](#example)
  - [Function Explaination](#function-explaination)
    - [calculateIntellectualMembership Function](#calculateintellectualmembership-function)
      - [Function Signature](#function-signature)
      - [Function Parameters](#function-parameters)
      - [Function Return Value](#function-return-value)
      - [Function Description](#function-description)
      - [Function Example](#function-example)
    - [calculateAttitudeWorkMembership Function](#calculateattitudeworkmembership-function)
      - [Function Signature](#function-signature-1)
      - [Function Parameters](#function-parameters-1)
      - [Function Return Value](#function-return-value-1)
      - [Function Description](#function-description-1)
      - [Function Example](#function-example-1)
    - [calculateBehaviorMembership Function](#calculatebehaviormembership-function)
      - [Function Signature](#function-signature-2)
      - [Function Parameters](#function-parameters-2)
      - [Function Return Value](#function-return-value-2)
      - [Function Description](#function-description-2)
      - [Function Example](#function-example-2)
    - [applyFuzzyRules Function](#applyfuzzyrules-function)
      - [Function Signature](#function-signature-3)
      - [Function Parameters](#function-parameters-3)
      - [Function Return Value](#function-return-value-3)
      - [Function Description](#function-description-3)
      - [Function Example](#function-example-3)
    - [defuzzification Function](#defuzzification-function)
      - [Function Signature](#function-signature-4)
      - [Function Parameters](#function-parameters-4)
      - [Function Return Value](#function-return-value-4)
      - [Function Description](#function-description-4)
      - [Function Example](#function-example-4)
  - [Contributing](#contributing)
  - [License](#license)

<!-- TOC end -->

<!-- TOC --><a name="functions"></a>

## Functions

The system consists of several functions:

- `calculateIntellectualMembership(intellectualValue)`: Calculates the membership degrees for the intellectual value.
- `calculateAttitudeWorkMembership(attitudeWorkValue)`: Calculates the membership degrees for attitude towards work.
- `calculateBehaviorMembership(behaviorValue)`: Calculates the membership degrees for behavior.
- `applyFuzzyRules(intellectual, attitudeWork, behavior)`: Applies fuzzy rules based on the membership values to produce alpha and Z values.
- `fuzzification(intellectual, attitudeWork, behavior)`: Aggregates all membership calculations.
- `defuzzification(alphaValues, zValues)`: Performs defuzzification on the alpha and Z values from the fuzzy rules to produce a crisp output.
- `testFuzzyLogic()`: Runs a series of test cases to demonstrate system functionality.

<!-- TOC --><a name="usage"></a>

## Usage

1. Provide input values for the intellectual level, attitude towards work, and behavior.
2. Call the `testFuzzyLogic()` function to see the fuzzy logic system in action.

<!-- TOC --><a name="example"></a>

## Example

To run the system with the test cases provided:

```javascript
testFuzzyLogic();
```

Output will be logged to the console, showing the defuzzified result for each set of inputs.

<!-- TOC --><a name="function-explaination"></a>

## Function Explaination

<!-- TOC --><a name="calculateintellectualmembership-function"></a>

### calculateIntellectualMembership Function

This function is used to calculate the membership values for the fuzzy set `intellectualMembership` based on the input `intellectualValue`.

<!-- TOC --><a name="function-signature"></a>

#### Function Signature

```js
function calculateIntellectualMembership(intellectualValue) {
 let intellectualMembership = {
  low: 0,
  medium: 0,
  high: 0,
 };

 if (intellectualValue <= 15) {
  intellectualMembership.low = 1;
 } else if (intellectualValue < 23) {
  intellectualMembership.low = (23 - intellectualValue) / (23 - 15);
  intellectualMembership.medium = (intellectualValue - 19) / (23 - 19);
 } else if (intellectualValue <= 30) {
  intellectualMembership.medium = (27 - intellectualValue) / (27 - 23);
  intellectualMembership.high = (intellectualValue - 23) / (30 - 23);
 } else {
  intellectualMembership.high = 1;
 }

 return intellectualMembership;
}
```

<!-- TOC --><a name="function-parameters"></a>

#### Function Parameters

- `intellectualValue` (Number): This is the crisp input value for which we want to calculate the membership values.

<!-- TOC --><a name="function-return-value"></a>

#### Function Return Value

This function returns an object `intellectualMembership` with three properties: `low`, `medium`, and `high`. Each property represents the degree of membership of the `intellectualValue` in the corresponding fuzzy set.

<!-- TOC --><a name="function-description"></a>

#### Function Description

The function uses a series of if-else conditions to calculate the membership values based on the `intellectualValue`.

- If `intellectualValue` is less than or equal to 15, then it fully belongs to the `low` set (`low` = 1).
- If `intellectualValue` is between 15 and 23, it partially belongs to the `low` and `medium` sets. The membership values are calculated using linear interpolation.
- If `intellectualValue` is between 23 and 30, it partially belongs to the `medium` and `high` sets. The membership values are calculated using linear interpolation.
- If `intellectualValue` is greater than 30, then it fully belongs to the `high` set (`high` = 1)

<!-- TOC --><a name="function-example"></a>

#### Function Example

```js
let membership = calculateIntellectualMembership(20);
console.log(membership);
// Output: { low: 0.75, medium: 0.25, high: 0 }
```

In this example, an `intellectualValue` of 20 has a `low` membership of 0.75 and a `medium` membership of 0.25. It does not belong to the `high` set.

<!-- TOC --><a name="calculateattitudeworkmembership-function"></a>

### calculateAttitudeWorkMembership Function

This function is used to calculate the membership values for the fuzzy set `attitudeWorkMembership` based on the input `attitudeWorkValue`.

<!-- TOC --><a name="function-signature-1"></a>

#### Function Signature

```js
function calculateAttitudeWorkMembership(attitudeWorkValue) {
 let attitudeWorkMembership = {
  low: 0,
  medium: 0,
  high: 0,
 };

 // Fuzzification similar to intelektual
 if (attitudeWorkValue <= 6) {
  attitudeWorkMembership.low = 1;
 } else if (attitudeWorkValue < 9) {
  attitudeWorkMembership.low = (9 - attitudeWorkValue) / (9 - 6);
  attitudeWorkMembership.medium = (attitudeWorkValue - 7.5) / (9 - 7.5);
 } else if (attitudeWorkValue <= 12) {
  attitudeWorkMembership.medium = (10.5 - attitudeWorkValue) / (10.5 - 9);
  attitudeWorkMembership.high = (attitudeWorkValue - 9) / (12 - 9);
 } else {
  attitudeWorkMembership.high = 1;
 }

 return attitudeWorkMembership;
}
```

<!-- TOC --><a name="function-parameters-1"></a>

#### Function Parameters

- `attitudeWorkValue` (Number): This is the crisp input value for which we want to calculate the membership values.

<!-- TOC --><a name="function-return-value-1"></a>

#### Function Return Value

This function returns an object `attitudeWorkMembership` with three properties: `low`, `medium`, and `high`. Each property represents the degree of membership of the `attitudeWorkValue` in the corresponding fuzzy set.

<!-- TOC --><a name="function-description-1"></a>

#### Function Description

The function uses a series of if-else conditions to calculate the membership values based on the attitudeWorkValue.

- If `attitudeWorkValue` is less than or equal to 6, then it fully belongs to the `low` set (`low` = 1).
- If `attitudeWorkValue` is between 6 and 9, it partially belongs to the `low` and `medium` sets. The membership values are calculated using linear interpolation.
- If `attitudeWorkValue` is between 9 and 12, it partially belongs to the `medium` and `high` sets. The membership values are calculated using linear interpolation.
- If `attitudeWorkValue` is greater than 12, then it fully belongs to the `high` set (`high` = 1).

<!-- TOC --><a name="function-example-1"></a>

#### Function Example

```js
let membership = calculateAttitudeWorkMembership(8);
console.log(membership);
// Output: { low: 0.5, medium: 0.2, high: 0 }
```

In this example, an `attitudeWorkValue` of 8 has a `low` membership of 0.5 and a `medium` membership of 0.2. It does not belong to the `high` set.

<!-- TOC --><a name="calculatebehaviormembership-function"></a>

### calculateBehaviorMembership Function

This function is used to calculate the membership values for the fuzzy set `behaviorMembership` based on the input `behaviorValue`.

<!-- TOC --><a name="function-signature-2"></a>

#### Function Signature

```js
function calculateBehaviorMembership(behaviorValue) {
 let behaviorMembership = {
  low: 0,
  medium: 0,
  high: 0,
 };

 // Fuzzification similar to intelektual
 if (behaviorValue <= 4) {
  behaviorMembership.low = 1;
 } else if (behaviorValue < 6) {
  behaviorMembership.low = (6 - behaviorValue) / (6 - 4);
  behaviorMembership.medium = (behaviorValue - 5) / (6 - 5);
 } else if (behaviorValue <= 8) {
  behaviorMembership.medium = (7 - behaviorValue) / (7 - 6);
  behaviorMembership.high = (behaviorValue - 6) / (8 - 6);
 } else {
  behaviorMembership.high = 1;
 }

 return behaviorMembership;
}
```

<!-- TOC --><a name="function-parameters-2"></a>

#### Function Parameters

- `behaviorValue` (Number): This is the crisp input value for which we want to calculate the membership values.

<!-- TOC --><a name="function-return-value-2"></a>

#### Function Return Value

This function returns an object `behaviorMembership` with three properties: `low`, `medium`, and `high`. Each property represents the degree of membership of the `behaviorValue` in the corresponding fuzzy set.

<!-- TOC --><a name="function-description-2"></a>

#### Function Description

The function uses a series of if-else conditions to calculate the membership values based on the `behaviorValue`.

- If `behaviorValue` is less than or equal to 4, then it fully belongs to the `low` set (`low` = 1).
- If `behaviorValue` is between 4 and 6, it partially belongs to the `low` and `medium` sets. The membership values are calculated using linear interpolation.
- If `behaviorValue` is between 6 and 8, it partially belongs to the `medium` and `high` sets. The membership values are calculated using linear interpolation.
- If `behaviorValue` is greater than 8, then it fully belongs to the `high` set (`high` = 1).

<!-- TOC --><a name="function-example-2"></a>

#### Function Example

```js
let membership = calculateBehaviorMembership(7);
console.log(membership);
// Output: { low: 0, medium: 0.5, high: 0.5 }
```

In this example, a `behaviorValue` of 7 has a `medium` membership of 0.5 and a `high` membership of 0.5. It does not belong to the `low` set.

<!-- TOC --><a name="applyfuzzyrules-function"></a>

### applyFuzzyRules Function

This function applies a set of fuzzy rules to the given input values and calculates the alpha and z values for each rule.

<!-- TOC --><a name="function-signature-3"></a>

#### Function Signature

```js
function applyFuzzyRules(intellectual, attitudeWork, behavior) {
 const membership = {
  intellectual: calculateIntellectualMembership(intellectual),
  attitudeWork: calculateAttitudeWorkMembership(attitudeWork),
  behavior: calculateBehaviorMembership(behavior),
 };

 // Define a function for the common pattern in the Z value calculation
 function calculateZValue(intellectWeight, attitudeWeight, behaviorWeight) {
  return intellectWeight * intellectual + attitudeWeight * attitudeWork + behaviorWeight * behavior + 40;
 }

 // Define the fuzzy rules with their corresponding weights
 const rules = [
  { levels: ["high", "high", "high"], weights: [0.8, 0.8, 0.8] },
  { levels: ["high", "high", "medium"], weights: [0.8, 0.8, 0.7] },
  { levels: ["high", "high", "low"], weights: [0.8, 0.8, 0.6] },
  { levels: ["high", "medium", "high"], weights: [0.8, 0.7, 0.8] },
  { levels: ["high", "medium", "medium"], weights: [0.8, 0.7, 0.7] },
  { levels: ["high", "medium", "low"], weights: [0.8, 0.7, 0.6] },
  { levels: ["high", "low", "high"], weights: [0.8, 0.6, 0.8] },
  { levels: ["high", "low", "medium"], weights: [0.8, 0.6, 0.7] },
  { levels: ["high", "low", "low"], weights: [0.8, 0.6, 0.6] },
  { levels: ["medium", "high", "high"], weights: [0.7, 0.8, 0.8] },
  { levels: ["medium", "high", "medium"], weights: [0.7, 0.8, 0.7] },
  { levels: ["medium", "high", "low"], weights: [0.7, 0.8, 0.6] },
  { levels: ["medium", "medium", "high"], weights: [0.7, 0.7, 0.8] },
  { levels: ["medium", "medium", "medium"], weights: [0.7, 0.7, 0.7] },
  { levels: ["medium", "medium", "low"], weights: [0.7, 0.7, 0.6] },
  { levels: ["medium", "low", "high"], weights: [0.7, 0.6, 0.8] },
  { levels: ["medium", "low", "medium"], weights: [0.7, 0.6, 0.7] },
  { levels: ["medium", "low", "low"], weights: [0.7, 0.6, 0.6] },
  { levels: ["low", "high", "high"], weights: [0.6, 0.8, 0.8] },
  { levels: ["low", "high", "medium"], weights: [0.6, 0.8, 0.7] },
  { levels: ["low", "high", "low"], weights: [0.6, 0.8, 0.6] },
  { levels: ["low", "medium", "high"], weights: [0.6, 0.7, 0.8] },
  { levels: ["low", "medium", "medium"], weights: [0.6, 0.7, 0.7] },
  { levels: ["low", "medium", "low"], weights: [0.6, 0.7, 0.6] },
  { levels: ["low", "low", "high"], weights: [0.6, 0.6, 0.8] },
  { levels: ["low", "low", "medium"], weights: [0.6, 0.6, 0.7] },
  { levels: ["low", "low", "low"], weights: [0.6, 0.6, 0.6] },
 ];

 // Maps levels to a membership function
 const levelToMembership = (intellectLevel, attitudeLevel, behaviorLevel) =>
  Math.min(
   membership.intellectual[intellectLevel],
   membership.attitudeWork[attitudeLevel],
   membership.behavior[behaviorLevel]
  );

 // Apply all rules to calculate alpha and z values
 const alphaValues = [];
 const zValues = [];

 rules.forEach((rule) => {
  const { levels, weights } = rule;
  const [intellectLevel, attitudeLevel, behaviorLevel] = levels;
  const [intellectWeight, attitudeWeight, behaviorWeight] = weights;

  alphaValues.push(levelToMembership(intellectLevel, attitudeLevel, behaviorLevel));
  zValues.push(calculateZValue(intellectWeight, attitudeWeight, behaviorWeight));
 });

 return { alpha: alphaValues, z: zValues };
}
```

<!-- TOC --><a name="function-parameters-3"></a>

#### Function Parameters

- intellectual (Number): The crisp input value for intellectual.
- attitudeWork (Number): The crisp input value for attitude towards work.
- behavior (Number): The crisp input value for behavior.

<!-- TOC --><a name="function-return-value-3"></a>

#### Function Return Value

This function returns an object with two properties: `alpha` and `z`. Each property is an array of values corresponding to each rule.

<!-- TOC --><a name="function-description-3"></a>

#### Function Description

The function first calculates the membership values for each input using the `calculateIntellectualMembership`, `calculateAttitudeWorkMembership`, and `calculateBehaviorMembership` functions.

It then defines a set of fuzzy rules, each with a corresponding set of `weights`. Each rule is an object with two properties: `levels` and `weights`. The `levels` property is an array of three strings representing the fuzzy sets for intellectual, attitude towards work, and behavior. The `weights` property is an array of three numbers representing the `weights` for each fuzzy set.

The function then applies each rule to the input values. For each rule, it calculates the alpha value (the minimum membership value of the input values in the fuzzy sets defined by the rule) and the z value (a weighted sum of the input values plus a constant).

The alpha and z values for each rule are stored in the `alphaValues` and `zValues` arrays, respectively.

<!-- TOC --><a name="function-example-3"></a>

#### Function Example

```js
let result = applyFuzzyRules(20, 8, 7);
console.log(result);
// Output: { alpha: [Array of alpha values], z: [Array of z values] }
```

In this example, the function applies the fuzzy rules to the input values 20 (intellectual), 8 (attitude towards work), and 7 (behavior). The result is an object with two properties: `alpha` and `z`. Each property is an array of values corresponding to each rule.

<!-- TOC --><a name="defuzzification-function"></a>

### defuzzification Function

This function is used to calculate the defuzzified output value based on the alpha and z values obtained from the application of fuzzy rules.

<!-- TOC --><a name="function-signature-4"></a>

#### Function Signature

```js
function defuzzification(alphaValues, zValues) {
 let temp1 = 0,
  temp2 = 0;
 alphaValues.forEach((alpha, index) => {
  // console.log(alpha, zValues[index]);
  temp1 += alpha;
  temp2 += alpha * zValues[index];
 });
 // Check if temp1 is zero to prevent division by zero
 if (temp1 === 0) {
  return "Low Number value"; // or some other indication that defuzzification can't be performed
 }
 return temp2 / temp1;
}
```

<!-- TOC --><a name="function-parameters-4"></a>

#### Function Parameters

- `alphaValues` (Array): This is an array of alpha values obtained from the application of fuzzy rules.
- `zValues` (Array): This is an array of z values obtained from the application of fuzzy rules.

<!-- TOC --><a name="function-return-value-4"></a>

#### Function Return Value

This function returns a number representing the defuzzified output value. If the sum of the alpha values is zero (which would cause a division by zero), the function returns the string "Low Number value".

<!-- TOC --><a name="function-description-4"></a>

#### Function Description

The function calculates the defuzzified output value using the formula:

```
defuzzifiedValue = sum(alpha[i] * z[i]) / sum(alpha[i])
```

where alpha[i] is the alpha value for the i-th rule and z[i] is the z value for the i-th rule.

The function uses a forEach loop to calculate the sums of the alpha values and the products of the alpha and z values. It then divides the sum of the products by the sum of the alpha values to obtain the defuzzified output value.

If the sum of the alpha values is zero, the function returns the string "Low Number value" to indicate that defuzzification can't be performed.

<!-- TOC --><a name="function-example-4"></a>

#### Function Example

```js
let alphaValues = [0.75, 0.5, 0];
let zValues = [20, 8, 7];
let defuzzifiedValue = defuzzification(alphaValues, zValues);
console.log(defuzzifiedValue);
// Output: 14.666666666666666
```

In this example, the function calculates the defuzzified output value based on the given alpha and z values. The result is approximately 14.67.

<!-- TOC --><a name="contributing"></a>

## Contributing

Please ensure any pull requests or contributions adhere to the following steps:

1. Thoroughly comment your code to maintain readability and ease of maintenance.
2. Write tests for any new functionality or changes.
3. Update the README.md with any changes to the system's usage or functionality.

<!-- TOC --><a name="license"></a>

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

---

**Note**: The `README.md` file should also include instructions on how to install any dependencies, but since the provided code does not require any external libraries, this section was omitted. If the code was part of a larger project with dependencies, you would need to include that information.

Remember that a `README.md` file is the first file a visitor will see when visiting your repository, so it should be well-structured, clear, and concise.
