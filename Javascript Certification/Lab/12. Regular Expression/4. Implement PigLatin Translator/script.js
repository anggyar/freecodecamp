function translatePigLatin(string) {
  if(/^[aiueo]/i.test(string)) {
    return string + "way";
  }

  const match = string.match(/^[^aiueo]+/i);
  console.log(match);

  if(match) {
    const consonantCluster = match[0];
    console.log("consonantCluster: ", consonantCluster);
    const sisa = string.slice(consonantCluster.length);
    console.log("sisa: ", sisa);

    return sisa + consonantCluster + "ay";
  }

  return string + "ay";
}

console.log(translatePigLatin("california"))
console.log(translatePigLatin("paragraphs"))
console.log(translatePigLatin("eigth"))
console.log(translatePigLatin("schwartz"))