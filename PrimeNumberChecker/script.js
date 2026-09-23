
function checkPrime(){
    const number = document.getElementById('number').value;
    const result = document.getElementById('result');

    if (number <= 1) {
        result.textContent = `${number} is not a prime number.`;
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.textContent = `${number} is a prime number.`;
    } else {
        result.textContent = `${number} is not a prime number.`;
    }
}
