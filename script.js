const resultValue = document.getElementById("resultbox");
const userInput = document.getElementById("inputbox");
// function add(input) {
//   userInput.value += input;
//   cvt();
// }

// function remove() {
//   userInput.value = "";
//   resultValue.value = "";
// }

// function del() {
//   userInput.value = userInput.value.slice(0, -1);
//   cvt();
// }
function work(){
const conv =document.getElementById("conv");
const fromUnit = document.getElementById("from");
  const toUnit = document.getElementById("to");
if(conv.value==="length"){
fromUnit.innerHTML= toUnit.innerHTML= ' <option value="1">m</option> <option value="0.01">cm</option> <option value="1000">km</option> <option value="0.001">mm</option> <option value="1e-9">nm</option>  <option value="1e-12">pm</option><option value="0.1">dm</option>  <option value="1609.34">mile</option> <option value="0.3048">foot</option>  <option value="0.9144">yard</option>';
cvt();
}
else if(conv.value==="volume"){
  fromUnit.innerHTML= toUnit.innerHTML='<option value="1">m³</option><option value="0.001">liter (L)</option><option value="0.000001">mL</option><option value="0.764555">yard³</option><option value="0.0283168">foot³</option><option value="0.0000163871">inch³</option> <option value="0.00378541">gal(US)</option><option value="0.00454609">gal(UK)</option> <option value="0.001">dm³</option><option value="1e-9">mm³</option>';
  cvt();
}
else if(conv.value==="data"){
  fromUnit.innerHTML= toUnit.innerHTML='<option value="1">Byte</option> <option value="0.125">Bit</option> <option value="1024">KiloB</option> <option value="1048576">MegaB</option> <option value="1073741824">GigaB</option> <option value="1099511627776">TeraB</option> <option value="1125899906842624">PetaB</option>';
  cvt();
}
else if(conv.value==="speed"){
  fromUnit.innerHTML= toUnit.innerHTML=' <option value="0.277778">km/h</option> <option value="1">m/s</option> <option value="0.01">cm/s</option> <option value="1609.34">mile/s</option> <option value="0.44704">mile/h</option> <option value="0.3048">ft/s</option> <option value="0.9144">yard/s</option> <option value="0.514444">knot</option>';
  cvt();
}
else if(conv.value==="mass"){
  fromUnit.innerHTML= toUnit.innerHTML=' <option value="1">g</option> <option value="1000">kg</option> <option value="0.001">mg</option> <option value="1000000">ton</option> <option value="100000">quintal</option> <option value="28.85">ounce</option> <option value="453">pound</option>';
  cvt();
}
else if(conv.value==="time"){
  fromUnit.innerHTML= toUnit.innerHTML='<option value="31536000">year</option> <option value="2592000">month</option> <option value="604800">week</option> <option value="86400">day</option> <option value="3600">hour</option> <option value="60">minute</option> <option value="1">second</option> <option value="0.001">millisecond</option> <option value="1e-6">microsecond</option> <option value="1e-9">nanosecond</option>';
  cvt();
}
else if(conv.value==="temp"){
  fromUnit.innerHTML= toUnit.innerHTML='<option value="c">°c</option> <option value="f">°f</option> <option value="k">k</option>';
  temp();
  document.getElementById("from").addEventListener("change", temp);
document.getElementById("to").addEventListener("change", temp);
document.getElementById("inputbox").addEventListener("input", temp);
}
else if(conv.value==="area"){
  fromUnit.innerHTML= toUnit.innerHTML='<option value="1000000">km²</option> <option value="1">m²</option> <option value="10000">hector</option> <option value="0.01">dm²</option> <option value="2e+6">mile²</option> <option value="0.83">yard²</option> <option value="0.09">foot²</option>';
  cvt();
}
}

document.getElementById("conv").addEventListener("change",work)


function cvt() {
  const From = document.getElementById("from").value;
  const To = document.getElementById("to").value;
  const input = Number(userInput.value);
if(userInput.value==""){
resultValue.value="";
    return;
}
  else if (!isNaN(input) && From && To) {
    const smth = input * From;
    const vl = smth / To;
    resultValue.value = vl;
  } else {
    resultValue.value = "";
  }
}
document.getElementById("from").addEventListener("change", cvt);
document.getElementById("to").addEventListener("change", cvt);
document.getElementById("inputbox").addEventListener("input", cvt);

function temp() {
  const From = document.getElementById("from").value;
  const To = document.getElementById("to").value;
  const input = Number(userInput.value);
  if(userInput.value==""){
    resultValue.value="";
    return;

  }
 else if (From=="c" && To=="f") {
    resultValue.value=userInput.value * 1.8 + 32;
  }
  else if (From=="f" && To=="c") {
    const ii = userInput.value- 32;
    resultValue.value= ii/1.8;
  }
  else if (From=="c" && To=="k") {
    const jj= Number(userInput.value) + 273;
    resultValue.value = jj; 
  }

  else if (From=="k" && To=="c") {
    
    resultValue.value=userInput.value-273;
  }
  else if (From=="f" && To=="k") {
    const ii = userInput.value- 32;
    const kk= ii/1.8;
    const jj= Number(kk) + 273;
    resultValue.value = jj; 

  }
   else if (From=="k" && To=="f") {
    const ii = userInput.value-273;
    resultValue.value= ii * 1.8 + 32;

  }
else{resultValue.value=userInput.value;}
}