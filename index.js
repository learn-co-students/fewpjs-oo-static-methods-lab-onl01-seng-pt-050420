class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-']+/g, '');
  }

  static titleize(string){

    // var str = string.split(' ');

    // str.each(str, function(index, strg){
    //   str[index] = strg.chartAt(0).toUpperCase() + strg.slice(1); 
    // });
    // return str.join(' ');
  }
}