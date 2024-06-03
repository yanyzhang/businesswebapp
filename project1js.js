// modal 0
const userInputNew0 = document.querySelector("#numberInput0");
const summaryDiv0 = document.querySelector("#summary0");

document
  .querySelector("#add-to-cart-button0")
  .addEventListener("click", function () {
    const numberEntered0 = parseInt(userInputNew0.value);
    const result0 = numberEntered0 * 39;

    if (userInputNew0.value > 0 && userInputNew0.value <= 20) {
      summaryDiv0.textContent = `Great! Order of ${userInputNew0.value} items is received, total price is $${result0}.`;
    } else if (userInputNew0.value <= 0) {
      summaryDiv0.textContent = `Please enter a quantity greater than 0.`;
    } else {
      summaryDiv0.textContent = `Due to limited stock, maximum quantity to limited to 20.`;
    }
  });

// modal 1
const userInputNew1 = document.querySelector("#numberInput1");
const summaryDiv1 = document.querySelector("#summary1");

document
  .querySelector("#add-to-cart-button1")
  .addEventListener("click", function () {
    const numberEntered1 = parseInt(userInputNew1.value);
    const result1 = numberEntered1 * 48;

    if (userInputNew1.value > 0 && userInputNew1.value <= 20) {
      summaryDiv1.textContent = `Great! Order of ${userInputNew1.value} items is received, total price is $${result1}.`;
    } else if (userInputNew1.value <= 0) {
      summaryDiv1.textContent = `Please enter a quantity greater than 0.`;
    } else {
      summaryDiv1.textContent = `Due to limited stock, maximum quantity to limited to 20.`;
    }
  });

// modal 2
const userInputNew2 = document.querySelector("#numberInput2");
const summaryDiv2 = document.querySelector("#summary2");

document
  .querySelector("#add-to-cart-button2")
  .addEventListener("click", function () {
    const numberEntered2 = parseInt(userInputNew2.value);
    const result2 = numberEntered2 * 6;

    if (userInputNew2.value > 0 && userInputNew2.value <= 20) {
      summaryDiv2.textContent = `Great! Order of ${userInputNew2.value} items is received, total price is $${result2}.`;
    } else if (userInputNew2.value <= 0) {
      summaryDiv2.textContent = `Please enter a quantity greater than 0.`;
    } else {
      summaryDiv2.textContent = `Due to limited stock, maximum quantity to limited to 20.`;
    }
  });

// modal 3
const userInputNew3 = document.querySelector("#numberInput3");
const summaryDiv3 = document.querySelector("#summary3");

document
  .querySelector("#add-to-cart-button3")
  .addEventListener("click", function () {
    const numberEntered3 = parseInt(userInputNew3.value);
    const result3 = numberEntered3 * 5;

    if (userInputNew3.value > 0 && userInputNew3.value <= 20) {
      summaryDiv3.textContent = `Great! Order of ${userInputNew3.value} items is received, total price is $${result3}.`;
    } else if (userInputNew3.value <= 0) {
      summaryDiv3.textContent = `Please enter a quantity greater than 0.`;
    } else {
      summaryDiv3.textContent = `Due to limited stock, maximum quantity to limited to 20.`;
    }
  });

// modal 4
const userInputNew4 = document.querySelector("#numberInput4");
const summaryDiv4 = document.querySelector("#summary4");

document
  .querySelector("#add-to-cart-button4")
  .addEventListener("click", function () {
    const numberEntered4 = parseInt(userInputNew4.value);
    const result4 = numberEntered4 * 52;

    if (userInputNew4.value > 0 && userInputNew4.value <= 20) {
      summaryDiv4.textContent = `Great! Order of ${userInputNew4.value} items is received, total price is $${result4}.`;
    } else if (userInputNew4.value <= 0) {
      summaryDiv4.textContent = `Please enter a quantity greater than 0.`;
    } else {
      summaryDiv4.textContent = `Due to limited stock, maximum quantity to limited to 20.`;
    }
  });

// modal 5
const userInputNew5 = document.querySelector("#numberInput5");
const summaryDiv5 = document.querySelector("#summary5");

document
  .querySelector("#add-to-cart-button5")
  .addEventListener("click", function () {
    const numberEntered5 = parseInt(userInputNew5.value);
    const result5 = numberEntered5 * 169;

    if (userInputNew5.value > 0 && userInputNew5.value <= 6) {
      summaryDiv5.textContent = `Great! Order of ${userInputNew5.value} items is received, total price is $${result5}.`;
    } else if (userInputNew5.value <= 0) {
      summaryDiv5.textContent = `Please enter a quantity greater than 0.`;
    } else {
      summaryDiv5.textContent = `Due to limited stock, maximum quantity to limited to 6.`;
    }
  });
