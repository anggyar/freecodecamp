const regexPattern = document.getElementById("pattern")
const stringToTest = document.getElementById("test-string")
const testButton = document.getElementById("test-btn")
const testResult = document.getElementById("result")

const caseInsensitiveFlag = document.getElementById("i")
const globalFlag = document.getElementById("g")

function getFlags() {
  let flags = "";
  if(globalFlag.checked && caseInsensitiveFlag.checked) {
    flags += "i";
    flags+= "g"
  } else if (globalFlag.checked) {
    flags += "g"
  } else if (caseInsensitiveFlag.checked) {
    flags+= "i";
  }

  return flags
}

testButton.addEventListener("click", () => {
  const flags = getFlags()
  const fullRegex = new RegExp(regexPattern.value, flags)


  stringToTest.innerHTML = stringToTest.innerText.replace(fullRegex, '<span class="highlight">$&</span>')
  console.log(stringToTest.innerHTML)
  const matched = stringToTest.innerText.match(fullRegex);
  console.log(matched)
  
  testResult.innerText = matched ? matched.join(", ") : "no match";
})