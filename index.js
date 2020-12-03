class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  };

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/gi, '');
  };

  static titleize(title) {
    const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    const formattedTitle = [];

    let stringToArray = title.split(' ')
    for (let i = 0; i < stringToArray.length; i++) {
      if (i == 0) {
        formattedTitle.push(stringToArray[i].replace(/^\w/, (c) => c.toUpperCase()));
      } else if (exceptions.includes(stringToArray[i]) == false) {
        formattedTitle.push(stringToArray[i].replace(/^\w/, (c) => c.toUpperCase()));
      } else {
        formattedTitle.push(stringToArray[i]);
      };
    };

    return formattedTitle.join (" ");
  };
}

console.log(Formatter.titleize("chicken soup with rice and a few other songs"));
console.log(Formatter.titleize("a tale of two cities"));