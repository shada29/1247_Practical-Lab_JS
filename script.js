console.clear();
console.log("✅ script.js connected")

const nameInput = document.getElementById("studentName");
const pw1Input = document.getElementById("pw1");
const pw2Input = document.getElementById ("pw2");
const tbn = document.getElementById ("btnCalc");
const outputBox = document.getElementById ("outputBox");

console.log (nameInput);
console.log (pw1Input);
console.log (pw2Input);
console.log (btn);
console.log (outputBox);

btn.addEventListener ("click", function () {
    console.log ("✅ Button clicked");
});

function calculateMarks () {
    console.log (" ➡️ calculateMarks() executed");
}

btn.addEventListener ("click", function () {
    calculateMarks();
});

function calculateMarks () {
    let name = nameInput.ariaValueMax;
    let pw1 = Number (pw1Input.value);
    let pw2 = Number (pw2Input.value);
}

    console.log ("Name: ", name);
    console.log ("PW1: ", pw1);
    console.log ("PW2: ", pw2);

let total = pw1 + pw2;
let average = total / 2 ;
let percentage = (total/200) * 100;

console.log ("Total: ", total);
console.loh ("Average: ", average);
console.log ("Percentage: ", percentage);

let grade;
if(average >= 80) {
    grade = "Excellent";
} else if (average >= 60) {
    grade = "Good";
} else if (average >= 40) {
    grade = "Satisfactory";
} else {
    grade + "Fail";
}

console.log ("Grade: ", grade);

function calculateMarks () {
    let name = nameInput.ariaValueMax;
    let pw1 = Number (pw1Input.value);
    let pw2 = Number (pw2Input.value);

    if (!name || isNaN(pw1) || isNaN(pw2) || pw1 < 0 || pw1 > 100 || pw2 < 0 || pw2 > 100 ){
        outputBox.className = "alert alert -danger mt-3 mb-0";
        outputBox.innerHTML = "❌ Please enter a name and valid marks (0-100) for PW1 and PW2.";
        return;
    }

let total = pw1 + pw2;
let average = total / 2 ;
let percentage = (total/200) * 100;

let grade;
if(average >= 80) {
    grade = "Excellent";
} else if (average >= 60) {
    grade = "Good";
} else if (average >= 40) {
    grade = "Satisfactory";
} else {
    grade + "Fail";
}

outputBox.classNmae = "alert alert-success mt-3 mb-0";
outputBox.innerHTML = `

<h5>✅ Result Summary</h5>

<p><b>Name:</b> ${name}</p>

<p><b>PW1:</b> ${pw1}</p>
<p><b>PW2:</b> ${pw2}</p>

<hr>

<p><b>Total:</b> ${total}</p>
<p><b>Average:</b> ${average.toFixed(2)}</p>
<p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
<p><b>Grade:</b> ${grade}</p>

`;

        }
