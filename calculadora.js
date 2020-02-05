const input = document.getElementsByTagName("input")[0];
const strong = document.getElementsByTagName("strong")[0];

strong.appendChild(document.createTextNode(new Date().getFullYear()));

addValue = value => {
  input.value += value;
};

addAction = action => {
  const value = input.value.slice(-2);
  if (value.match(/[()%/*+.-]/g) === null) input.value += action;
  else value.match(/[()%/*+.-]/g).length < 2 ? (input.value += action) : null;
};

reset = () => (input.value = "");

execute = () => {
  try {
    input.value = eval(input.value);
  } catch (e) {
    input.value = "Erro ao calcular :(";
  }
};

lastReset = () =>
  (input.value = input.value.substring(0, input.value.length - 1));
