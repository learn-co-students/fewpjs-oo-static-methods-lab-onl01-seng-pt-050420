class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    let regex = /^[a-z0-9]+$/i
    return string.split("").filter(char => regex.test(char) || char === "-" || char === "'" || char === " ").join("")
    
  }

static titleize(string) {
  let wordArr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

  return string.split(" ").map((element, index) => {
    if(index === 0 || !wordArr.includes(element)){
      return this.capitalize(element)
    } else {
      return element 
    }
  }).join(" ")
}


}