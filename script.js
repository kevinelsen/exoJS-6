// declaration de la variable
function calcul() {
  // recupération des saisies
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var reg =/^(([0-9]+)|([0-9]+[.]{1}[0-9]+))$/;
  // test regex
  if(reg.test(firstNumber) && reg.test(secondNumber)){
    // on affiche la multiplication de firstNumber et secondNumber
    alert(firstNumber % secondNumber);
  } else {
    alert('FAUX');
  }
}
var button = document.getElementById("submit");
button.onclick = calcul();
