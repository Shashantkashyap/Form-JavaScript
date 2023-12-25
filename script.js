document.getElementById("dataForm").addEventListener("submit",function(e){
    e.preventDefault();


let input1 = document.getElementById("input1").value;

let input2 = document.getElementById("input2").value;

let checkbox = document.querySelector("input[name='checkbox']");
    let check = checkbox.checked ? checkbox.value : "Others";
let d1 = document.getElementById("d1").value;

let d2 = document.getElementById("d2").value;

let radio = document.querySelector('input[name="radio"]:checked').value;

console.log("Name : "+ input1)
console.log("Email : "+ input2)
console.log("Gender : " + check)
console.log("Age : " + d1)
console.log("Profession : "+ d2)
console.log("Liked : " + radio);

document.getElementById("dataForm").style.display = "none";


let displayDiv = document.getElementById("show");
displayDiv.style.display = "block";
            displayDiv.innerHTML = `
                <p>Name: ${input1}</p>
                <p>Email: ${input2}</p>
                <p>Gender: ${check}</p>
                <p>Age: ${d1}</p>
                <p>Profession: ${d2}</p>
                <p>Liked: ${radio}</p>
            `;
        



})