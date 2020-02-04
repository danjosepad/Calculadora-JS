const input = document.getElementsByTagName("input")[0];

addValue = value => {
  input.value += value;
};

addAction = action => {
  const value = input.value.slice(-2);
  if (value.match(/[()%/*-+.]/g) === null) input.value += action;
  else value.match(/[()%/*-+.]/g).length < 2 ? (input.value += action) : null;
};

reset = () => (input.value = "");

execute = () => {
  const value = input.value;
  input.value = value.replace(/%/g, "/100");
  try {
    input.value = eval(input.value);
  } catch (e) {
    input.value = "Erro ao calcular :(";
  }
};
