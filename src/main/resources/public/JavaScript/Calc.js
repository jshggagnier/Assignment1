
// Live update of the rows, localized to reduce the amount of unnecessary code run. (May need to be modified to become universal [aka update(string A1)] but for simplicity's sake isn't yet)
function updateA1(){
  var Result; // variable to store Result of grade calculation
  var NumValue = "false"; // variable to return for mean
  var A1upper = document.getElementById("A1UpperVal").value; 
  var A1lower = document.getElementById("A1LowerVal").value; //grab variables
  if(isNaN(A1upper)||isNaN(A1lower)||0==A1lower){Result = "Empty/Invalid Input"} //test input to see if we want to even try calculation
  else {
    NumValue = (A1upper/A1lower); 
    Result = ((A1upper/A1lower)* 100)+ "%"
  } //set the Result properly
  //console.log(Result);// log the Result for testing
  document.getElementById("outputA1").innerHTML = Result; //display the Result on the graph
  return NumValue;
}
function updateA2(){
  var Result; // variable to store Result of grade calculation
  var NumValue = "false"; // variable to return for mean
  var A2upper = document.getElementById("A2UpperVal").value; 
  var A2lower = document.getElementById("A2LowerVal").value; //grab variables
  if(isNaN(A2upper)||isNaN(A2lower)||0==A2lower){Result = "Empty/Invalid Input"} //test input to see if we want to even try calculation
  else {
    NumValue = (A2upper/A2lower); 
    Result = ((A2upper/A2lower)* 100)+ "%"
  } //set the Result properly
  //console.log(Result);// log the Result for testing
  document.getElementById("outputA2").innerHTML = Result; //display the Result on the graph
  return NumValue;
}
function updateA3(){
  var Result; // variable to store Result of grade calculation
  var NumValue = "false"; // variable to return for mean
  var A3upper = document.getElementById("A3UpperVal").value; 
  var A3lower = document.getElementById("A3LowerVal").value; //grab variables
  if(isNaN(A3upper)||isNaN(A3lower)||0==A3lower){Result = "Empty/Invalid Input"} //test input to see if we want to even try calculation
  else {
    NumValue = (A3upper/A3lower); 
    Result = ((A3upper/A3lower)* 100)+ "%"
  } //set the Result properly
  //console.log(Result);// log the Result for testing
  document.getElementById("outputA3").innerHTML = Result; //display the Result on the graph
  return NumValue;
}
function updateA4(){
  var Result; // variable to store Result of grade calculation
  var NumValue = "false"; // variable to return for mean
  var A4upper = document.getElementById("A4UpperVal").value; 
  var A4lower = document.getElementById("A4LowerVal").value; //grab variables
  if(isNaN(A4upper)||isNaN(A4lower)||0==A4lower){Result = "Empty/Invalid Input"} //test input to see if we want to even try calculation
  else {
    NumValue = (A4upper/A4lower); 
    Result = ((A4upper/A4lower)* 100)+ "%"
  } //set the Result properly
  //console.log(Result);// log the Result for testing
  document.getElementById("outputA4").innerHTML = Result; //display the Result on the graph
  return NumValue;
}

// Calculation of the mean without weighting
function normalMean(){
  var A1Value = updateA1();
  var A2Value = updateA2();
  var A3Value = updateA3();
  var A4Value = updateA4();
  var summation = 0;
  var quantity = 0;
  var Result = "Empty or Invalid Inputs";



  if(A1Value != "false"){summation += A1Value;quantity++}
  if(A2Value != "false"){summation += A2Value;quantity++}
  if(A3Value != "false"){summation += A3Value;quantity++}
  if(A4Value != "false"){summation += A4Value;quantity++}
  if(quantity>0) {Result = (((summation/quantity) * 100) +"%")}
  document.getElementById("outputAverage").innerHTML = Result;
  //console.log(Result);
  return;
}

// Calculation of the mean with weighting
function weightedMean(){
  var A1Value = updateA1();
  var A2Value = updateA2();
  var A3Value = updateA3();
  var A4Value = updateA4();
  
  var A1Weight = document.getElementById("A1Weight").value
  var A2Weight = document.getElementById("A2Weight").value
  var A3Weight = document.getElementById("A3Weight").value
  var A4Weight = document.getElementById("A4Weight").value

  var weightedSummation = 0;
  var summationOfWeights = 0;
  var Result = "Empty or Invalid Inputs";

  if(A1Value != "false" && !isNaN(A1Weight)) {weightedSummation += A1Value*(A1Weight);summationOfWeights += Number(A1Weight);}
  if(A2Value != "false" && !isNaN(A2Weight)) {weightedSummation += A2Value*(A2Weight);summationOfWeights += Number(A2Weight);}
  if(A3Value != "false" && !isNaN(A3Weight)) {weightedSummation += A3Value*(A3Weight);summationOfWeights += Number(A3Weight);}
  if(A4Value != "false" && !isNaN(A4Weight)) {weightedSummation += A4Value*(A4Weight);summationOfWeights += Number(A4Weight);}
  console.log(A1Value + " " + A1Weight + " " + A2Value + " " + A2Weight +" "+ summationOfWeights);// more logging for testing purposes!
  if(summationOfWeights>0) {Result = (((weightedSummation/summationOfWeights) * 100) +"%");}
  document.getElementById("outputAverage").innerHTML = Result;
  console.log(Result);
  return;
}

function rename(targetNum)
{
  document.getElementById("Assignment"+targetNum).innerHTML = "<input type='text' id='box"+ targetNum +"'><div><button onclick='resolve("+targetNum+")'>rename</button></div>";
}

function resolve(targetNum)
{
  document.getElementById("Assignment"+targetNum).innerHTML = document.getElementById("box"+targetNum).value;
}