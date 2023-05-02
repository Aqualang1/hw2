const num1 = +prompt('enter number', '0');
const num2 = +prompt('enter second number', '0');
const num3 = +prompt('last number please', '0');

if (!num1 || !num2 || !num3) {
    alert('error');
} else {
    alert(`average of ${num1}, ${num2} and ${num3} is: ${((num1 + num2 + num3)/3).toFixed(2)}`);
}