var Split = document.querySelector("#tipSplit");
var tipPercent = document.getElementById('tipInput');

Split.oninput = (() => {
  let value = Split.value;
  splitOutput.textContent = value;
});

let btn = document.getElementById('button');
btn.addEventListener('click', Calculate);

function Calculate() {
  let bill = parseFloat(document.getElementById('totalBill').value);
  let tipPercent = document.getElementById('tipInput').value;
  let people = Split.value;
  let tipValue = bill * ( tipPercent/ 100);
  let tipPerPerson = (tipValue/people).toFixed(2);
  let totalPerPerson = ((bill + tipValue) / people).toFixed(2);
  
  if(bill<=0){
    alert('Bill is not Valid');
    return;
  }

  document.getElementById('tipAmount').innerHTML = tipPerPerson;
  document.getElementById('newBill').innerHTML = totalPerPerson;
  console.log(tipPercent,tipValue, bill);
}

function subtract_tip(){
  let elem = document.getElementById('tipInput');
  if(elem.value == 0) return;
  elem.value = elem.value - 1;
  console.log("-1");
}

function add_tip(){
  let elem = document.getElementById('tipInput');
  elem.value = parseInt(elem.value) + 1;
  console.log("+1");
}

function subtract_person(){
  let elem = document.getElementById('tipSplit');
  if(elem.value == 1) return;
  elem.value = elem.value - 1;
  console.log("-1");
}

function add_person(){
  let elem = document.getElementById('tipSplit');
  elem.value = parseInt(elem.value) + 1;
  console.log("+1");
}
