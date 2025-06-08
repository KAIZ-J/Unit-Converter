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
  if (From=="c" && To=="f") {
    cvd.value=result.value * 1.8 + 32;
  }
  else if (From=="f" && To=="c") {
    const ii = result.value- 32;
    cvd.value= ii/1.8;
  }
  else if (From=="c" && To=="k") {
    const jj= Number(result.value) + 273;
    cvd.value = jj; 
  }

  else if (From=="k" && To=="c") {
    
    cvd.value=result.value-273;
  }
  else if (From=="f" && To=="k") {
    const ii = result.value- 32;
    const kk= ii/1.8;
    const jj= Number(kk) + 273;
    cvd.value = jj; 

  }
   else if (From=="k" && To=="f") {
    const ii = result.value-273;
    cvd.value= ii * 1.8 + 32;

  }
else{cvd.value=result.value;}
}
document.getElementById("From").addEventListener("change", cvt);
document.getElementById("to").addEventListener("change", cvt);