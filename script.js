// declaration de la variable
function calcul() {
  // recupération des saisies
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var reg =/^[0-9]+[.][0-9]+$/;
  // test regex
  if(reg.test(firstNumber) && reg.test(secondNumber)){
    // ont mets le premier nombre a l'entier inferieur
    firstNumber = Math.trunc(firstNumber);
    // on affiche la multiplication de firstNumber et secondNumber
    alert(firstNumber / secondNumber);
  } else {
    alert('FAUX');
  }
}
