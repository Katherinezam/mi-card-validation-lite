// Función para permitir solo números
function soloNumeros(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
}

// Función para validar el número de tarjeta
function validate() {
  const cardNumber = document.getElementById('cardnumber').value;
  const resultElement = document.getElementById('result');

  if (cardNumber === '') {
    resultElement.textContent = 'Por favor, escribe un número.';
    resultElement.classList.remove('invalid');
    resultElement.classList.remove('valid');
    return;
  }

  const isValid = validarTarjeta(cardNumber);

  if (isValid) {
    resultElement.textContent = 'La tarjeta es válida ✅';
    resultElement.classList.add('valid');
    resultElement.classList.remove('invalid');
  } else {
    resultElement.textContent = 'La tarjeta no es válida ❌';
    resultElement.classList.add('invalid');
    resultElement.classList.remove('valid');
  }
}

// Función para comprobar si la tarjeta es válida
function validarTarjeta(cardNumber) {
  const total = [...cardNumber]
    .reverse()
    .map((digit, index) => {
      let num = parseInt(digit);
      if (index % 2 !== 0) {
        num *= 2;
        if (num > 9) num -= 9;
      }
      return num;
    })
    .reduce((sum, num) => sum + num, 0);

  return total % 10 === 0;
}
