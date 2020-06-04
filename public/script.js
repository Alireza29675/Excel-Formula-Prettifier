const minifiedInput = document.querySelector("input.minified");
const beautifiedInput = document.querySelector("textarea.beautified");

const doBeautify = () => {
  beautifiedInput.innerHTML = beautifyFormula(minifiedInput.value);
};
const doMinify = () => {
  minifiedInput.value = minifyFormula(beautifiedInput.value);
};

minifiedInput.addEventListener("change", doBeautify);
minifiedInput.addEventListener("keyup", doBeautify);

beautifiedInput.addEventListener("change", doMinify);
beautifiedInput.addEventListener("keyup", doMinify);
