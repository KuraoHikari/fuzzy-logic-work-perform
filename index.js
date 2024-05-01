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

function applyFuzzyRules(intellectual, attitudeWork, behavior) {
 //fuzzification;
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

// Test Cases for Fuzzy Logic Functions
function testFuzzyLogic() {
 let testValues = [
  { intellectual: 10, attitudeWork: 6, behavior: 6 },
  { intellectual: 20, attitudeWork: 7, behavior: 5 },
  { intellectual: 25, attitudeWork: 10, behavior: 7 },
  { intellectual: 35, attitudeWork: 12, behavior: 9 },
  { intellectual: 30, attitudeWork: 12, behavior: 7 },
 ];

 testValues.forEach((test) => {
  // Original code passed 'membership' which is an object containing three other objects, not values.
  // The applyFuzzyRules function expects three numbers as arguments.
  let fuzzyRulesResult = applyFuzzyRules(test.intellectual, test.attitudeWork, test.behavior);
  let fuzzyResult = defuzzification(fuzzyRulesResult.alpha, fuzzyRulesResult.z);

  console.log(
   `Test Result for { intellectual: ${test.intellectual}, attitudeWork: ${test.attitudeWork}, behavior: ${test.behavior} } = ${fuzzyResult}`
  );
 });
}

// Run the test cases
testFuzzyLogic();
