const num1 = +prompt('enter number', '');
const num2 = +prompt('enter second number', '');
const num3 = +prompt('last number please', '');

if (!num1 || !num2 || !num3) {
    alert('error');
} else {
    alert(`average of ${num1}, ${num2} and ${num3} is: ${((num1 + num2 + num3)/3).toFixed(2)}`);
}