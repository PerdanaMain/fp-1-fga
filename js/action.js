const check = () => {
  const number = document.getElementById("num").value;

  if (number % 3 === 0) {
    return alert("Fizz");
  } else if (number % 5 === 0) {
    return alert("Buzz");
  } else if (number % 3 === 0 && number % 5 === 0) {
    return alert("FizzBuzz");
  } else {
    return alert(number);
  }
};
