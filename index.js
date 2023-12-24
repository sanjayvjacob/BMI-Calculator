function bmiCalculator(weight, height){
  var bmi = weight / (height * height);
  if (bmi < 18.5) {
      return "Your BMI is " + Math.round(bmi) + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Your BMI is " + Math.round(bmi) + ", so you have a normal weight.";
  } else {
      return "Your BMI is " + Math.round(bmi) + ", so you are overweight.";
  }
}
var bmi = bmiCalculator(90, 1.8);
console.log(bmi);