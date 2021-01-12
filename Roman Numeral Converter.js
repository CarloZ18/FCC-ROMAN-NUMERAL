//Convert the given number into a roman numeral.

//All roman numerals answers should be provided in upper-case.

var convertToRoman = function (num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; //matriz con los nuemros decimelas
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ]; // matriz con sus equivalencias en numeros romanos

  var romanized = ""; //variable a donde se va a regresar la cadena luego de ser convertida

  //proceso de conversion a traves de un loop que itera entre cada indice de los numeros decimales y mietras se cumpla la condicion de que el indice sea menor o igual al numero que se desea convertir, este le va agregando su valor correspondiente en numeros romanos hasta que se ajuste, finalmente disminuimos num por su equivalente decimal y devolvemos ese valor dentro de la cadena vacia
  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
      console.log(romanized);
    }
  }

  return romanized;
};
convertToRoman(36);
