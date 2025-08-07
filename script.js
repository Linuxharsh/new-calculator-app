const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;

    if (value === 'AC' || value === 'CLR') {
      string = "";
      inputBox.value = string;
    } else if (value === 'DEL') {
      string = string.slice(0, -1);
      inputBox.value = string;
    } else if (value === '=') {
      try {
        string = eval(string).toString();
        inputBox.value = string;
      } catch {
        inputBox.value = "Error";
        string = "";
      }
    } else {
      string += value;
      inputBox.value = string;
    }
  });
});