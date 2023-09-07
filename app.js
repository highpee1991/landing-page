const marksWeight1 = 78;
const marksHeight1 = 1.69;

const johnWeight1 = 92;
const johnHeight1 = 1.95;

const marksWeight2 = 95;
const marksHeight2 = 1.88;

const johnWeight2 = 85;
const johnHeight2 = 1.76;

// calcuating the mass index use the formula BMI = mass / (height * height)

const markBmi1 = Number(marksWeight1 / (marksHeight1 * marksHeight1)).toFixed(
  2
);
const johnBmi1 = Number(johnWeight1 / (johnHeight1 * johnHeight1)).toFixed(2);

const markBmi2 = Number(marksWeight2 / (marksHeight2 * marksHeight2)).toFixed(
  2
);
const johnBmi2 = Number(johnWeight2 / (johnHeight2 * johnHeight2)).toFixed(2);

const res1 =
  markBmi1 > johnBmi1
    ? `Marks BMI is ${markBmi1} and is greater than John BMI ${johnBmi1}`
    : `John BMI is ${johnBmi1} and is greater than Marks BMI ${markBmi1}`;

const res2 =
  markBmi2 > johnBmi2
    ? `Marks BMI is ${markBmi2} and is greater than John BMI ${johnBmi2}`
    : `John BMI is ${johnBmi2} and is greater than Marks BMI ${markBmi2}`;

console.log(`res 1: ${res1}`);
console.log(`res 2: ${res2}`);
