function generateCombinations() {
  const input = document.getElementById("input").value;
  const items = input.split(",").map(item => item.trim());

  const result = [];
  for (let r = 1; r <= items.length; r++) {
    const combinations = getCombinations(items, r);
    result.push(...combinations);
  }

  const resultDict = { combination: result };

  const yamlOutput = jsyaml.dump(resultDict); 
  document.getElementById("output").value = yamlOutput;
}

function getCombinations(arr, size) {
  const combinations = [];

  if (size === 1) {
    return arr.map(value => [value]);
  }

  arr.forEach((fixed, index, originalArr) => {
    const rest = originalArr.slice(index + 1);
    const combinationsOfRest = getCombinations(rest, size - 1);
    const combinationsWithFixed = combinationsOfRest.map(comb => [fixed, ...comb]);
    combinations.push(...combinationsWithFixed);
  });

  return combinations;
}

// ...(rest of the javascript code remains the same)

function copyOutput() {
  const outputTextarea = document.getElementById("output");
  outputTextarea.select();
  document.execCommand("copy");
}
