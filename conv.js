const result = document.getElementById("inputbox");
const cvd = document.getElementById("resultbox");




function add(input) {
  result.value += input;
  cvt();
}

function remove() {
  result.value = "";
  cvd.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
  cvt();
}

function cvt() {
  const From = document.getElementById("From").value;
  const To = document.getElementById("to").value;
  const input = parseFloat(result.value);
  if (!isNaN(input) && From && To) {
    
    const smth = input * From;
    const vl = smth / To;
    cvd.value = vl;
  } else {
    cvd.value = "";
  }
}
document.getElementById("From").addEventListener("change", cvt);
document.getElementById("to").addEventListener("change", cvt);