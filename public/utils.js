(function () {
  function generateTabs(times) {
    let tabs = "";
    for (let i = 0; i < times; i++) tabs += "  ";
    return tabs;
  }

  function beautifyFormula(mainFormula) {
    let stylizedFormula = mainFormula
      .replace(/\(/g, "(\n")
      .replace(/\)/g, "\n)")
      .replace(/\,/g, ", ")
      .replace(/\*/g, " * ")
      .replace(/\+/g, " + ")
      .replace(/\//g, " / ")
      .replace(/\-/g, " - ")
      .replace(/\>/g, " > ")
      .replace(/\</g, " < ")
      .replace(/\=/g, " = ");

    const formulaLines = stylizedFormula.split("\n");

    let tabs = 0;
    for (let i = 0; i < formulaLines.length; i++) {
      const line = formulaLines[i];
      formulaLines[i] = generateTabs(tabs) + line;
      tabs += line.indexOf(")") >= 0 ? -1 : 1;
    }

    stylizedFormula = formulaLines.join("\n");

    return stylizedFormula.replace(/\((.|\n)[^\)\(]+\)/g, (substr) => {
      return substr.replace(/(\n|\t|\s{2,})+/g, "");
    });
  }

  function minifyFormula(formula) {
    return formula.replace(/(\n|\t|\s{2,})+/g, "");
  }

  window.beautifyFormula = beautifyFormula;
  window.minifyFormula = minifyFormula;
})();
