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
 let membership = {
  intellectual: calculateIntellectualMembership(intellectual),
  attitudeWork: calculateAttitudeWorkMembership(attitudeWork),
  behavior: calculateBehaviorMembership(behavior),
 };
 let alphaValues = [];
 let zValues = [];

 // Rule 1: If intellectual is high, attitudeWork is high, and behavior is high, then Z is (0.8 * intellectual + 0.8 * attitudeWork + 0.8 * behavior + 40)
 alphaValues.push(Math.min(membership.intellectual.high, membership.attitudeWork.high, membership.behavior.high));
 zValues.push(0.8 * intellectual + 0.8 * attitudeWork + 0.8 * behavior + 40);

 // Rule 2: If intellectual is high, attitudeWork is high, and behavior is medium, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.high, membership.attitudeWork.high, membership.behavior.medium));
 zValues.push(0.8 * intellectual + 0.8 * attitudeWork + 0.7 * behavior + 40);

 // Rule 3: If intellectual is high, attitudeWork is high, and behavior is low, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.high, membership.attitudeWork.high, membership.behavior.low));
 zValues.push(0.8 * intellectual + 0.8 * attitudeWork + 0.6 * behavior + 40);

 // Rule 4: If intellectual is high, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.high, membership.attitudeWork.medium, membership.behavior.high));
 zValues.push(0.8 * intellectual + 0.7 * attitudeWork + 0.8 * behavior + 40);

 /// Rule 5: If intellectual is high, attitudeWork is medium, and behavior is medium, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.high, membership.attitudeWork.medium, membership.behavior.medium));
 zValues.push(0.8 * intellectual + 0.7 * attitudeWork + 0.7 * behavior + 40);

 // Rule 6: If intellectual is high, attitudeWork is medium, and behavior is low, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.high, membership.attitudeWork.medium, membership.behavior.low));
 zValues.push(0.8 * intellectual + 0.7 * attitudeWork + 0.6 * behavior + 40);

 // Rule 7: If intellectual is high, attitudeWork is low, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.high, membership.attitudeWork.low, membership.behavior.high));
 zValues.push(0.8 * intellectual + 0.6 * attitudeWork + 0.8 * behavior + 40);

 // Rule 8: If intellectual is high, attitudeWork is low, and behavior is medium, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.high, membership.attitudeWork.low, membership.behavior.medium));
 zValues.push(0.8 * intellectual + 0.6 * attitudeWork + 0.7 * behavior + 40);

 // Rule 10: If intellectual is medium, attitudeWork is high, and behavior is medium, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.medium, membership.attitudeWork.high, membership.behavior.medium));
 zValues.push(0.7 * intellectual + 0.8 * attitudeWork + 0.7 * behavior + 40);

 // Rule 11: If intellectual is medium, attitudeWork is high, and behavior is low, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.medium, membership.attitudeWork.high, membership.behavior.low));
 zValues.push(0.7 * intellectual + 0.8 * attitudeWork + 0.6 * behavior + 40);

 // Rule 12: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.medium, membership.attitudeWork.medium, membership.behavior.high));
 zValues.push(0.7 * intellectual + 0.7 * attitudeWork + 0.8 * behavior + 40);

 // Rule 13: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.medium, membership.attitudeWork.medium, membership.behavior.medium));
 zValues.push(0.7 * intellectual + 0.7 * attitudeWork + 0.7 * behavior + 40);

 // Rule 14: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.medium, membership.attitudeWork.medium, membership.behavior.low));
 zValues.push(0.7 * intellectual + 0.7 * attitudeWork + 0.6 * behavior + 40);

 // Rule 15: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.medium, membership.attitudeWork.low, membership.behavior.high));
 zValues.push(0.7 * intellectual + 0.6 * attitudeWork + 0.8 * behavior + 40);

 // Rule 16: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.medium, membership.attitudeWork.low, membership.behavior.medium));
 zValues.push(0.7 * intellectual + 0.6 * attitudeWork + 0.7 * behavior + 40);

 // Rule 17: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.medium, membership.attitudeWork.low, membership.behavior.low));
 zValues.push(0.7 * intellectual + 0.6 * attitudeWork + 0.6 * behavior + 40);

 // Rule 18: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.low, membership.attitudeWork.high, membership.behavior.high));
 zValues.push(0.6 * intellectual + 0.8 * attitudeWork + 0.8 * behavior + 40);

 // Rule 19: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.low, membership.attitudeWork.high, membership.behavior.medium));
 zValues.push(0.6 * intellectual + 0.8 * attitudeWork + 0.7 * behavior + 40);

 // Rule 20: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.low, membership.attitudeWork.high, membership.behavior.low));
 zValues.push(0.6 * intellectual + 0.8 * attitudeWork + 0.6 * behavior + 40);

 // Rule 21: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.low, membership.attitudeWork.medium, membership.behavior.high));
 zValues.push(0.6 * intellectual + 0.7 * attitudeWork + 0.8 * behavior + 40);

 // Rule 22: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.low, membership.attitudeWork.medium, membership.behavior.medium));
 zValues.push(0.6 * intellectual + 0.7 * attitudeWork + 0.7 * behavior + 40);

 // Rule 23: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.low, membership.attitudeWork.medium, membership.behavior.low));
 zValues.push(0.6 * intellectual + 0.7 * attitudeWork + 0.6 * behavior + 40);

 // Rule 24: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.low, membership.attitudeWork.low, membership.behavior.high));
 zValues.push(0.6 * intellectual + 0.6 * attitudeWork + 0.8 * behavior + 40);

 // Rule 25: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.low, membership.attitudeWork.low, membership.behavior.medium));
 zValues.push(0.6 * intellectual + 0.6 * attitudeWork + 0.7 * behavior + 40);

 // Rule 26: If intellectual is medium, attitudeWork is medium, and behavior is high, then Z is ...
 alphaValues.push(Math.min(membership.intellectual.low, membership.attitudeWork.low, membership.behavior.low));
 zValues.push(0.6 * intellectual + 0.6 * attitudeWork + 0.6 * behavior + 40);

 return { alpha: alphaValues, z: zValues };
}

function fuzzification(intellectual, attitudeWork, behavior) {
 let membership = {
  intellectual: calculateIntellectualMembership(intellectual),
  attitudeWork: calculateAttitudeWorkMembership(attitudeWork),
  behavior: calculateBehaviorMembership(behavior),
 };
 return membership;
}

function defuzzification(alphaValues, zValues) {
 let temp1 = 0,
  temp2 = 0;
 alphaValues.forEach((alpha, index) => {
  console.log(alpha, zValues[index]);
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
  // { intellectual: 10, attitudeWork: 6, behavior: 6 },
  // { intellectual: 20, attitudeWork: 7, behavior: 5 },
  // { intellectual: 25, attitudeWork: 10, behavior: 7 },
  // { intellectual: 35, attitudeWork: 12, behavior: 9 },
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
