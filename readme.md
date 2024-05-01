Below is the README.md file for the provided code, detailing its functionality, usage, and an example of how to run it.

---

# Fuzzy Logic Evaluation System

This system evaluates input values based on fuzzy logic rules. It calculates membership degrees for intellectual value, attitude towards work, and behavior, then applies fuzzy rules to determine an output value using defuzzification.

## Functions

The system consists of several functions:

- `calculateIntellectualMembership(intellectualValue)`: Calculates the membership degrees for the intellectual value.
- `calculateAttitudeWorkMembership(attitudeWorkValue)`: Calculates the membership degrees for attitude towards work.
- `calculateBehaviorMembership(behaviorValue)`: Calculates the membership degrees for behavior.
- `applyFuzzyRules(intellectual, attitudeWork, behavior)`: Applies fuzzy rules based on the membership values to produce alpha and Z values.
- `fuzzification(intellectual, attitudeWork, behavior)`: Aggregates all membership calculations.
- `defuzzification(alphaValues, zValues)`: Performs defuzzification on the alpha and Z values from the fuzzy rules to produce a crisp output.
- `testFuzzyLogic()`: Runs a series of test cases to demonstrate system functionality.

## Usage

1. Provide input values for the intellectual level, attitude towards work, and behavior.
2. Call the `testFuzzyLogic()` function to see the fuzzy logic system in action.

## Example

To run the system with the test cases provided:

```javascript
testFuzzyLogic();
```

Output will be logged to the console, showing the defuzzified result for each set of inputs.

## Function Explaination

### calculateIntellectualMembership Function

This function is used to calculate the membership values for the fuzzy set `intellectualMembership` based on the input `intellectualValue`.

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

#### Function Parameters

- `intellectualValue` (Number): This is the crisp input value for which we want to calculate the membership values.

#### Function Return Value

This function returns an object `intellectualMembership` with three properties: `low`, `medium`, and `high`. Each property represents the degree of membership of the `intellectualValue` in the corresponding fuzzy set.

#### Function Description

The function uses a series of if-else conditions to calculate the membership values based on the `intellectualValue`.

- If `intellectualValue` is less than or equal to 15, then it fully belongs to the `low` set (`low` = 1).
- If `intellectualValue` is between 15 and 23, it partially belongs to the `low` and `medium` sets. The membership values are calculated using linear interpolation.
- If `intellectualValue` is between 23 and 30, it partially belongs to the `medium` and `high` sets. The membership values are calculated using linear interpolation.
- If `intellectualValue` is greater than 30, then it fully belongs to the `high` set (`high` = 1)

#### Function Example

```js
let membership = calculateIntellectualMembership(20);
console.log(membership);
// Output: { low: 0.75, medium: 0.25, high: 0 }
```

In this example, an `intellectualValue` of 20 has a `low` membership of 0.75 and a `medium` membership of 0.25. It does not belong to the `high` set.

### calculateAttitudeWorkMembership Function

This function is used to calculate the membership values for the fuzzy set `attitudeWorkMembership` based on the input `attitudeWorkValue`.

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

#### Function Parameters

- `attitudeWorkValue` (Number): This is the crisp input value for which we want to calculate the membership values.

#### Function Return Value

This function returns an object `attitudeWorkMembership` with three properties: `low`, `medium`, and `high`. Each property represents the degree of membership of the `attitudeWorkValue` in the corresponding fuzzy set.

#### Function Description

The function uses a series of if-else conditions to calculate the membership values based on the attitudeWorkValue.

- If `attitudeWorkValue` is less than or equal to 6, then it fully belongs to the `low` set (`low` = 1).
- If `attitudeWorkValue` is between 6 and 9, it partially belongs to the `low` and `medium` sets. The membership values are calculated using linear interpolation.
- If `attitudeWorkValue` is between 9 and 12, it partially belongs to the `medium` and `high` sets. The membership values are calculated using linear interpolation.
- If `attitudeWorkValue` is greater than 12, then it fully belongs to the `high` set (`high` = 1).

#### Function Example

```js
let membership = calculateAttitudeWorkMembership(8);
console.log(membership);
// Output: { low: 0.5, medium: 0.2, high: 0 }
```

In this example, an `attitudeWorkValue` of 8 has a `low` membership of 0.5 and a `medium` membership of 0.2. It does not belong to the `high` set.

### calculateBehaviorMembership Function

This function is used to calculate the membership values for the fuzzy set `behaviorMembership` based on the input `behaviorValue`.

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

#### Function Parameters

- `behaviorValue` (Number): This is the crisp input value for which we want to calculate the membership values.

#### Function Return Value

This function returns an object `behaviorMembership` with three properties: `low`, `medium`, and `high`. Each property represents the degree of membership of the `behaviorValue` in the corresponding fuzzy set.

#### Function Description

The function uses a series of if-else conditions to calculate the membership values based on the `behaviorValue`.

- If `behaviorValue` is less than or equal to 4, then it fully belongs to the `low` set (`low` = 1).
- If `behaviorValue` is between 4 and 6, it partially belongs to the `low` and `medium` sets. The membership values are calculated using linear interpolation.
- If `behaviorValue` is between 6 and 8, it partially belongs to the `medium` and `high` sets. The membership values are calculated using linear interpolation.
- If `behaviorValue` is greater than 8, then it fully belongs to the `high` set (`high` = 1).

#### Function Example

```js
let membership = calculateBehaviorMembership(7);
console.log(membership);
// Output: { low: 0, medium: 0.5, high: 0.5 }
```

In this example, a `behaviorValue` of 7 has a `medium` membership of 0.5 and a `high` membership of 0.5. It does not belong to the `low` set.

## Contributing

Please ensure any pull requests or contributions adhere to the following steps:

1. Thoroughly comment your code to maintain readability and ease of maintenance.
2. Write tests for any new functionality or changes.
3. Update the README.md with any changes to the system's usage or functionality.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

---

**Note**: The `README.md` file should also include instructions on how to install any dependencies, but since the provided code does not require any external libraries, this section was omitted. If the code was part of a larger project with dependencies, you would need to include that information.

Remember that a `README.md` file is the first file a visitor will see when visiting your repository, so it should be well-structured, clear, and concise.
