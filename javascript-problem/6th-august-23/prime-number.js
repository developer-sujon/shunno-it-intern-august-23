function isPrime(number) {
  if (number == 0 || number == 1) {
    return console.log(`${number} is not a prime number`);
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return console.log(`${number} is not a prime number`);
    }
  }
  return console.log(`${number} is a prime number`);
}
const input = 1;

isPrime(input);
